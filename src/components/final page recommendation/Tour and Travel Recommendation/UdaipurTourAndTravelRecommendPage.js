
// Import React and Axios
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import YouTube from "react-youtube"
import ReactPlayer from "react-player"

const  UdaipurTourAndTravelRecommendPage = () => {
  // State to store the fetched data
  const [data, setData] = useState([]);

  // const opts = {leftMargin:'auto', rightMargin : 'auto'}

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make an HTTP GET request using Axios
        const response = await axios.get('http://localhost:4000/tourandtravel_recommendation');
        // Update the state with the fetched data
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return (
    <div style = {{marginLeft:"auto", marginRight:"auto", width : "50%", marginTop:"20vh"}}>
      {/* Use map and filter to iterate over and filter the data */}
      {data.map((item) => {
          // Check if the item passes the filter criteria
          if (item.filter === "udaipur") {
            // Replace this with the actual rendering logic for the filtered data
            return (<div style = {{marginTop:"auto", backgroundColor:"white"}}key={item.id}>

              {/* <div style = {{backgroundColor: "black",paddingLeft: "7.5%"}}> <YouTube videoId={item.recomm_url}/> </div> */}
              <div style = {{backgroundColor: "black",paddingLeft: "7.5%"}}> <ReactPlayer url = {item.recomm_url} /> </div>
              <h1 style={{textAlign:"center",color:"black"}}>{item.recomm_name}</h1>
              
            </div>
            )
          }
      })}
      <br></br>
      <h1 style={{backgroundColor:"red", textAlign:'center'}}>Don't think so, please recommend us ! </h1> 
    </div>
    
  );
};

export default UdaipurTourAndTravelRecommendPage;
