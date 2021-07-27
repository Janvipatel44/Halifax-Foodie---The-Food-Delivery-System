import axios from 'axios';

const ReceipeSimilarity= (request)=>{
    console.log('new:',request);
        
    let data = {};
    data ['text'] = "bread, butter, tomato, onion, coriander chutney";
    const url = 'https://us-central1-csci5410project.cloudfunctions.net/cloudFunction_ReceipeSimilarity/?'+'text'+'='+data['text']

    return axios.post(url, data).then(response => {
        console.log(response);
        response.send(response);
    })
}

export default {
    ReceipeSimilarity,
}