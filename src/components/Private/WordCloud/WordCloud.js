import React, { Component, useState , useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import randomColor from 'randomcolor';
import TagCloud from 'react-tag-cloud';
import './wordCloud.css';
import axios from 'axios';

const styles = {
    large: {
      fontSize: 60,
      fontWeight: 'bold'
    },
    small: {
      opacity: 0.7,
      fontSize: 16
    }
  };

const WordCloud = () => {

    const history = useHistory();
    const [cloudData , setCloudData] = useState([]);

    useEffect(() => {
        var restaurantId = localStorage.getItem("restaurantId");
      
         axios.post("http://localhost:3001/visulization")
        .then((res) => {
            
            console.log(res)
            console.log("status"+res.data.success);
            if(res.data.success == true){
                console.log("_____");
                console.log(res.data.data);
                setCloudData(res.data.data[0] );
                res.data.data.map((x) => {
                    console.log(x.itemName.S);
                })
               
            }
            else {
                console.log("PPPPPP");
            }
        })
        .catch((err) => {
           
            alert("try again after some time");
        })
       
      }, []);

    return (<>

        <div className="container"  style={{  overflow: "auto", maxHeight: "100vh"  }}>
        
        <div className="app-outer">
        <div className="app-inner">
       
          <TagCloud
            className="tag-cloud"
            style={{
              fontFamily: 'sans-serif',
              
              fontSize: 30,
              color: () =>
                randomColor({
                  hue: 'blue'
                }),
              padding: 5
            }}
          >
            <div
              style={{
                fontFamily: 'serif',
                fontSize: 40,
                fontStyle: 'italic',
                fontWeight: 'bold',
                color: randomColor()
              }}
            >
              Futurama
            </div>

            {/* { cloudData.length > 0 ? 
                   ( cloudData.map((t) => {
                            return ( <div>{t}</div> )
                    })
                    ) : ""
            } */}

            <div style={styles.large}>Chiken Biryani</div>
            <div style={{ fontFamily: 'courier' }}>Pavbhaji</div>
            <div style={{ fontStyle: 'italic' }}>Chole Bhature</div>
            <div style={{ color: 'green' }}>Samosa Chhat</div>
            <div>Masala Dosa</div>
            <div>Masala Dosa</div>
            <div>Pav Bhaji</div>
            <div>Butter Chicken Bowl</div>
            <div>Pav Bhaji</div>
            <div>Butter Chicken Bowl</div>
            <div>Samosa Chhat</div>
            <div>Burgers</div>
            <div style={styles.small}>Pav Bhaji</div>
            <div style={styles.small}>Butter Chicken Bowl</div>
            <div style={styles.small}>Masala Dosa</div>
          </TagCloud>
        </div>
      </div>

        </div>

    </>);
}

export default WordCloud;