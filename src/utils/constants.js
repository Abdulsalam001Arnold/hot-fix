



import SettingsIcon from '@mui/icons-material/Settings';
import EventIcon from '@mui/icons-material/Event';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DashboardIcon from '@mui/icons-material/Dashboard';



export const pages = [
  { name: 'Overview', path:"/", icon: <DashboardIcon/>} ,
  { name: 'Manage event', path:"/events", icon: <EventIcon/>} ,
  { name: 'Notifications', path:"/remainders", icon: <NotificationsIcon/>} ,
  { name: 'Settings', path:"/settings", icon: <SettingsIcon/>} 
]