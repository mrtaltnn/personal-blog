
export async function imageGalleryFetch(page: number): Promise<any> {
    const endpoint = `${import.meta.env.PUBLIC_API_URL}/gallery?page=${page}`;
    
    const response = await fetch(endpoint);
    if (!response.ok) {
        throw Error(response.statusText);
    }
    const json = await response.json();
    return json;
}

