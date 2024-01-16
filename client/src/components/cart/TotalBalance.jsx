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
    font-weight:600;
`

const TotalBalance=({CartItems})=>{
    return (
       <Box>
        <Header>
            <Heading>PRICE DETAILS</Heading>
        </Header>
        <Container>
            <Typography>Price ({CartItems?.length}item)
                <Price component='span'>Rs 100</Price>
            
            </Typography>
            <Typography>Discount
                <Price component='span'>-Rs 100</Price>
            
            </Typography>
            <Typography>Delivery 
                <Price component='span'>Rs 100</Price>
            
            </Typography>
            <Typography variant="h6">Total Amount
                <Price  component='span'>Rs 100</Price>
            </Typography>
            <Discount> You will save Rs 100 on this Order</Discount>
        </Container>
       </Box>
    )
}

export default TotalBalance