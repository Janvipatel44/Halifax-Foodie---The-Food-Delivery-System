import React, { Component, useState , useEffect } from 'react';
import './Restaurants.css';
import { useHistory } from 'react-router-dom';

const Homepage = () => {

    const history = useHistory();


    const orderItems = (e, item, price) => {

        var  isUserLoggedIn = localStorage.getItem("isUserLoggedin");
        e.preventDefault();
        if(isUserLoggedIn == "true"){
            console.log("itemNumber" + item);
            localStorage.setItem("item", item);
            localStorage.setItem("price", price);
            history.push("/orderItem");
        }
        else {
            alert("Please Login")
        }
        
        
    }

    useEffect(() => {
        
       
      });

    return (<>

        <div className="container"  style={{  overflow: "auto", maxHeight: "100vh"  }}>
            <div className="row" style={{ justifyContent: "center", alignContent: "center" }}>
                <h1>
                    Select Your Favorite dishes
                </h1>
            </div>
            <div className="row" style={{ justifyContent: "center", alignContent: "center", marginTop: "20px" }}>
                <p></p>

            </div>

            <div>
                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-4 row-cols-xl-7" style={{ justifyContent: "center", alignContent: "center", marginTop: "20px" }}>
                    <div className="col mb-7" style={{ minHeight : "200px" }}>
                        <div className="card" style={{ minHeight : "500px" }}>
                            <img src="https://images.food52.com/gn_HamUVyBdae5uZfhAKUx5lj4g=/660x440/filters:format(webp)/d815e816-4664-472e-990b-d880be41499f--chicken-biryani-recipe.jpg" className="card-img-top" alt="..." style = {{height: "200px"}} />
                            <div className="card-body">
                                <h5 className="card-title">Chiken Biryani </h5>
                                <p className="card-text">Layered basmati rice, marinated chicken, and cooked together slowly in the dum method. Paired with raita.</p>
                                <p className="card-text">$13.99</p>
                                <p><button  className= {"button"} style={{backgroundColor: "rgb(42, 82, 190)" , color : "#ffffff" , border : "rgb(42, 82, 190)"}}  onClick={(e) => orderItems(e, "Chiken Biryani " , "9.99")} >Order</button></p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col mb-7"  style={{ minHeight : "200px" }}> 
                        <div className="card" style={{ minHeight : "500px" }}>
                            <img src="https://d1ralsognjng37.cloudfront.net/7c40c166-bd2f-48ef-ae34-0fbe5a0f585b.jpeg" className="card-img-top" alt="..." style = {{height: "200px"}} />
                            <div className="card-body">
                                <h5 className="card-title">Chole Bhature</h5>
                                <p className="card-text">Deep fried bread paired with delicious chickpea curry. </p>
                                <p className="card-text">$10.99</p>
                                <p><button className= {"button"} style={{backgroundColor: "rgb(42, 82, 190)" , color : "#ffffff" , border : "rgb(42, 82, 190)"}}  onClick={(e) => orderItems(e, "Chole Bhature" , "9.99")} >Order</button></p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-6"  style={{ minHeight : "200px" }}>
                        <div className="card" style={{ minHeight : "500px" }}>
                            <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2017/01/samosa-chaat-recipe.jpg" className="card-img-top" alt="..." style = {{height: "200px"}} />
                            <div className="card-body">
                                <h5 className="card-title">Samosa Chhat</h5>
                                <p className="card-text">Two smashed vegetable samosas topped with sweet homemade yogurt, tamarind and mint chutneys, red onion, tomato, gram flour crunch, and papdi crisps. </p>
                                <p className="card-text">$6.99</p>
                                <p><button className= {"button"} style={{backgroundColor: "rgb(42, 82, 190)" , color : "#ffffff" , border : "rgb(42, 82, 190)"}}  onClick={(e) => orderItems(e, "Samosa Chhat" , "9.99")} >Order</button></p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


            <div>
                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-4 row-cols-xl-7" style={{ justifyContent: "center", alignContent: "center", marginTop: "20px" }}>
                    <div className="col mb-7"  style={{ minHeight : "200px" }}>
                        <div className="card" style={{ minHeight : "50px" }}>
                            <img src="https://d1ralsognjng37.cloudfront.net/42378fed-6d7d-4a07-85ae-91c9b92f4738.jpeg" className="card-img-top" alt="..." style = {{height: "200px"}} />
                            <div className="card-body">
                                <h5 className="card-title">Pav Bhaji </h5>
                                <p className="card-text">A thick mashed vegetable gravy with a generous amount of butter. Served with two soft rolls toasted with garlic butter.</p>
                                <p className="card-text">$7.99</p>
                                <p><button  className= {"button"} style={{backgroundColor: "rgb(42, 82, 190)" , color : "#ffffff" , border : "rgb(42, 82, 190)"}}  onClick={(e) => orderItems(e, "Pav Bhaji " , "9.99")} >Order</button></p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-7"  style={{ minHeight : "200px" }}> 
                        <div className="card" style={{ minHeight : "500px" }}>
                            <img src="https://d1ralsognjng37.cloudfront.net/274677be-9aa5-416a-93d2-5c4de69ce2d2.jpeg" className="card-img-top" alt="..." style = {{height: "200px"}} />
                            <div className="card-body">
                                <h5 className="card-title">Masala Dosa</h5>
                                <p className="card-text">Spiced mashed potato, curry leaves, mustard seeds, and cumin. Crispy lentil crepe paired with sambar and coconut chutney. </p>
                                <p className="card-text">$9.99</p>
                                <p><button   className= {"button"} style={{backgroundColor: "rgb(42, 82, 190)" , color : "#ffffff" , border : "rgb(42, 82, 190)"}}   onClick={(e) => orderItems(e, "Masala Dosa" , "9.99")} >Order</button></p>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-6" style={{ minHeight : "200px" }}>
                        <div className="card" style={{ minHeight : "500px" }}>
                            <img src="https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9lYmEzNGQ4YS02OTRmLTRmYTMtYmYxMy1hMTY1YjczM2ViZTIuanBlZw==" className="card-img-top" alt="..." style = {{height: "200px"}} />
                            <div className="card-body">
                                <h5 className="card-title">Butter Chicken Bowl</h5>
                                <p className="card-text">Creamy tomato gravy, chicken tikka and steamed rice</p>
                                <p className="card-text">$9.99</p>
                                <p><button className= {"button"} style={{backgroundColor: "rgb(42, 82, 190)" , color : "#ffffff" , border : "rgb(42, 82, 190)"}}  onClick={(e) => orderItems(e, "Butter Chicken Bowl" , "9.99")} >Order</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </>);
}

export default Homepage;