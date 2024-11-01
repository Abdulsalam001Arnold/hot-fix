import React from "react";
import { Stack, Box, Typography, Button } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import { pages } from "../utils/constants";
import { Link, Outlet } from "react-router-dom";
import Oviedo from "../assets/imglogo.png";


  

const Sidebar = ({ children }) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        width: "313px",
        height: "1024px",
        backgroundColor: "#440202",
      }}
    >
      <Stack
        direction="column"
        alignItems="center"
        justifyItems="center"
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "177.69px",
            height: "72px",
            mt: "30px",
            mr: "60px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              fontSize: "40px",
              color: "#ffffff",
              fontWeight: 900,
              letterSpacing: "2px",
            }}
          >
            Ovi
            <img src={Oviedo} style={{ width: "15px", height: "50px" }} />
            edo
          </Box>
          <Typography
            variant="h4"
            sx={{
              color: "#FFFFFF",
              fontSize: "12px",
              letterSpacing: "1px",
              opacity: "0.5"  // Set the desired smaller font size
            }}
          >
            Admin Dashboard
          </Typography>
        </Box>
        <Stack
          mt={5}
          p={0}
          sx={{
            width: "313px",
            height: "62px",
            ml: "50px",
          }}
        >
          {pages.map((page, index) => (
            <Link
              to={page.path}
              className="category-btn"
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                width: "100%",
                height: "100%",
              }}
              sx={{
                transition: '0.3s',
                '&:hover': {
                  background: 'linear-gradient(to right, #D1232A, #6B1216)',
                },
              }}
              
            >
              <span style={{ color: page.icon === "active" ? "red" : "white" }}>
                {page.icon}
              </span>
              <span style={{ opacity: page.name === "1" ? "1" : "1" }}>
                {page.name}
              </span>
            </Link>
          ))}
        </Stack>
        <Button 
          direction="column"
          alignItems="center"
          justifyItems="center"
          sx={{
            display: "flex",
            border: 'none',
            mt: '733px',
            mr: '90px',
            color: '#ffffff',
            opacity: '0.5',
            gap: '14px',
            textTransform: 'initial'
          }}
      >
        <LogoutIcon /> sign out
      </Button>
      </Stack>
      <Box sx={{ p: "50px" }}>{children}</Box>
      <Outlet />
    </Stack>
  );
};

export default Sidebar;
