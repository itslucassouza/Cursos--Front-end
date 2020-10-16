import axios from 'axios';

const api = axios.create({ baseURL: 'https://rockeatseat-node.herokuapp.com/api' });

export default api;