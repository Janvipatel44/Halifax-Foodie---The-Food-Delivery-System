// Author: 
// Author: Dhrumil Rakesh Shah (B00870600)
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/Public/Login/login';
import PublicNavbar from '../components/Public/NavBar/Navbar';
import Signup from '../components/Public/Signup/signup';
import  MultiFactorValidation  from '../components/Public/MultifactorValidation/multiFactorValidation';
import Homepage from '../components/Public/HomePage/Homepage';
import ReceipeSimilarity from '../components/Public/ReceipeSimilarity/ReceipeSimilarity';
import Review from '../components/Public/Review/Review';
import RestaurantItems from '../components/Private/RestaurantItems/RestaurantItems';
import RestaurantsPage from '../components/Public/RestaurantsPage/RestaurantsPage'; 
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
                    <Route path="/" component={MultiFactorValidation} exact>
                        <Homepage></Homepage>
                    </Route>
                    <Route path="/review" component={Review}>
                        <Review></Review>
                    </Route>
                    <Route path="/recipesimilarity"  component={ReceipeSimilarity}  >
                        <ReceipeSimilarity></ReceipeSimilarity>
                    </Route>
                    <Route path="/restaurantsPage"  component={RestaurantsPage}  >
                        <RestaurantsPage></RestaurantsPage>
                    </Route>
                    <Route path="/restaurantsItem" component={RestaurantItems}>
                            <RestaurantItems></RestaurantItems>
                        </Route>

            </Switch> 
        </div>
    );
}
 
export default PublicSection;