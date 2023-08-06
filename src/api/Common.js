import axios from "axios";


export const axiosInstance = axios.create({
    // baseURL: `${process.env.REACT_API_URL}`,
    baseURL: `http://localhost:3000`,
    timeout: 30000,
    headers: {
        access_token: "test_token",
    }
})




