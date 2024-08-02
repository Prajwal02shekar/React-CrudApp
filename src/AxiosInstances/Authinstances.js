import axios from "axios";

const BASE_URL = "https://api.escuelajs.co/api/v1/"
const AuthInstances = axios.create({
    baseURL:BASE_URL
})

export default AuthInstances