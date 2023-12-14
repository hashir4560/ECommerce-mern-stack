

import {Dialog,Box,TextField,Typography,Button,styled} from '@mui/material'



const  LoginDialog=({open,setOpen})=>{

const handleClose=()=>{
    setOpen(false)
}

    return(
        <Dialog open ={open} onClose={handleClose}>
            <Box>
                <Box></Box>
                <Box>
                    <TextField variant='standard' label="Enter Email/Mobile Number"/>
                    <TextField variant='standard' label="Enter Password"/>
                    <Typography>By continuing,you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                    <Button> Login</Button>
                    <Typography>OR</Typography>
                    <Button>Request OTP</Button>
                    <Typography>New to Flipkat? Create an account </Typography>
                </Box>

            </Box>

        </Dialog>
    )

}
export default LoginDialog;