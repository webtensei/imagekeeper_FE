import axios from "axios";

export const API_URL = `https://imagekeeper.webtensei.ru/api`

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})


export default $api
