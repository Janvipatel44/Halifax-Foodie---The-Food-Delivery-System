// Author: 
// Author: Dhrumil Rakesh Shah (B00870600)
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/Public/Login/login';
import PublicNavbar from '../components/Public/NavBar/Navbar';
import Signup from '../components/Public/Signup/signup';
import  MultiFactorValidation  from '../components/Public/MultifactorValidation/multiFactorValidation'

const PublicSection = () => {
    return ( <div>
            <PublicNavbar></PublicNavbar>
                <Switch>
                    <Route path="/login" component={Login}>
                        <Login></Login>
                    </Route>
                    <Route path="/signup" component={Signup}>
                        <Signup></Signup>
                    </Route>
                    <Route path="/secondValidation" component={MultiFactorValidation}>
                        <MultiFactorValidation></MultiFactorValidation>
                    </Route>
            </Switch> 
        </div>
    );
}
 
export default PublicSection;