import axios from 'axios';

const api = axios.create({
    baseURL: 'https://be-the-hero-bkend.herokuapp.com/'
});

export default api;
