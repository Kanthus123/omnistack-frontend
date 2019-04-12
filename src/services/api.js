import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-kanthus.herokuapp.com',
});

export default api;