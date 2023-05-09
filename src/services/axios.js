import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL
// const API_KEY = import.meta.env.VITE_API_KEY;
const RAV_URL = import.meta.env.RAV_URL
const RAV_HEADER = import.meta.env.RAV_HEADER

const instance = axios.create({
  baseURL: BASE_URL,
})

const instanceRav = axios.create({
    baseURL: RAV_URL,
    header: RAV_HEADER,
})

export default { instance, instanceRav }