import axios from "axios";




const clientFetch = axios.create({
  baseURL: import.meta.env.API_URL_FOR_BROWSER,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    culture: "tr",
  },
});
clientFetch.interceptors.request.use(async (config) => {
  let _config = config;



  return _config;
});

clientFetch.interceptors.request.use((request) => {
  console.log("Starting Request", JSON.stringify(request, null, 2));
  return request;
});

clientFetch.interceptors.response.use((response) => {
  console.log("Response:", JSON.stringify(response, null, 2));
  return response;
});

export default clientFetch;
