import axios from 'axios';

const ReceipeSimilarity= (data)=>{
    return axios.post("https://jsoh232wd3.execute-api.us-east-1.amazonaws.com/default/wordCloud", data)
}

export default {
    ReceipeSimilarity,
}
