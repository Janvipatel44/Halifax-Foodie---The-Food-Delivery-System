import axios from 'axios';

const order= (orderData)=>{
    console.log("in  order service "+typeof(orderData));
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...'
      }
      
    
    return axios.post("https://ujt0o5az9b.execute-api.us-east-1.amazonaws.com/stage/order" , orderData)

}

export default {
    order
}
