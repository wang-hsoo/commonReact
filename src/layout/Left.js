
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../state/commonSlice';


function Left(){

    const Menu = [
        {
            "path" : "/menu1",
            "route" : "menu1"
        },
        {
            "path": "/menu2",
            "route" : "menu2"
        }
    ];

    const dispatch = useDispatch();

   
    const onClick = (data) => {
        console.log("경로:::",JSON.stringify( data))
        dispatch(add({ path: data.path}))
    }

    return(
        <ul>
            {Menu?.map(( data ) => (
                <li key={data.route} onClick={() => onClick(data)}>
                    {data.route}
                </li>
            ))}
        </ul>
    )
}


export default Left;