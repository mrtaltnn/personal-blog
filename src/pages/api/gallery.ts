import type { APIRoute } from 'astro';

export const get: APIRoute = ({ params, request }) => {
    return {
      body: JSON.stringify({
        message: "This was a GET!"
      })
    }
  };
  
  export const all: APIRoute = ({ request }) => {
    return {
      body: JSON.stringify({
        message: `This was a ${request.method}!`
      })
    }
  }