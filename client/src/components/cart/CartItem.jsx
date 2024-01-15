import { Box, Typography, styled } from "@mui/material";

const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display: flex;
`;

const LeftComponent = styled(Box)`
  margin: 20px;
`;

const SmallText = styled(Typography)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
`;

const FAssuredImage = styled("img")`
  width: 50px;
  margin-left: 10px;
`;

const CartItem = ({ item }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  return (
    <Component>
      <LeftComponent>
        <img src={item.url} alt="product" />
      </LeftComponent>
      <Box>
        <Typography>{item.title.longTitle}</Typography>
        <SmallText>Seller:RetailNet</SmallText>
            <Box component="span"><FAssuredImage src={fassured} alt="flipkart"  /></Box>
       
      </Box>
    </Component>
  );
};

export default CartItem;
