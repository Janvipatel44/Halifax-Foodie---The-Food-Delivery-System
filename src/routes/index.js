
import React , { useState }  from 'react';
import PrivateSection from './PrivateSection';
import PublicSection from './PublicSection';
import "../../node_modules/jquery/dist/jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap"

const Routes = () => {

    const [userRole, setUserRole] = useState("admin");

    
    if(localStorage.getItem("isUserLoggedin") == 'true')
    {
       
        return <PrivateSection/>;
    }else if(localStorage.getItem("isUserLoggedin") == 'false'){

      
        return <PublicSection/>;
    }else{
        return <PublicSection/>;
    }
}
export default Routes;