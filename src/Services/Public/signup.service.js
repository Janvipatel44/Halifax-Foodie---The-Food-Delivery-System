import axios from 'axios';

const signupUser= (signupcredentials)=>{
    console.log("in service ")
    return axios.post("http://localhost:3001/signup",signupcredentials)
}

export default {
    signupUser,
}
