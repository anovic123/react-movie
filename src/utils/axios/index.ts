import axios from 'axios';

const TMDB_KEY = import.meta.env.VITE_API_KEY

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_HOST,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    api_key: TMDB_KEY
  }
})