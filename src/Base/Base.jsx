/* eslint-disable react/prop-types */
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import {  useNavigate } from 'react-router-dom';
export const Base=({title,children})=>{
  const navigate=useNavigate();
return(
<div>
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=>navigate("/home")}
          >
            Home
          
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Short Notes
          </Typography>
          <Button color="inherit" onClick={()=>navigate("/")}>
            Login/signup</Button>
          <Button color="inherit" onClick={()=>navigate("/profile")}>Profile</Button>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
     <div>
         <div>{title}</div>
         <div>{children}</div>
    </div>
</div>
)
}