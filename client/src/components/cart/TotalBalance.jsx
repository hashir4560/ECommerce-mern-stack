import { useState ,useEffect} from "react";
import styled from "@emotion/styled"
import {Box, Typography } from "@mui/material"



const Header =styled(Box)`
    padding:15px 24px;
    background:#fff;
    border-bottom:1px solid #f0f0f0;
    
`
const Heading=styled(Typography)`
    color: #878787;
`;

const Container=styled(Box)`
    padding:15px 24px;
    background:#fff;
    & > p{
        margin-top:20px;
        font-size:14px;
    }
    & > h6 {
        margin-top:20px;
        margin-bottom: 20px ;
    }
`
;

const Price=styled(Box)`
    float:right;
`;

const Discount=styled(Typography)`
    color:green ;
    font-weight:500;
`

const TotalBalance=({cartItems})=>{

    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0)

    useEffect(() => {
        totalAmount();
    }, [cartItems]);
    
    const totalAmount = () => {
        let price = 0, discount = 0;
        cartItems.map(item => {
            price += item.price.mrp
            discount += (item.price.mrp - item.price.cost) 
        })
        setPrice(price);
        setDiscount(discount);
    }

    return (
       <Box>
        <Header>
            <Heading>PRICE DETAILS</Heading>
        </Header>
        <Container>
            <Typography>Price ({cartItems?.length}item)
                <Price component='span'>Rs{price}</Price>
            
            </Typography>
            <Typography>Discount
                <Price component='span'>Rs{discount}</Price>
            
            </Typography>
            <Typography>Delivery 
                <Price component='span'>Rs100</Price>
            
            </Typography>
            <Typography variant="h6">Total Amount
                <Price  component='span'>Rs {price-discount+100}</Price>
            </Typography>
            <Discount> You will save Rs{discount-100}on this Order</Discount>
        </Container>
       </Box>
    )
}

export default TotalBalance;