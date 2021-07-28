import axios from 'axios';

const addItem= (addItemDetails)=>{
    console.log("in service ")
    return axios.post("http://localhost:3001/additem",addItemDetails)
}

export default {
    addItem,
}
