import { useState,useEffect } from "react";
import { InputBase,Box,styled } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useSelector,useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";

const SearchContainer=styled(Box)`
    background:#fff;
    width:38%;
    border-radius:2px;
    margin-left:10px;
    display:flex;

`;

const InputSearchBase=styled(InputBase)`
    padding-left:20px;
    width:100%;
    font-size:unset;
`;


const SearchIconWrapper=styled(Box)`
    color:blue;
    padding:5px;
    display:flex;
`


const Search=()=>{

    const[text,setText]=useState('');
    
    const {products}=useSelector(state=>state.getProducts);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getProducts())

    },[dispatch])

    const getText=(text)=>{
        setText(text)

}

    return(
        <SearchContainer>
        <InputSearchBase 
        placeholder="Search For  Products,Brands and more.."
        onChange={(e)=> getText(e.target.value)}
    
        

        />
        <SearchIconWrapper>
            <SearchIcon/>
        </SearchIconWrapper>
        </SearchContainer>

    )

}
export default Search