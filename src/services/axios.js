import axios from "axios"
import { API_URL, RAV_URL, RAV_HEADER } from "@utils/const"

// const API_URL = import.meta.env.API_URL
// // const API_KEY = import.meta.env.VITE_API_KEY;
// // const RAV_SEARCH_URL = import.meta.env.RAV_SEARCH_URL
// console.log(REACT_APP_RAV_SEARCH_URL)
// const RAV_HEADER = import.meta.env.RAV_HEADER

export const apiInstance = axios.create({
  baseURL: API_URL,
})

export const ravInstance = axios.create({
    baseURL: RAV_URL,
    headers: {
        Authorization: RAV_HEADER,
    },
})