/**
 * Author: Nirmal Bhimani, Janvi Patel.
 * Created On: 2021-06-07
 * Order handling and review storing
 */

import React, { Component, useState , useEffect } from 'react';
import './orderPage.css';
import { useHistory } from 'react-router-dom';
import orderService from '../../../Services/Private/order.service';
import axios from 'axios';
import wordCloud from '../WordCloud/WordCloud';

const OrderPage = () => {

    let history = useHistory();
    const [isOrdered, setIsOrdered] = useState(false);
    const [orderData, setOrderData] = useState();

    const [ review , setReview] = useState();
    const [ wordCloud , setWordCloud] = useState();
    const [ value , setValue] = useState();


    var item;
    var price;
    var restaurantName;

    /**
         * On Page render, the restaurant ID is stored to pass that into database entry while storing feedback
         * @param {*} event 
    */
    useEffect(() => {
        item =   localStorage.getItem("item");
        console.log("item"+item);
        price =  localStorage.getItem("price");
        restaurantName = localStorage.getItem("restaurantId");
        console.log("---restaurantId"+localStorage.getItem("restaurantId"));
      },[]);


    const  onValueChange = (event) => {
      
        const {id , value} = event.target;
        setReview(value);
     
    }
    
     /**
         * On click of Add button, the API call has been made and review along with restaurant Id is passed to AWS lambda
         * @param {*} event 
    */
    const handleStoreData =  (event) => 
    {
        let restaurantId = localStorage.getItem("restaurantId");
        event.preventDefault();
        if(review == " "){
            alert("Null feedback provided!!!");
        }
        else{
            axios.post("https://8qq2x0rtge.execute-api.us-east-1.amazonaws.com/default/wordCloudGroup11",JSON.stringify({data: review, restaurantId: restaurantId})).then((response) => {
                let row = ""
                setValue(row);
                alert('Successfully stored data into database');
            }).catch((error) => {
                console.log("Eroor")
            })
        }
    }

    /**
         * On click of Generate Word cloud button, another page is being render named 'wordcloud.js'
         * @param {*} event 
    */
    const generateWordCloud =  (event) => 
    {
        event.preventDefault();
        history.push("/WordCloud");
    }


    const confirmOrder = (e) => {
        e.preventDefault();
    
        var data = {
            email : localStorage.getItem("email"),
            item :localStorage.getItem("item"),
            price :localStorage.getItem("price"),
            restaurantsName :localStorage.getItem("restaurantId")
        }

        console.log("formData"+JSON.stringify(data));

        setIsOrdered(true);
    }

    /**
         * HTML code for viewing order confirmation and providing feedback
         * @param {*} event 
    */
    return (<>

        <div className="container"  style={{  overflow: "auto", maxHeight: "100vh"  }}>
            <div className="row" style={{ justifyContent: "center", alignContent: "center" }}>
                { isOrdered ?  <h1>
                    Your order has been Placed
                </h1>  :  <h1>
                    Check Your Order
                </h1>
                  }
               
            </div>
            <div className="row" style={{ justifyContent: "center", alignContent: "center", marginTop: "20px" }}>
                <p></p>

            </div>

            <div>
                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-4 row-cols-xl-7" style={{ justifyContent: "center", alignContent: "center", marginTop: "20px" }}>
                    <div className="col mb-7" style={{ minHeight : "200px" }}>
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title">Item Name:- {localStorage.getItem("item")} </h5>
                                <p className="card-text">Price:- {localStorage.getItem("item")} </p>
                                {
                                  isOrdered ?  <p><button  className= {"button"} style={{backgroundColor: "#2EE59D" , color : "#ffffff" , border : "#2EE59D"}}  onClick={(e) => confirmOrder(e)} >Confirmed</button></p>
                                  :  <p><button  className= {"button"} style={{backgroundColor: "rgb(42, 82, 190)" , color : "#ffffff" , border : "rgb(42, 82, 190)"}}  onClick={(e) => confirmOrder(e)} >Order</button></p> 
                                }
                               
                            </div>
                        </div>
                    </div>
                   
                </div>


            </div>
                                { isOrdered ?     <div>
            <div className="row justify-content-center" >
                <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                    <h1 className="text-center mt-5">Review</h1>
                    <div className="mt-4">
                        <form>
                            <p>Enter your feedback:</p>
                            <input type="text" name="review" onChange={onValueChange} id ="review" />
                            <button type="submit" className="btn btn-primary" style ={{marginLeft:"10px"}} onClick={handleStoreData} placeholder="submit">Add</button>
                            <button type="wordCloud" className="btn btn-primary" style ={{marginLeft:"10px"}} onClick={generateWordCloud} placeholder="submit">Generate Word</button>
                        </form>
                    </div>
                </div>
        </div>
            </div> : "" }
        

              
        </div>

    </>);
}

export default OrderPage;