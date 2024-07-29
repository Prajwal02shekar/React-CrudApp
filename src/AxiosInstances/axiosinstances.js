import axios from "axios";
let BASEURL = "http://localhost:5000/courses"
let AxiosInstances = axios.create({
    baseURL: BASEURL,
    
})
export default AxiosInstances