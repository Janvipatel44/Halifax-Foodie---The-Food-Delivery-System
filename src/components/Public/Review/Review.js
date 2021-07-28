import axios from 'axios';
import React , {Component}from 'react';

export class Review extends Component 
{
    constructor(props) {
        super(props)

        this.state = {
            review: "",
            fileContent: "",
            wordCloud: ""
        }
    }

    onValueChange = (event) => {
      
        const {id , value} = event.target;
        console.log("value"+value);
        this.setState({review : value}  );
        // this.setState({
        //     [event.target.name]: event.target.value
        // });
    }

    handleSubmit = (event) => 
    {
        event.preventDefault();
        let text = "Hi Janvi I am Hi Janvi I am Here";
        console.log("In function")
        axios.post("http://localhost:5000/reviewRoute/data",text).then((response) => {
            console.log("Here")
            console.log('I am here',response.data);
            this.setState({wordCloud: response.data});
            if (this.validateForm()) {
                alert("Details Successfully Saved!!");
            }
        }).catch((error) => {
            console.log("Eroor")
        })
    }
    handleStoreData = (event) => 
    {
        event.preventDefault();
        console.log('add',this.state.review);
        axios.post("https://8qq2x0rtge.execute-api.us-east-1.amazonaws.com/default/wordCloudGroup11",JSON.stringify({data: this.state.review})).then((response) => {
            console.log("Here")
            console.log('I am here',response);
            
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
                            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit} placeholder="submit">Submit</button>
                            <img src={this.state.wordCloud}/>
                        </form>
                    </div>
                </div>
        </div> );
    }
}
 
export default Review;