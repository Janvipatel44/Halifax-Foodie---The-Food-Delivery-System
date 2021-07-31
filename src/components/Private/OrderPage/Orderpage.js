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
    useEffect(() => {
        item =   localStorage.getItem("item");
        console.log("item"+item);
        price =  localStorage.getItem("price");
      });


    const  onValueChange = (event) => {
      
        const {id , value} = event.target;
        setReview(value);
     
    }
    
    const handleStoreData =  (event) => 
    {
        event.preventDefault();
        axios.post("https://8qq2x0rtge.execute-api.us-east-1.amazonaws.com/default/wordCloudGroup11",JSON.stringify({data: review})).then((response) => {
            let row = ""
            // response.data.Items.forEach((element, index) => {
            //     row = row + element.message;
            //     row = row + " ";
            // });
            setValue(row);
            alert('Successfully stored data into database');
        }).catch((error) => {
            console.log("Eroor")
        })

    }
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

        // orderService.order(data).then((response)=>{
        //     console.log(" ---")
        //     if(response.data.success === true ){
                
        //         setIsOrdered(true);
        //     }
        // }).catch((error) => {
        //     alert("try again");
            
        // });


    }

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