import { Suspense, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { getUser } from "../api/Auth";
import Loading from "../component/loading/Loading";
import Left from "./Left";
import DomNavigation from "../navigation/DomNavigation";




function Layout(){
    //const [user,setUser] = useState();

    


    return(
        < >
            <Header  />
        
            <Left />
            <DomNavigation />
            <Footer />
        </>
    )

}


export default Layout;