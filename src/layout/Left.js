
import { useDispatch } from 'react-redux';
import { add } from '../state/commonSlice';
import LeftNavDom from './LeftNavDom';


function Left(){

    const Menu = [
        {
            "path" : "/menu1",
            "route" : "menu1",
            "childNode" : [
                {
                    "path" : "/menu1/menu_1",
                    "route" : "menu_1",
                },
                {
                    "path" : "/menu1/menu_2",
                    "route" : "menu_2",
                }
            ]
        },
        {
            "path": "/menu2",
            "route" : "menu2",
            "childNode" : [
                {
                    "path" : "/menu2/menu_1",
                    "route" : "menu_1",
                },
                {
                    "path" : "/menu2/menu_2",
                    "route" : "menu_2",
                }
            ]
        }
    ];

    const dispatch = useDispatch();

   
    const onClick = (data) => {
        console.log("경로:::",JSON.stringify( data))
        dispatch(add({ path: data.childNode[0].path}))
    }

    return(
        <ul>
            {Menu?.map(( data ) => (
                <li key={data.route} onClick={() => onClick(data)}>
                    <div>
                        {data.route}
                    </div>
                    <LeftNavDom data={data} />
                </li>
            ))}
        </ul>
    )
}


export default Left;