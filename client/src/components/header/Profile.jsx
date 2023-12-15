import { useState } from "react";
import { Typography,Box,Menu,MenuItem,styled } from "@mui/material"
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component=styled(Menu)`
    margin-top:5px;
`
const Logout=styled(Typography)`
    font-size:14px;
    margin-left:20px;
`

const Profile=({account})=>{
const[open,setOpen]=useState(false)

const handleClick=(event)=>{
    setOpen(event.currentTarget);

}

const handleClose=()=>{
    setOpen(false);
}


    return (
        <>
        <Box onClick={handleClick}>
        <Typography style={{marginTop:2}}>{account}</Typography>
        </Box>
        <Component
       
        anchorEl={open }
        open={Boolean(open)}
        onClose={handleClose}
       
      >  
        <MenuItem onClick={handleClose}>
            <PowerSettingsNewIcon color="primaty" fontSize="samll"/>
            <Logout>Logout</Logout>
        </MenuItem>

       
      </Component>
        </>
    )

}
export default Profile;

