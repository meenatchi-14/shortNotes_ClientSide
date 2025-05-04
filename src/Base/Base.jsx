/* eslint-disable react/prop-types */
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import {  useNavigate } from 'react-router-dom';
import '../App.css'
export const Base=({title,children})=>{
  const navigate=useNavigate();
  function logout(){
    localStorage.removeItem("token")
    navigate("/")
  }
return(
<div >
    <div >
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=>navigate("/Home")}
            className='main'
          >
            Home
          
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='heading'>
            Short Notes
          </Typography>
          <Button color="inherit" onClick={()=>navigate("/")} className='btn'>
            Login/signup</Button>
          <Button color="inherit" onClick={()=>navigate("/profile")}  className='btn'>Profile</Button>
          <Button color="inherit" onClick={()=>logout()}  className='btn'>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
     <div >
         <div className='title'>{title}</div>
         <div className='base'>{children}</div>
    </div>
</div>
)
}