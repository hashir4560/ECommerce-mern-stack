
import { Box,Typography } from "@mui/material";


const ProductDetail=({product})=>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    return (
        <>
        <Typography>{product.title.longTitle}</Typography>
         <Typography style={{marginTop:5,color:'#878787',fontSize:14}}>8 Ratings & 1 Reviews 
         <Box component='span'><img src={fassured} alt="" style={{width:77,marginLeft:20}}/></Box>
        </Typography>
        <Typography>
            <Box component='span' style={{fontSize:28}}>Rs{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
            <Box component='span' style={{color:"#878787"}}><strike>Rs{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
            <Box component='span' style={{color:"#388E3C"}}>{product.price.discount}Off</Box>                
            </Typography>
            <Typography>Available Offers</Typography>
            <Box>
                <Typography>Get extra 20% off upto on Rs50 on 1 item(s) T&C </Typography>
                <Typography>Get extra 13% off(price inclusive of discount) T&C  </Typography>
                <Typography></Typography>
            </Box>
        
        </>
    )
}
export default ProductDetail;