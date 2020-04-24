import axios from 'axios';

let api = axios.create({
    baseURL: 'http://192.168.1.70:3334'
});

export default api;
