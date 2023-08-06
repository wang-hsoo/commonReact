import { useEffect, useState } from "react";
import Sample2 from "../pages/sample/Sample2";
import Sample1 from "../pages/sample/Smaple1";
import { useSelector, useDispatch } from 'react-redux';




function DomNavigation(){

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

    const current = useSelector(( state ) => state.path.path);
    const [currentPage, setCurrentPage] = useState();

    useEffect(() => {
        const matchItem = DomPath.find((itme) => itme.path === current ? itme.dom : null)
        setCurrentPage(matchItem);
    },[current])

   

    return(
        <>
           {currentPage? currentPage?.dom : null}
            
        </>
        
    )
}


export default DomNavigation;