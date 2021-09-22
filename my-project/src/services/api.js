import axios from "axios";

export const api = axios.create({
    baseURL: 'http://8eb8-191-253-127-94.ngrok.io',
    timeout: 1000
});



