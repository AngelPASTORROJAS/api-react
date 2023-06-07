import axios from "axios";

const API_ROUTE = "https://jsonplaceholder.typicode.com";

const httpClient = axios.create({
  baseURL: API_ROUTE,
});

export default httpClient;
