import { Box,Button,styled } from "@mui/material";
import {ShoppingCart as Cart} from '@mui/icons-material';
import {Bolt as BoltIcon} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import { addToCart } from "../../redux/actions/cartActions.js";
import { useState } from "react";
import { payUsingPaytm } from "../../service/api.js";
import { post } from "../../utils/paytm.js";

const LeftContainer=styled(Box)`
    min-width:40%;
    padding:40px 0 0 80px
`;

const Image=styled("img")({
    width:"90%",
    paddind:"15px"
})

const StyledButton=styled(Button)`
    width:48%;
    height:50px;
    border-radius:2px;


`


const ActionItem=({product})=>{

    const navigate=useNavigate();
    const dispatch=useDispatch();

    const [quantity,setQuantity]=useState(1);
    const {id}=product;

    const buyNow= async ()=>{
        let response= await payUsingPaytm({amount:500,email:"yashkshatriya.67@gmail.com"});
        let information={
            action:"https://securegw-stage.paytm.in/order/process",
            params:response
        }
        post(information);
    }

    const addItemTocart=()=>{
        dispatch(addToCart(id,quantity));
        navigate("/cart");
    }
    return (
        <LeftContainer>
            <Box style={{  padding:"15px 20px",
    border:"1px solid #f0f0f0 "}}>
                <Image src={product.url} alt="Image" />
            </Box>
            <StyledButton variant="contained" onClick={()=>addItemTocart()} style={{marginRight:10,background:"#ff9f00"}}><Cart/>Add To Cart</StyledButton>
            <StyledButton variant="contained" onClick={()=>buyNow()}style={{background:"#fb541b"}}><BoltIcon/>Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;