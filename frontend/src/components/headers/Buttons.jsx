import {Box,Button, Typography,styled,Badge} from "@mui/material"
import {ShoppingCart} from '@mui/icons-material';
import LoginDailog from "../login/loginDailog";
import { useState ,useContext} from "react";
import { DataContext } from "../../context/DataProvider";
import Profile from "./profile.jsx";
import { Link } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";


//styles

const Wrapper=styled(Box)`
    display:flex;
    align-items:center;
    margin:0 3% 0 auto;
    & > button,& >p,& >div{
        margin-right:40px;
        <font-size:16;
        align-items:center;
    }

`
const Container=styled(Link)`
    display:flex;
    text-decoration:none;
    color:inherit;

`
const LoginButton=styled(Button)`
    color:#2874f0;
    // color:black;
    background:#fff;
    text-transform:none;
    border-radius:2px;
    box-shadow:none;
    font-weight:600;
    height:32px;
    padding:5px 40px;

`

const CustomButtons=()=>{

    const [open,setOpen]=useState(false);
    const {account,setAccount}=useContext(DataContext);
    const {cartItems}=useSelector(state=>state.cart)
    const openDialog=()=>{
        setOpen(true);
    }
    return <Wrapper>
        {
            account ? <Profile account={account} setAccount={setAccount}/>
            :
            <LoginButton  variant="filled" onClick={()=>openDialog()}> Login</LoginButton>
        }
        <Typography style={{width:"135px"}}>Become a Seller</Typography>
        <Typography>More</Typography>
        <Container to="/cart">
            <Badge badgeContent={cartItems?.length} color="secondary">
                <ShoppingCart/>  
            </Badge>
            <Typography style={{marginLeft:10}}>Cart</Typography>
        </Container>
        <LoginDailog open={open} setOpen={setOpen}/>
        </Wrapper>
}

export default CustomButtons;