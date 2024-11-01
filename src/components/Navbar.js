import React from 'react'
import { Stack, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Userprofile from './Userprofile';

const Navbar = ({setShowEventUpload}) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        position: 'fixed',
        justifyContent: 'space-between',
        alignContent: 'center',
        width: '1014px',
        height: '50px',
        top: '31px',
        left: '439px',
        gap: '80px',
        zIndex: 9999
      }}
    >
       <Box><SearchBar/></Box>

       <Box
       direction='row'
       alignItems='center'
       mt={2}
       p={2}
       sx={{
         display: 'flex',
         gap: '20px'
       }}
       >
        <Box><Userprofile/></Box>
        <Button
         onClick={() => setShowEventUpload(true)}
         p='16px 32px'
         textalign= 'center'
         sx={{
          background: '#D1232A',
          color: '#ffffff',
          width: '139px',
          height: '50px',
          textTransform: 'none',
          fontSize: '16px',
          lineHeight: '19.2px',
          fontFamily: 'Satoshi',
          fontWeight: 500,
          borderRadius: '52px'
         }}
        >
          Create Event
        </Button>
      </Box> 
    </Stack>
  )
}

export default Navbar
