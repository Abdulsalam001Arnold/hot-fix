import React, { useState, useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from 'axios'
import {toast } from 'react-toastify'
import { Stack, Box } from "@mui/material";
import EventsUploadPage from "./EventsUploadPage";
// import { EventContext } from "../utils/EventContext";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

export default function Events() {
  const [ showEventUpload, setShowEventUpload ] = useState(false)
  // const { events } = useContext(EventContext);
  const [listEvents, setListEvents] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      const url = 'https://ovb-event.dev.cloudethusiast.net/api/Events'
      try{
        const response = await fetch(url)
        if(!response.ok){
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json()
        console.log('Fetched data:', data);
  
        if(Array.isArray(data.data)){
          setListEvents(data.data)
          console.log('Events loaded:', data.data)  
        }else{
          console.log(`Fetched data is not an array:`, data) 
          setListEvents([])
        }
      }catch(error){
        console.error('Error fetching data:', error)
      }
    }

    fetchEvents()
  }, [])
   
  return (
    <>


          <div className="red-back">
            {listEvents.length > 0 ? (
              listEvents.map((item, index) => (
                <div key={index}>
                  <h1>
                    {item.eventName}
                  </h1>
                  <img src={item.images} alt={item.eventName}/>
                  <h1>
                    {item.speakers}
                  </h1>
                </div>
              ))
            ) : (
                <div>No data available</div>
                )}
          </div>
        

    </>
  );
}

