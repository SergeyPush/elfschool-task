import axios from 'axios';

const HOST = import.meta.env.VITE_DB_HOST;
const PORT = import.meta.env.VITE_DB_PORT;

const api = axios.create({
  baseURL: `http://${HOST}:${PORT}/api`,
});

export default api;
