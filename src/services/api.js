import axios from 'axios';

const token = localStorage.getItem('token');

const api = axios.create({
  baseURL: 'https://hml-api-customer.chegarapido.com.br/v1',
  headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' }
});

export default api;
