import { useEffect } from "react";

//components
import NavBar from "./NavBar";
import Banner  from "./Banner";
import Slide from './Slide';

import { Box,styled } from "@mui/material";

import { getProducts } from "../../redux/actions/productActions";
import { useDispatch ,useSelector} from "react-redux";

const Component=styled(Box)`
    padding: 10px;
    background:#F2F2F2;
`


const Home=()=>{

   const {products}= useSelector(state=> state.getProducts)
   console.log(products)
  

    const dispatch=useDispatch()

    useEffect(()=>{

       dispatch(getProducts())

    },[dispatch])
    return (
        <>
        <NavBar/>
      
        <Component>
            <Banner/>
            <Slide products={products} title="Deal of the Day" timer={true}/>
            <Slide products={products} title="Discounts For You" timer={false}/>
            <Slide products={products} title="Suggested Items" timer={false}/>
            <Slide products={products} title="Top Selection"  timer={false}/>
            <Slide products={products} title="Recommended Items"  timer={false}/>
            <Slide products={products} title="Trending Offers"  timer={false}/>
            <Slide products={products} title="Season Top Picks"  timer={false}/>
            <Slide products={products} title="Top Deals On Accessories"  timer={false}/>
        </Component>
        </>
        
    )

}
export default Home ;