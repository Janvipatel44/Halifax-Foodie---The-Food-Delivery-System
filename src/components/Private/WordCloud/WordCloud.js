import React, { Component, useState , useEffect } from 'react';
import axios from 'axios';

const WordCloud = () => {

  const [ review , setReview] = useState();
  const [ wordCloud , setWordCloud] = useState();
  const [ value , setValue] = useState();

  const sendDataForValue = async function(response) {
  } 

useEffect(() =>{
  
  console.log('Here I am');
  axios.post("https://cvyb3ge2j4.execute-api.us-east-1.amazonaws.com/default/wordCloudGetDataGroup11",JSON.stringify({data: review})).then((response) => {
    let row = "";
    response.data.Items.forEach((element, index) => {
      row = row + element.message;
      row = row + " ";
  });
  setValue(row);
      console.log(response);
      console.log('value',value);
      alert('Successfully fetched data from database');
  
  }).catch((error) => {
      console.log("Eroor")
  })
} , [])

useEffect(() =>{
  axios.request(
    {
    method: 'POST',
    url: 'https://textvis-word-cloud-v1.p.rapidapi.com/v1/textToCloud',
    headers: {
        'content-type': 'application/json',
        'x-rapidapi-key': 'f870c70cccmsh264557ff26f7acep1588fdjsn9d67394fc992',
        'x-rapidapi-host': 'textvis-word-cloud-v1.p.rapidapi.com'
    },
    data: {
      text: value,
      scale: 0.5,
      width: 400,
      height: 400,
      colors: ['#375E97', '#FB6542', '#FFBB00', '#3F681C'],
      font: 'Tahoma',
      use_stopwords: true,
      language: 'en',
      uppercase: false
    }
}).then((response) => {
    setWordCloud(response.data);
}).catch((error) => {
    console.log("Eroor")
}) 

} , [value])

   
  return(   <div className="row justify-content-center" >
  <div className="col-xl-3 col-md-4 col-sm-6 col-12">
      <h1 className="text-center mt-5">Word Cloud</h1>
      <div className="mt-4">
              <img src={wordCloud}/>
      </div>
  </div>
</div>)

}


// export class Review extends Component 
// {
//     constructor(props) {
//         super(props)

//         this.state = {
//             review: "",
//             wordCloud: "",
//             value: ""
//         }
//     }

//     onValueChange = (event) => {
      
//         const {id , value} = event.target;
//         this.setState({review : value}  );
//     }

//     handlefetchData =  (event) => 
//     {
//         event.preventDefault();
      
//     }

//     handleGenerateWordCloud =  (event) =>
//     {
//         event.preventDefault();
//          axios.request(
//             {
//             method: 'POST',
//             url: 'https://textvis-word-cloud-v1.p.rapidapi.com/v1/textToCloud',
//             headers: {
//                 'content-type': 'application/json',
//                 'x-rapidapi-key': 'f870c70cccmsh264557ff26f7acep1588fdjsn9d67394fc992',
//                 'x-rapidapi-host': 'textvis-word-cloud-v1.p.rapidapi.com'
//             },
//             data: {
//               text: this.state.value,
//               scale: 0.5,
//               width: 400,
//               height: 400,
//               colors: ['#375E97', '#FB6542', '#FFBB00', '#3F681C'],
//               font: 'Tahoma',
//               use_stopwords: true,
//               language: 'en',
//               uppercase: false
//             }
//         }).then((response) => {
//             this.setState({wordCloud: response.data});
//         }).catch((error) => {
//             console.log("Eroor")
//         })
//     }
//     render() {

//         return ( 
//             <div className="row justify-content-center" >
//                 <div className="col-xl-3 col-md-4 col-sm-6 col-12">
//                     <h1 className="text-center mt-5">Review</h1>
//                     <div className="mt-4">
//                             <img src={this.state.wordCloud}/>
//                     </div>
//                 </div>
//         </div> );
//     }
// }
 
export default WordCloud;