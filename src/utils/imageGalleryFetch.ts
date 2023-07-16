
export async function imageGalleryFetch(page: number): Promise<any> {
    const endpoint = `http://localhost:3000/api/gallery?page=${page}`;
    const response = await fetch(endpoint);
    if (!response.ok) {
        throw Error(response.statusText);
    }
    const json = await response.json();
    return json;
}

