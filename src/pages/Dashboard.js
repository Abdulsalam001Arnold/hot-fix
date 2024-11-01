import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Stack, Box, Typography } from '@mui/material';
import EventsUploadPage from './EventsUploadPage';

const Dashboard = () => {

  const [ showEventUpload, setShowEventUpload ] = useState(false)

  return (
   <>
   { showEventUpload ? <EventsUploadPage setShowEventUpload={setShowEventUpload}/> : <></>}
    <Stack
     sx={{
      width: '100%',
      mt: '92px',
      ml: '5px',
      height: 'calc(100vh-50px)'
      // overflow: 'auto',
     }}
    
    >
      <Navbar setShowEventUpload={setShowEventUpload}/>
      <Stack
       direction='row'
       spacing={0}
       sx={{
        width: '373px',
        height: '777px',
        background: '#ffffff',
        mt: '132px',
        borderRadius: '30px'
       }}
      >
        <Stack spacing={0}
         sx={{
          width: '329px',
          height: '735px',
          background: '#ffffff',
          mt: '27px',
          ml: '20px',
          mr: '40px'
         }}
        >
          <Box direction="row"
               justifyContent='space-between'
               alignContent='center'
               sx={{
                width:'329px',
                height:'24px',
                display:'flex',
              }}>
          <Typography variant="h6"  sx={{
                 color: '#000000',
                 fontSize: '18px',
                 fontWeight: 700 // Set the desired smaller font size
               }}>
            Recent Events
          </Typography><Typography variant="h6"  sx={{
                 color: '#006D77',
                 fontSize: '14px',
                 fontWeight: 400 // Set the desired smaller font size
               }}>
            All Events
          </Typography>
          </Box>
          
          <Box
             sx={{
              width:'329px',
              height:'88px',
              background: '#ffffff',
            }}
           ></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </Stack>
      </Stack>
    </Stack>
   </>
  )
}

export default Dashboard
