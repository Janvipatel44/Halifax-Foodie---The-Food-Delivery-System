import axios from 'axios';

const loginUser= (loginCredential)=>{
    console.log("in  login service "+loginCredential)
    return axios.post("http://localhost:3001/login",loginCredential)
}

export default {
    loginUser
}
