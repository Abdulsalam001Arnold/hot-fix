// EventForm.js
import React, { useState, useContext } from "react";
import {toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import {
  Stack,
  TextField,
  Button,
  Typography,
  Switch,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  Box,
} from "@mui/material";
import axios from "axios";
import { EventContext } from "../utils/EventContext.js";
import { useNavigate } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";

const style = {
  width: "1540px",
  height: "1024px",
  position: "absolute",
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
  top: 0,
  left: 0,
  background: "#00000090",
  zindex: 1,
};

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiTWVkaW5haCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6ImV0aHVzaWFzdC5tZWRpbmFoQGNsb3VkZXRodXNpYXN0LmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNzMwMzkxNDIyLCJpc3MiOiJPdmllZG9fQXBpIn0.TeGByWi6WkGHwSghgk6E4f3oPeTwOM-Rx1iTYQCTlf0'

const EventsUploadPage = ({ setShowEventUpload,url }) => {
  const { addEvent } = useContext(EventContext);
  // const [image, setImage] = useState(false)
  const history = useNavigate();
  const [eventData, setEventData] = useState({
    name: "",
    description: "",
    locationType: "virtual",
    locationName: "",
    location: "",
    value: "",
    isFree: false,
  });
   const [image, setImage] = useState(null);
   const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setEventData(data=>({...data, [name]:value}))
//  }

  // const handleImageChange = (e) => {
  //   setImage(e.target.files[0]);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setUploading(true);
    const formData = new FormData();
    formData.append("name", eventData.name);
    formData.append("description", eventData.description);
    formData.append("locationType", eventData.locationType);
    formData.append("locationName", eventData.locationName);
    formData.append("location", eventData.location);
    formData.append("value", eventData.isFree ? "0" : eventData.value);
    formData.append("isFree", eventData.isFree);
    formData.append("image", image);


    // const response = await axios.post(`${url}/api/Events/create`, formData, {
    //     headers: { Authorization: `Bearer ${token}` },
    //     })
    // if (response.data.success) {
    //   setEventData({
    //     name: "",
    //     description: "",
    //     locationType: "virtual",
    //     locationName: "",
    //     location: "",
    //     value: "",
    //     isFree: false,
    //   })
    //   setImage(false)
    //   toast.success(response.data.message)
    // }else {
    //    toast.error(response.data.message)
    // }

    try {
      const response = await axios.post('https://ovb-event.dev.cloudethusiast.net/api/Events/create', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'text/plain'
        },

        });
      console.log("Event uploaded successfully:", response.data);

      // Add event to context
      addEvent({
        ...eventData,
        imageUrl: URL.createObjectURL(image),
      });

      // Navigate to the events list page
      history.push("/events");
    } catch (error) {
      console.error("Error uploading event:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <Stack sx={style}>
      <Box
        p={4}
        sx={{
          width: "600px",
          height: "839px",
          mt: "90px",
          ml: "420px",
          zindex: 1000,
          display: "flex",
          placeSelf: "center",
          flexDirection: "column",
          alignitems: "center",
          gap: "25px",
          backgroundColor: "#ffffff",
          borderRadius: "20px",
          animation: "fadeIn 0.5s",
        }}
      >
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "22px",
            lineHeight: "24px",
            textAlign: "center",
            color: "#000000",
          }}
          gutterBottom
        >
          Create New Event
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Event Name"
            name="name"
            value={eventData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            name="description"
            value={eventData.description}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
          <FormControl component="fieldset" margin="normal">
            {/* <FormLabel component="legend">Location Type</FormLabel> */}
            <RadioGroup
              name="locationType"
              value={eventData.locationType}
              onChange={handleChange}
            >
              <Box
                direction="column"
                alignItems="center"
                justifyItems="center"
                sx={{
                  display: "flex",
                  gap: "50px",
                }}
              >
                <FormControlLabel
                  value="virtual"
                  control={<Radio 
                    sx={{
                      color: '#FDF7F7', // Sets the default color
                      '&.Mui-checked': {
                        color: '#D1232A', // Sets the color when checked
                      },
                    }}
                  />}
                  label="virtual location"
                />
                <FormControlLabel
                  value="physical"
                  control={<Radio 
                    sx={{
                      color: '#FDF7F7', // Sets the default color
                      '&.Mui-checked': {
                        color: '#D1232A', // Sets the color when checked
                      },
                    }}/>}
                  label="Physical location"
                />
              </Box>
            </RadioGroup>
          </FormControl>
          {eventData.locationType === "physical" && (
            <TextField
              label="Event Location"
              name="location"
              value={eventData.location}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          )}
          <Box
            direction="column"
            alignItems="center"
            justifyItems="center"
            sx={{
              display: "flex",
              gap: "50px",
            }}
          >
            <TextField
              label="Value"
              name="value"
              value={eventData.isFree ? "0" : eventData.value}
              onChange={handleChange}
              margin="normal"
              disabled={eventData.isFree}
            />
            <TextField
              label="Value"
              name="value"
              value={eventData.isFree ? "0" : eventData.value}
              onChange={handleChange}
              margin="normal"
              disabled={eventData.isFree}
            />
          </Box>
          <Box display="flex" flexDirection="column">
            <TextField
              name="value"
              value={eventData.isFree ? "0" : eventData.value}
              onChange={handleChange}
              margin="normal"
              disabled={eventData.isFree}
              sx={{ width: "210px" }}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={eventData.isFree}
                  onChange={handleChange}
                  name="isFree"
                  color="primary"
                />
              }
              label="Free Event"
            />
          </Box>
          <Box
            mt={2}
            p={6} // Adds padding for a larger clickable area
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            border="2px dotted #ccc" // Dotted border
            borderRadius="10px"
            sx={{
              cursor: "pointer", // Makes the box look clickable
              textAlign: "center",
              backgroundColor: "#ffffff", // Light background color
              "&:hover": {
                backgroundColor: "#f0f0f0", // Slightly darker on hover
              },
            }}
            onClick={() => document.querySelector('input[type="file"]').click()}
          >
            <Typography
               variant="h6"
               sx={{
                 color: '#D1232A',
                 fontSize: '14px', // Set the desired smaller font size
               }}
             >
              Click to upload event banner or drag and drop
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Supported formats:JPG
            </Typography>
            {/* <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageChange}
            /> */}
            <input onChange={(e) =>setImage(e.target.files[0])} type='file' id='image' hidden required/>
            {image && <Typography mt={2}>{image.name}</Typography>}
          </Box>
          <Box
            mt={2}
            ml={10}
            // position="fixed" // Fixes the position of the box to the viewport
            // bottom={40} // Distance from the bottom of the page
            // left="37%"
            alignItems="center"
            justifyItems="center"
            gap="70px"
            sx={{
              display: "flex",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              // fullWidth
              // disabled={uploading}
              sx={{
                backgroundColor: "#D1232A",
                borderRadius: "30px", // Rounded corners
                padding: "9px 37px", // Optional: Add padding for better appearance
                "&:hover": {
                  backgroundColor: "#B11E24", // Darker shade for hover effect
                },
              }}
            >
              Submit Event
              {uploading ? "Uploading..." : "Submit Event"}
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              // fullWidth
              disabled={uploading}
              sx={{
                backgroundColor: "#D1232A",
                borderRadius: "30px", // Rounded corners
                padding: "9px 37px", // Optional: Add padding for better appearance
                "&:hover": {
                  backgroundColor: "#B11E24", // Darker shade for hover effect
                },
              }}
            >
              Submit Event
              {uploading ? "Uploading..." : "Submit Event"}
            </Button>
          </Box>
        </form>
      </Box>

      <CancelIcon
        sx={{
          width: "24px",
          height: "24px",
          color: "#ffffff",
          cursor: "pointer",
          mt: "150px",
          ml: "70px",
        }}
        onClick={() => setShowEventUpload(false)}
      />
      <ToastContainer />
    </Stack>
  );
};

export default EventsUploadPage;
