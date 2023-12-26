
import { Box, Button, Typography,styled } from "@mui/material";
import { addEllipsis } from "../../utils/common-utils.js";
import GroupedButton from "./buttonGroup.jsx";
import { removeFromCart } from "../../redux/actions/cartActions.js";
import { useDispatch } from "react-redux";

const Component=styled(Box)`
    border-top:1px solid #F0F0F0;
    display:flex;
    background:white;
`
const LeftComponent=styled(Box)`
    margin:20px;
    display:flex;
    flex-direction:column;
`

const SmallText=styled(Box)`
    color:#878787;
    font-size:14px;
    margin-top:10px;
    
`

const Remove=styled(Button)`
    margin-top:20px,
    font-size:16px;
    font-weight:600;
    color:#000
`
const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

const CartItem=({item})=>{

    const dispatch=useDispatch();

    const removeItemFromCart=(id)=>{
        dispatch(removeFromCart(id));
    }
    return (
        <Component>
            <LeftComponent>
                <img src={item.url} alt="Product" style={{height:110,width:110}}/>
                <GroupedButton/>
            </LeftComponent>
            <Box style={{margin:20}}>
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <SmallText>Seller:RetailNet
                    <Box component="span"><img src={fassured} alt="Flipkart" style={{width:50,marginLeft:10}}/></Box>
                </SmallText>
                <Typography style={{margin:"20px 0"}}>
                    <Box component="span" style={{fontWeight:600,fontSize:18}}>₹ {item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{color:"#878787"}}><strike>₹ {item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{color:"green"}}>{item.price.discount} off</Box>
                </Typography>
                <Remove onClick={()=>removeItemFromCart(item.id)}>Remove</Remove>

            </Box>
        </Component>
    )
}

export default CartItem;