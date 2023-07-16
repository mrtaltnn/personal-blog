
export async function imageGalleryFetch(page: number): Promise<any> {
    const endpoint = `${import.meta.env.API_URL_FOR_BROWSER}/gallery?page=${page}`;
    
    const response = await fetch(endpoint);
    if (!response.ok) {
        throw Error(response.statusText);
    }
    const json = await response.json();
    return json;
}

