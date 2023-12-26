import { Box, InputBase, List, styled,ListItem } from "@mui/material";
import { useState,useEffect } from "react";

import SearchIcon from '@mui/icons-material/Search';
import {useSelector,useDispatch} from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import {Link} from "react-router-dom";


const StyledInputBase = styled(InputBase)`
    width:100%;
    padding-left:20px;
    
    `;
    
    const SearchContainer=styled(Box)`
    background:#fff;
    width:38%;
    margin-left:10px;
    border-radius:3px;
    display:flex;
    
   

`

const SearchIconWrapper=styled(Box)`
    color:blue;
    margin-top:6px;
    margin-right:10px;
    display:flex;
`
const ListWrapper=styled(List)`
    position:absolute;
    background:#FFFFFF;
    color:#000; 
    margin-top:36px;   
`

const Search = () => {
    const [text,setText]=useState("");
    const {products}=useSelector(state=>state.getProducts);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
    const getText=(text)=>{
        setText(text);
    }
  return (
        <SearchContainer>
            <StyledInputBase placeholder="Search for products,brands and more"
                    onChange={(e)=>getText(e.target.value)}
                    value={text}
            />
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
            {
               text && 
                    <ListWrapper>
                        {
                        products.filter(product=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                            <ListItem>
                                <Link to={`/product/${product.id}`} onClick={()=>setText("")} style={{textDecoration:"none",color:"inherit"}}>
                                    {product.title.longTitle}
                                </Link>
                            </ListItem>
                        ))
                        }
                    </ListWrapper>

            }
        </SearchContainer>
  )
};

export default Search;


