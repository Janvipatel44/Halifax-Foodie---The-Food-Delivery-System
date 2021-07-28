import React , {Component}from 'react';

export class visualization extends Component 
{
    
    render() {

        return ( 
            <div className="row justify-content-center" >
                <div className="row" style= {{marginTop :"50px"}} >
                <iframe width="1000" height="600" src="https://datastudio.google.com/embed/reporting/8fe6716e-1d56-43ac-a778-a2aa5f04663d/page/x3bWC" frameborder="0" allowfullscreen></iframe>
                </div>
        </div> );
    }
}
 
export default visualization;
