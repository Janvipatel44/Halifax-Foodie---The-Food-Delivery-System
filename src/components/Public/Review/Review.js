import React , {Component}from 'react';
import reviewService from '../../../Services/Public/review.service';

export class Review extends Component 
{
    constructor(props) {
        super(props)

        this.state = {
            fileContent: ""
        }
    }

    handleSubmit = (event) => 
    {
        event.preventDefault();
        let data = {'text': "bread, butter, tomato, onion, coriander chutney"};
        console.log(this.state.fileContent);
        //reviewService        
    }

    render() {

        return ( 
            <div className="row justify-content-center" >
                <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                    <h1 className="text-center mt-5">Review</h1>
                    <div className="mt-4">
                        <form>
                            <p>Enter your feedback:</p>
                            <input
                            type="text"
                            />
                            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit} placeholder="submit">Submit</button>
                        </form>
                    </div>
                </div>
        </div> );
    }
}
 
export default Review;