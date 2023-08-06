
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../state/slice';


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
        console.log(data)
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