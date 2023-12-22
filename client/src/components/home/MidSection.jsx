import {  Grid ,styled} from "@mui/material"
import { imageURL } from "../../constants/data"


const Wrapper=styled(Grid)`
    margin-top:20px;
`

const MidSection=()=>{
    return(
        <Wrapper lg={12} sm={12} md={12} xs={12} container >
            {
                imageURL.map(image=>(
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                    <img src={image} alt="images" style={{width:'100%'}}/>
                    </Grid>
                ))  
            }
       </Wrapper>
    )

}

export default MidSection;