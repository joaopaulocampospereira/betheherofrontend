import axios from 'axios';

const api = axios.create({
    baseURL: 'https://be-the-hero-semanaomnistack.herokuapp.com/'
})

export default api;