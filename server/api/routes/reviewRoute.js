const express = require('express')
const router = express.Router()
var axios = require("axios").default;

router.post('/data', async (req, res) => {
    console.log("hello",req.body)   

    var axios = require("axios").default;

    var options = {
    method: 'POST',
    url: 'https://textvis-word-cloud-v1.p.rapidapi.com/v1/textToCloud',
    headers: {
        'content-type': 'application/json',
        'x-rapidapi-key': '26b0fd7acamshfe1164ade18f760p1a4febjsnbb057f81aa0c',
        'x-rapidapi-host': 'textvis-word-cloud-v1.p.rapidapi.com'
    },
    data: {
        text: 'This is a test. I repeat, this is a test. We are only testing the functionality of this api, nothing else. End of test.',
        scale: 0.5,
        width: 400,
        height: 400,
        colors: ['#375E97', '#FB6542', '#FFBB00', '#3F681C'],
        font: 'Tahoma',
        use_stopwords: true,
        language: 'en',
        uppercase: false
    }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        res.send(response.data);
    }).catch(function (error) {
        console.error(error);
    });
})

module.exports = router
