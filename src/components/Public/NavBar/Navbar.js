
import React, { Component } from 'react';
import './NavBar.css';
import { useHistory } from 'react-router-dom';

const PublicNavbar = () => {
    const history = useHistory();

    const mystyle = {
        hover: "white",
       
      };

    const onClickReceipeSimilarity = (event) => 
    {
        history.push("/recipesimilarity");
    }

    const onClickReview = (event) => 
    {
        history.push("/review");
    }

    return ( 
    <nav className="navbar navbar-expand-lg navbar-dark" id="home-navbar" style={{backgroundColor: '#2A52BE'}}>
        <a className="navbar-brand" href="#">Halifax Foodie</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="#navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarContent">
            <ul className="navbar-nav">
                <li><a className="nav-item nav-link" href="#">Recipes</a></li>
                <li><a className="nav-item nav-link" onClick={(e) => {onClickReview(e)}}>Review</a></li>
                <li><a className="nav-item nav-link"onClick={(e) => onClickReceipeSimilarity(e)}>ML</a></li>
                <li><a className="nav-item nav-link" href="#">Foods</a></li>
            </ul>
            <div>
                <a className="nav-item nav-link" href="/login">Login</a>
            </div>
        </div>
    </nav> 
 );
}
 
export default PublicNavbar;