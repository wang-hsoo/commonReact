import { axiosInstance } from "./Common"



export const getUser = async() => {
    const data = await axiosInstance.get('/exData/user.json').then(res => {
        return res.data
    }).catch( error => {
        console.log(error)
    })

    return data
}

