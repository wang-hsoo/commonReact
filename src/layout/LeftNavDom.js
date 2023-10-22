import { useSelector, useDispatch } from "react-redux";
import { add } from "../state/commonSlice";



function LeftNavDom({data}){
    const current = useSelector(( state ) => state.common.path);
    const dispatch = useDispatch();

   
    const onClick = (data) => {
        console.log("경로:::",JSON.stringify( data))
        dispatch(add({ path: data.path}))
    }
    
    

    return(
        data?.childNode.map((route) => (
            <li key={data.path} onClick={() => onClick(route)} style={{"fontWeight" : `${current === route.path ? "bold" : 200}`}}>
                {route.route}
            </li>
        ))
    )
}

export default LeftNavDom;