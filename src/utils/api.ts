import { API_URL } from './constants';

const axios = require('axios');

export const api = axios.create({
  baseURL: API_URL,
  headers: {'Content-Type': 'application/json'}
});