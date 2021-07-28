import axios from 'axios';

const ReceipeSimilarity= async (request)=>{
    let data = {};
    const url = 'https://us-central1-csci5410project.cloudfunctions.net/cloudFunction_ReceipeSimilarity/?'+'text'+'='+request['text']

    let response =  await axios.post(url);
    return response.data;
}

export default {
    ReceipeSimilarity,
}