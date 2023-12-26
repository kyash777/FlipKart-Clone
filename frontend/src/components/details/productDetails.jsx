import {Table,TableRow,TableCell,TableBody,Box,Typography,styled } from "@mui/material";
import {LocalOffer as Badge} from '@mui/icons-material';
const date= new Date(new Date().getTime()+(5*24*60*60*1000));
const Icon=styled(Badge)`
    color:#00CC00;   
    margin-right:10px; 
    font-size:15px;
    
`
const SmallText=styled(Box)`
    font-size:14px;
    margin-top:10px;
    vertical-align:Typography
    & > p{
        font-size:14px;
        
    }
`

const ColumnText=styled(TableRow)`
    font-size;14px;
    vertical-align:baseline;
    & > td {
        font-size:14px;
        matrgin-top:10px;
        border:none;
    }
`



const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

const ProductDetails=({product})=>{
    return (
        <>
        <Typography>Available Offers</Typography>
        <SmallText>
            <Typography><Icon/> Get extra 20% off upto ₹50 on 1 item(s) T&C</Typography>
            <Typography><Icon/> Get extra 13% off (price inclusive of discount) T&C</Typography>
            <Typography><Icon/> Sign up for Flipkart Paylater and get Flipkart Gift Card worth ₹100 Know More</Typography>
            <Typography><Icon/> Buy 2 items save 5% ,Buy 3 or more save 10% T&C</Typography>
            <Typography><Icon/> 5% Cashback on Flipkart Axis Bank Card</Typography>
            <Typography><Icon/> No cost EMI on Bajaj Finserv EMI Card on cart value above ₹2999 T&C </Typography>
        </SmallText>
        <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{color:"#878787"}}>Delivery</TableCell>
                        <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color:"#878787"}}>Warranty</TableCell>
                        <TableCell >No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color:"#878787"}}>Seller</TableCell>
                        <TableCell >
                            <Box style={{color:"#2874f0"}} component="span">SuperComNet</Box>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹{product.price.cost} </Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText colSpan={2}>
                        <img src={adURL} style={{width:390}} alt="AddImage"></img>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color:"#878787"}}>Description</TableCell>
                        <TableCell >{product.description}</TableCell>
                    </ColumnText>

                </TableBody>
        </Table>
        </>
    )
}

export default ProductDetails;