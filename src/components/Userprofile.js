import React from 'react'
import { Box } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Userprofile = () => {
  return (
    <Box  direction="row" spacing={2} zIndex={-1} sx={{
      backgroundColor: '#FFECEA',
      borderRadius: '100%',
      width: '24px',
      height: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px',
      position: 'relative',
      
    }}>
      <NotificationsIcon  sx={{
         color: '#D1232A',
         width: '18px',
         height: '19.5px',
         opacity: '20%',
         position: 'absolute',
         top: '11px',
         left: '13px'
      }}
       />
    </Box>
  )
}

export default Userprofile
