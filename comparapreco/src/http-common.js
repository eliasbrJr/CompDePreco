import axios from "axios";

const API_URL = "http://localhost:8001/v1/"

export default axios.create({
    baseURL: API_URL,
    headers: {"Content-type": "aplication/json"}
});