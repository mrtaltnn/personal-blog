import type { APIRoute } from 'astro';

export const get: APIRoute = async ({ params, request }) => {
  const url = new URL(request.url)
  const _page = (new URLSearchParams(url.search)).get("page") || "1";
  let page: number = parseInt(_page);
  console.log(page);
  

  const data = await getUnsplachUserPhotos(page);

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

async function getUnsplachUserPhotos( page: number) {
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
      blur_hash:x.blur_hash,
      urls: x.urls,
    };
  });
  return results;
}