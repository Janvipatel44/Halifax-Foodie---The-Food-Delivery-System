import axios from 'axios';
import React , {Component}from 'react';

export class Review extends Component 
{
    constructor(props) {
        super(props)

        this.state = {
            review: "",
            wordCloud: "",
            value: ""
        }
    }

    onValueChange = (event) => {
      
        const {id , value} = event.target;
        this.setState({review : value}  );
    }
    
    handleStoreData =  (event) => 
    {
        event.preventDefault();
        axios.post("https://8qq2x0rtge.execute-api.us-east-1.amazonaws.com/default/wordCloudGroup11",JSON.stringify({data: this.state.review})).then((response) => {
            let row = ""
            response.data.Items.forEach((element, index) => {
                row = row + element.message;
                row = row + " ";
            });
              this.setState({
                value: row
            })
            alert.message('Successfully stored data into database');
        }).catch((error) => {
            console.log("Eroor")
        })

    }

    handleGenerateWordCloud =  (event) =>
    {
        event.preventDefault();
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
              text: this.state.value,
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
            this.setState({wordCloud: response.data});
        }).catch((error) => {
            console.log("Eroor")
        })
    }
    render() {

        return ( 
            <div className="row justify-content-center" >
                <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                    <h1 className="text-center mt-5">Review</h1>
                    <div className="mt-4">
                        <form>
                            <p>Enter your feedback:</p>
                            <input type="text" name="review" onChange={this.onValueChange} id ="review" />
                            <button type="submit" className="btn btn-primary" onClick={this.handleStoreData} placeholder="submit">Add</button>
                            <button type="generatecloud" className="btn btn-primary" onClick={this.handleGenerateWordCloud} placeholder="generate cloud">Generate</button>
                            <img src={this.state.wordCloud}/>
                        </form>
                    </div>
                </div>
        </div> );
    }
}
 
export default Review;