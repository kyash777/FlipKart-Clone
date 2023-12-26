// components
import { navData } from "../../constants/data";

import {Box,Typography,styled} from "@mui/material"

//edited components

const Components=styled(Box)`
    display:flex;
    margin:55px 130px 0 130px;
    justify-content:space-between;
    padding-bottom:20px;
    
`
const Container=styled(Box)`
    text-align:center;
    margin-top: 12px;
`

const Text=styled(Typography)`
    font-size:14px;
    font-weight:600;
    font-family:inherit;
`


const Navbar=()=>{
    return (
        <Box style={{backgroundColor:"#F2F2F2"}}>
        <Components>
        {navData.map((Data)=>(
            <Container>
                <img src={Data.url} style={{width:70}} alt="nav"></img>
                <Text style={{...{margin:0},...{padding:0},...{fontSize:"14px"},...{fontWeight:"600px"}}}>{Data.text}</Text>
            </Container>
            ))}
        </Components>
        </Box>
    )
    
}



export default Navbar;