import axios from "axios";

export let connectio = axios.create(
    {
        baseURL:"http://localhost:8888/public/test",
        headers:{"Authorization":"Bearer "+localStorage.getItem("token")}
    }
)