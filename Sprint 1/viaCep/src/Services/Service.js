import axios from "axios";

const externalApi = "https://brasilaberto.com/api/v1/zipcode";

const api = axios.create({
    baseURL : externalApi
});


export default api;