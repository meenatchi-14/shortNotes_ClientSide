import { Box, Tab,Tabs,Typography } from "@mui/material";
import PropTypes from 'prop-types';
import { Base } from '../Base/Base'
import React from "react";
import Form from "../component/Form";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const Signup=()=> {
  const [value, setValue] = React.useState(0);
  const handleChange = (event,newValue) => {
    setValue(newValue);
  };
return( 
 <Base >
  <Box  sx={{ width: '100%' }} >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="signup">
        <Tabs value={value} onChange={handleChange} >
          <Tab label="Login" {...a11yProps(0)} className="tab"/>
          <Tab label="SignUp" {...a11yProps(1)} className="tab" />
         
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} >
        <Form btnName={"Login"} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} >
       <Form btnName={"Signup"}/>
      </CustomTabPanel>  
    </Box>
        </Base>
  
    );
};
 
export default Signup;