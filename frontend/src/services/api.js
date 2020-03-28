import axios from 'axios';

let api = axios.create({
    baseURL: 'http://localhost:3334'
});

export default api;