import axios from 'axios';

let api = axios.create({
    baseURL: 'http://192.168.1.64:3334'
});

export default api;
