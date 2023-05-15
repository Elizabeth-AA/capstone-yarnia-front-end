import axios from "axios"
import { API_URL, RAV_URL, RAV_HEADER } from "@utils/const"

export const apiInstance = axios.create({
  baseURL: API_URL,
})

export const ravInstance = axios.create({
    baseURL: RAV_URL,
    headers: {
        Authorization: RAV_HEADER,
    },
})