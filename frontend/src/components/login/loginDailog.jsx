import { useState,useContext } from "react";
import { Box, Dialog,TextField,Typography,Button,styled} from "@mui/material";
import { authenticateSignup,authenticateLogin } from "../../service/api";
import { DataContext } from "../../context/DataProvider";


const Component=styled(Box)`
    height:70vh;
    width:80vh;

`;

const Image=styled(Box)`
    background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height:100%;
    width:25%;
    padding: 0px 35px;

`
const Wrapper=styled(Box)`
    display:flex;
    flex-direction:column;
    padding:25px 35px;
    flex:1;
    margin-top:20px;

`
const LoginButton=styled(Button)`
    margin-top:20px;
    text-transform:none;
    background:#FB641B;
    color:#fff;
    height:48px;
    border-radius:2px;
`
const OtpButton=styled(Button)`
margin-top:20px;
text-transform:none;
background:#fff;
color:#2874f0;
height:48px;
border-radius:2px;
box-shadow:0 2px 4px 0 rgb(0 0 0 /20%)
`
const Ptag=styled(Typography)`
    margin-top:20px;
    font-size:13px;
    text-align:center;
    color:#2874f0;
    font-weight:600;
    cursor:pointer;
`
const Text=styled(Typography)`
    margin-top:20px;
    font-size:12px;
    color:#878787;
`
const Margin=styled(Typography)`
    margin-top:20px;
    text-align:center;
`
const LoginText=styled(Typography)` 
    margin-top:20px;
    color:white;
    font-size:25px;
    font-weight:600;
`
const UnderLoginText=styled(Typography)`
    margin-top:20px;
    font-size:14px;
    color:white;
`
const Error=styled(Typography)`
    font-size:10px;
    color:#ff6161;
    margin-top:10px;
    margin-bottom:10px;
    font-weight:600;
`

const accountInitialValues={
    login:{
        view:"login",
        heading:"Login",
        subHeading:"Get access to your Orders,Wishlist and Recommendaitions"
    },
    signup:{
        view:"signup",
        heading:"Looks like you're new here",
        subHeading:"Signup with your mobile number to get started"
    }
}

const signupInitialValues={
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:"",
    phone:"",
}

const loginInitialValues={
    username:"",
    password:""
}
const LoginDailog=({open,setOpen})=>{
    const handleClose=()=>{
        setOpen(false);
        toggleAccount(accountInitialValues.login);
        setError(false);
    }
   
    const [account,toggleAccount]=useState(accountInitialValues.login);
    const [signup,setSignup]=useState(signupInitialValues);
    const [login,setLogin]=useState(loginInitialValues);
    const [error,setError]=useState(false);

    const {setAccount}=useContext(DataContext);

    const toggleSignup=()=>{
        toggleAccount(accountInitialValues.signup);
        
    }

    const onInputChange=(e)=>{
        setSignup({...signup,[e.target.name]:e.target.value});
    }
    const signupUser= async ()=>{
        let response=await authenticateSignup(signup);
        console.log(response);
        if(!response){
            return ;
        }
        handleClose();
        setAccount(signup.firstname);
        
    }
    const onValueChange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value});
    }

    const loginUser= async ()=>{
        let response=await authenticateLogin(login);
        console.log(response);
        if(response.status===200){
            handleClose();
            setAccount(response.data.data.firstname);
        }else{
            setError(true);
        }
    }


    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:"unset"}}}>
            <Component>
                <Box style={{display:"flex",height:"100%"}}>
                    <Image>
                        <LoginText variant="h5">{account.heading}</LoginText>
                        <UnderLoginText style={{}}>{account.subHeading}</UnderLoginText>
                    </Image>
                    {
                        account.view==="login"?
                            <Wrapper>
                                <TextField variant="standard"  onChange={(e)=>onValueChange(e)} name="username" label="Enter username"/>
                                {error && <Error>Please enter valid username or password</Error>}
                                <TextField variant="standard" onChange={(e)=>onValueChange(e)} name="password" label="Enter Password"/>
                                <Text>By continuing , you agree to Flipkart's Term of use and privacy policy</Text>
                                <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
                                <Margin>OR</Margin>
                                <OtpButton>Request OTP</OtpButton>
                                <Ptag onClick={()=>toggleSignup()}>New to flipkart? Create an account</Ptag>
                            </Wrapper>
                        :
                            <Wrapper>
                                <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="firstname" label="Enter Firstname"/>
                                <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="lastname" label="Enter Lastname"/>
                                <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="username" label="Enter Username"/>
                                <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="email" label="Enter Email"/>
                                <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="password" label="Enter Password"/>
                                <TextField variant="standard" onChange={(e)=>onInputChange(e)} name="phone" label="Enter Phone"/>
                                <LoginButton onClick={()=>signupUser()}>Continue</LoginButton>    
                            </Wrapper>

                    }
                </Box>  
            </Component>
        </Dialog>
    )
}

export default LoginDailog;