import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL
// const API_KEY = import.meta.env.VITE_API_KEY;

const instance = axios.create({
  baseURL: BASE_URL,
})

export default instance