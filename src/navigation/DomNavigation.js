import { useEffect, useState } from "react";
import Sample2 from "../pages/sample/Sample2";
import Sample1 from "../pages/sample/Smaple1";
import { useSelector, useDispatch } from 'react-redux';

const DomPath = [
    {
        "path": "/menu1",
        "dom": <Sample1 />
    },
    {
        "path": "/menu2",
        "dom": <Sample2 />
    }
]


const DomNavigation = () => {

    const current = useSelector(( state ) => state.common.path);


    try{
        const matchItem = DomPath.find((itme) => itme.path === current ? itme.dom : null)
        
        if(matchItem){
            return matchItem.dom
        }else{
            return <>Not Found</>
        }
    }catch{
        <>에러</>
    }

}


export default DomNavigation;