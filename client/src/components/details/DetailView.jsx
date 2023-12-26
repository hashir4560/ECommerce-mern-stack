import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions.js";
import { Box, Typography } from "@mui/material";
import ActionItem from "./ActionItem.jsx";

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, product } = useSelector((state) => state.getProductDetails);

  useEffect(() => {
    // Fetch product details only if the id is different or product is not available
    if (!product || id !== product.id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id,product,loading]);

  console.log(product);

  return (
    <Box>
      {product && Object.keys(product).length && (
        <Box>
          <Box>
            <ActionItem product={product}/>
          </Box>
          <Box>
            {/* Make sure the structure of product.title and product.title.longTitle is correct */}
            <Typography>{product.title.longTitle}</Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default DetailView;
