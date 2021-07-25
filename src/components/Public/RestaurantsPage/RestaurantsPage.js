import React, { Component } from 'react';

const RestaurantsPage = () => {
   
    return ( <>
    <div className="container">
    <div className="row" style={{justifyContent : "center" , alignContent : "center" , marginTop:"20px"}}>
    <h1>
  Discover the best food & drinks in Halifax, NS
  </h1>
    </div>
    <div className="row"  style={{justifyContent : "center" , alignContent : "center" , marginTop:"20px"}}>
    <p>Popular localities in and around Halifax, Nova Scotia</p>
    </div>
  <div   > 
  <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-4 row-cols-xl-7" >
  <div className="col mb-7" >
    <div className="card">
      <img src="https://static01.nyt.com/images/2018/11/21/dining/21REST-slide-I26Y/21REST-slide-I26Y-jumbo.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Adda Indian Restaurant</h5>
        <p className="card-text">5640 Spring Garden Road, Halifax, NAMER B3J</p>
        <p className="card-text">5640 Spring Garden Road, Halifax, NAMER B3J</p>
      </div>
    </div>
  </div>
  <div className="col mb-7" >
    <div className="card">
      <img src="https://threebestrated.ca/images/CurryVillage-Halifax-NS.jpeg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Curry Vilage Indain Restaurant</h5>
        <p className="card-text">6386 Quinpool Rd, Halifax, NS B3H </p>
      </div>
    </div>
  </div>
</div>
  </div>
</div>
    </>
     );
}
 
export default RestaurantsPage;