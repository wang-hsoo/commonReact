import React, { useEffect, useState } from "react";
import Layout from "../../layout/Index";
import { getUser } from "../../api/Auth";

import {  useDispatch } from 'react-redux';
import { auth } from "../../state/userSlice";







function Main(){
    const [userAuth, setAuth] = useState(false);
    const dispatch = useDispatch();

    const Auth = async() => {
        const user = await getUser()
        if(user){
            console.log("사용자인증:::", JSON.stringify(user))
            dispatch(auth(user))
            setTimeout(() => {
                //테스트를 위한 timeout
                setAuth(true)
            }, 3000)
        }
    }

    useEffect(() => {
        Auth()
    },[])

    return(
        <>
            {userAuth ? <Layout />  : <>인증중</>}
        </>
    )
}

export default Main;