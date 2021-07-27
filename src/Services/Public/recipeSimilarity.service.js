import axios from 'axios';

const ReceipeSimilarity= (request)=>{
    console.log('new:',request);
    let config = {
        headers: {"Access-Control-Allow-Origin": "*"}
    }
    let data = {"text": "bread, butter, tomato, onion, coriander chutney"};
    return axios.post("https://us-central1-csci5410project.cloudfunctions.net/cloudFunction_ReceipeSimilarity", data,config).then(response => {
        console.log(response);
        response.send(response);
    })
}

export default {
    ReceipeSimilarity,
}