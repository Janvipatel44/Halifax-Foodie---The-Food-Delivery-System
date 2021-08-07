/**
 * Author: Janvi Patel.
 * Created On: 2021-06-07
 * Receipe Similarity
 */

import React , {Component}from 'react';
import receipeSimilarityService from '../../../Services/Private/recipeSimilarity.service';

//https://stackoverflow.com/questions/55830414/how-to-read-text-file-in-react
//https://stackoverflow.com/questions/47511677/firebase-cloud-function-your-client-does-not-have-permission-to-get-url-200-fr
//https://stackoverflow.com/questions/48372815/function-not-defined-reactjs
//https://stackoverflow.com/questions/57009371/access-to-xmlhttprequest-at-from-origin-localhost3000-has-been-blocked
//http://www.hackingwithreact.com/read/1/13/rendering-an-array-of-data-with-map-and-jsx 
export class ReceipeSimilarity extends Component 
{
    //this contains props parameters
        //file content to store the ingredient values
        //tag and value to store cuisine type and similarity score to display it to user
    constructor(props) {
        super(props)

        this.state = {
            fileContent: ""
        }
        this.state = {
            tag : [],
            value: []
        }

    }

    /**
     * On click upload, the post call will be made and the call will be shifted to service file
     * @param {*} event 
     */

    handleUpload = (event) => 
    {
        event.preventDefault();
        console.log(this.state.fileContent);
        
        receipeSimilarityService.ReceipeSimilarity(this.state.fileContent).then((response) => {  

            let confidence = [];
            console.log('Response:', response.result[0].structValue.fields.confidences.listValue.values);
            console.log('Response:', response.result[0].structValue.fields.displayNames.listValue.values);

            response.result[0].structValue.fields.confidences.listValue.values.forEach((element, index) => {
                let row = {}
                row.numberValue = element.numberValue;
                row.tagName = response.result[0].structValue.fields.displayNames.listValue.values[index].stringValue;
                confidence.push(row)
              });
              this.setState({
                value: confidence
            })

            console.log(this.state.value)
        }).catch((error) => {
            console.log("Error")
        }) 

    }

    /**
     * On file upload, the file content is written as json format, one the file is being read by File Reader()
     * @param {*} event 
     */
    showFile =  (e) => {

        e.preventDefault();
        const reader = new FileReader()
        let fileContent = ""
        

        reader.onload = async (response) => {
            fileContent = (response.target.result)
         
            this.setState({fileContent: JSON.parse(fileContent)})
        };
        reader.readAsText(e.target.files[0])
    }

    
    /**
     * HTML code to show the uplod file option and on click save the file and then provide key -value map to user
     */
    render() {

        return ( 
            <div className="row justify-content-center" >
                <div className="col-xl-3 col-md-4 col-sm-6 col-12">
                    <h1 className="text-center mt-5">Receipe Similary</h1>
                    <div className="mt-4">
                        <form>
                        <div>
                            <input type="file" onChange={this.showFile} />
                        </div>
                            <div className="text-center mt-5">
                                <button type="submit" className="btn btn-primary" onClick={this.handleUpload} placeholder="upload">Upload</button>
                            </div> 
                            {
                                this.state.value.length ? this.state.value.map(row => (
                                    <div>
                                        {row.tagName} = {row.numberValue}
                                    </div>
                                )) : (
                                    <div>Nothing</div>
                                )
                            }                 
                        </form>
                    </div>
                </div>
        </div> );
    }
}
 
export default ReceipeSimilarity;