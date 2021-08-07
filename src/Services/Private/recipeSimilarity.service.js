/**
 * Author: Janvi Patel.
 * Created On: 2021-06-07
 * recipe Similarity service
 */

import axios from 'axios';

/**
 * This file is used to make the cloud function trigger and provided text (ingredients along with the link)
 * Stores the reponse and return it back
 */
const ReceipeSimilarity= async (request)=>{
    let data = {};
    const url = 'https://us-central1-csci5410project.cloudfunctions.net/cloudFunction_ReceipeSimilarity/?'+'text'+'='+request['text']

    let response =  await axios.post(url);
    return response.data;
}

export default {
    ReceipeSimilarity,
}