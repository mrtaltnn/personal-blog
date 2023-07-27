import type { APIRoute } from 'astro';

export const get: APIRoute = async ({ params, request }) => {
  const url = new URL(request.url)
  const _page = (new URLSearchParams(url.search)).get("page") || "1";
  let page: number = parseInt(_page);


  // const data = await getUnsplachUserPhotos(page);
  const data = await getFlickrUserPhotos(page);

  return new Response(JSON.stringify({
    data,
    message: "This was a GET!"
  }), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};

export const all: APIRoute = ({ request }) => {
  return {
    body: JSON.stringify({
      message: `This was a ${request.method}!`
    })
  }
}

async function getUnsplachUserPhotos(page: number) {
  const endpoint = `${import.meta.env.UNSPLASH_API_URL}/users/${import.meta.env.UNSPLASH_USERNAME}/photos/?client_id=${import.meta.env.UNSPLASH_CLIENT_ID}&page=${page}`;
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const json = await response.json();
  var results = json.map(function (x: any) {
    return {
      id: x.id,
      description: x.description,
      alt: x.alt_description,
      width: x.width,
      height: x.height,
      color: x.color,
      blur_hash: x.blur_hash,
      urls: x.urls,
    };
  });
  return results;
}

async function getFlickrUserPhotos(page: number) {
  const endpoint = `${import.meta.env.FLICKR_API_URL}/services/rest/?method=flickr.people.getPublicPhotos&api_key=${import.meta.env.FLICKR_API_KEY}&user_id=${import.meta.env.FLICKR_API_USER_ID}&extras=+url_o%2C+url_m&per_page=10&page=${page}&format=json&nojsoncallback=1`;

  const response = await fetch(endpoint);
  
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const json = await response.json();
  const photoList = json.photos.photo;
  
  var results = photoList.map(function (x: any) {
    return {
      id: x.id,
      description: x.title,
      alt: x.title,
      urls: 
        {
          original: {
            url: x.url_o,
            w: x.width_o,
            h: x.height_o
          },
          medium: {
            url: x.url_m,
            w: x.width_m,
            h: x.height_m
          }
        }
    };
  });
  return results;
}