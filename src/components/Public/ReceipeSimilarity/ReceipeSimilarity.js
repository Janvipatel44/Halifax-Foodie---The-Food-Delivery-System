import React , {Component}from 'react';
import receipeSimilarityService from '../../../Services/Public/recipeSimilarity.service';

//https://stackoverflow.com/questions/55830414/how-to-read-text-file-in-react
//https://stackoverflow.com/questions/47511677/firebase-cloud-function-your-client-does-not-have-permission-to-get-url-200-fr
//https://stackoverflow.com/questions/48372815/function-not-defined-reactjs
//https://stackoverflow.com/questions/57009371/access-to-xmlhttprequest-at-from-origin-localhost3000-has-been-blocked

export class ReceipeSimilarity extends Component 
{
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
            let displayNames = [];
              response.result[0].structValue.fields.displayNames.listValue.forEach(element => {
                let row = {}
                row.stringValue = element.stringValue;
                displayNames.push(row)
              });
              this.setState({
                tag: displayNames
            })

            console.log(confidence);
        }).catch((error) => {
            console.log("Error")
        }) 

    }

    showFile =  (e) => {

        e.preventDefault();
        const reader = new FileReader()
        let fileContent = ""

        reader.onload = async (response) => {
            fileContent = (response.target.result)
            console.log('FileContent', fileContent);
            this.setState({fileContent: JSON.parse(fileContent)})
            //e.target.value = null;
        };
        reader.readAsText(e.target.files[0])
    }

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