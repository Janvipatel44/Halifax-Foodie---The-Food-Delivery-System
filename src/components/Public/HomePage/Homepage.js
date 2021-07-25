import React, { Component , useState  } from 'react';
import  './homepage.css';
import { useHistory } from 'react-router-dom';

const Homepage = () => {

  const history = useHistory();


  const restuarantItems = (e, restaurantId) => {
    e.preventDefault();
    console.log("restaurantId"+restaurantId);

 history.push("/restaurantsPage");

  }
    
    return ( <>

<div className="container">
    <div className="row" style={{justifyContent : "center" , alignContent : "center" , marginTop:"20px"}}>
    <h1>
 Welocome
  </h1>
    </div>
    <div className="row"  style={{justifyContent : "center" , alignContent : "center" , marginTop:"20px"}}>
    <p></p>
  
    </div>
  
  <div   > 
  
  <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-4 row-cols-xl-7" style={{justifyContent : "center" , alignContent : "center" , marginTop:"20px"}}>
  <div className="col mb-7" onClick= {(e) => restuarantItems(e, "1")}>
    <div className="card">
      <img src="https://static01.nyt.com/images/2018/11/21/dining/21REST-slide-I26Y/21REST-slide-I26Y-jumbo.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Adda Indian Restaurant</h5>
        <p className="card-text">5640 Spring Garden Road, Halifax, NAMER B3J</p>
      </div>
    </div>
  </div>
  <div className="col mb-7" onClick= {(e) => restuarantItems(e, "2")}>
    <div className="card">
      <img src="https://threebestrated.ca/images/CurryVillage-Halifax-NS.jpeg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Curry Vilage Indain Restaurant</h5>
        <p className="card-text">6386 Quinpool Rd, Halifax, NS B3H </p>
      </div>
    </div>
  </div>
  <div className="col mb-6" onClick= {(e) => restuarantItems(e, "3")}>
    <div className="card">
      <img src="https://threebestrated.ca/images/RasaFlavoursofIndia-Halifax-NS.jpeg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Dhaba Express</h5>
        <p className="card-text">8 Oland Crescent (Unit F), Halifax, NS B3S1C6 </p>
      </div>
    </div>
  </div>
 
 
</div>

  
  </div>

</div>
 

    </> );
}
 
export default Homepage;