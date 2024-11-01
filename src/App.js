import { Stack } from "@mui/material";
import Settings from "./pages/Settings";
import Remainders from "./pages/Remainders";
import Events from "./pages/Events";
import Dashboard from "./pages/Dashboard";
import EventsUploadPage from "./pages/EventsUploadPage";
import { EventProvider } from "../src/utils/EventContext";

import Sidebar from "./components/Sidebar";
// import { BrowserRouter as Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const baseURL = 'https://ovb-event.dev.cloudethusiast.net'
  

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/events",
        element: <Events/>,
      },
      {
        path: "/remainders",
        element: <Remainders />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/eventsupload",
    element: <EventsUploadPage/>,
  },
]);

function App() {
  return (
   <EventProvider>
       <Stack
      sx={{
        backgroundColor: "#FDF7F7",
        width: "1540px",
        height: "1024px",
      }}
    >
     
        <RouterProvider router={router} />
     
    </Stack>
   </EventProvider>
  );
}

export default App;
