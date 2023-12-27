
import { Table,Box,TableBody,TableCell,TableRow,Typography,styled } from "@mui/material";
import {LocalOffer as Badge} from '@mui/icons-material';

const SmallText=styled(Box)`
    font-size:14px;
    vertical-align:baseline;
    & > p {
        font-size:14px;
        margin-top:10px;
    }
`
const StyledBadge=styled(Badge)`
    margin-right:10px;
    color: #00CC00;
    font-size:15px;

`

const ProductDetail=({product})=>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));
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
            <SmallText>
                <Typography><StyledBadge/>Get extra 20% off upto on Rs50 on 1 item(s) T&C </Typography>
                <Typography><StyledBadge/>Get extra 13% off(price inclusive of discount) T&C  </Typography>
                <Typography><StyledBadge/>Sign up for Flipkart pay Later and get Flipkart Gift Worth Rs 500 Know more </Typography>
                <Typography> <StyledBadge/>Buy 2 items  save 5%;Buy 3 or more save 10% T&C </Typography>
                <Typography> <StyledBadge/>5% Cashback on Flipkart Axis Bank Card</Typography>
                <Typography><StyledBadge/>No Cost EMI on Bajaj Finserv EMI card on cart value above Rs.2999 T&C</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell style={{color: '#878787'}}> Delivery</TableCell>
                        <TableCell style={{fontWeight: 600}}>Delivery by {date.toDateString()} | Rs100</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color: '#878787'}}>Warranty</TableCell>
                        <TableCell >No Warranty</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color: '#878787'}}>Seller</TableCell>
                        <TableCell style={{color:"#3874f0"}}>
                            <Box  component='span'>SuperComNet</Box>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        
        </>
    )
}
export default ProductDetail;