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

const Events = () => {
  const [ showEventUpload, setShowEventUpload ] = useState(false)
  // const { events } = useContext(EventContext);
  const [listEvents, setListEvents] = useState([])
  const fetchEvents = async () => {
    const response = await fetch('https://ovb-event.dev.cloudethusiast.net/api/Events')
    const data = await response.json()
    console.log(data.data.data)
    console.log(data.data.data)
    if (response.data.success) {
      setListEvents(response.data.data)  
      console.log(listEvents)
    }else{
      toast.error("Error")
    }

  }
  
  useEffect(() => {
     fetchEvents()
     console.log('the effect has')
  }, [])
  return (
    <>
    { showEventUpload ? <EventsUploadPage setShowEventUpload={setShowEventUpload}/> : <></>}
    <Stack
      sx={{
        width: "100%",
        mt: "92px",
        ml: "5px",
        height: "calc(100vh - 50px)",
        overflow: "auto",
      }}
    >
      <Navbar  setShowEventUpload={setShowEventUpload}/>
      
      <Container maxWidth="md" sx={{mt: '50px'}}>

        <Typography   sx={{
            fontWeight: "700",
            fontSize: "22px",
            lineHeight: "24px",
            textAlign: "center",
            color: "#000000",
          }} variant="h6" align="center" gutterBottom>
          Event List
        </Typography>

        {listEvents.length === 0 ? (
          <Typography variant="body1" align="center">
            No events available.
          </Typography>
        ) : (
          listEvents.map((event, index) => (
            <Card key={index} style={{ marginBottom: "20px" }}>
              {event.imageUrl && (
                <CardMedia
                  component="img"
                  height="140"
                  image={event.images}
                  alt={event.eventName}
                />
              )}
              <CardContent>
                <Typography variant="h5">{event.eventName}</Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {event.locationType === "physical"
                    ? `Location: ${event.location}`
                    : "Virtual Event"}
                </Typography>
                <Typography variant="body2">
                  Description: {event.eventDescription}
                </Typography>
                <Typography variant="body2">
                  {event.isFree ? "Free Event" : `Price: $${event.value}`}
                </Typography>
              </CardContent>
            </Card>
          ))
        )}
      </Container>
    </Stack>
    </>
  );
};

export default Events;
