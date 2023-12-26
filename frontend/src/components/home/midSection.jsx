import { imageURL } from "../../constants/data";
import { Box,styled} from "@mui/material";

const Image=styled("img")({
    marginTop:"10px",
    width:"100%",
    display:"flex",
    justifyContent:"space-between",

});
const MidSection=()=>{
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
                <Box >
                    {
                        imageURL.map(image=>(
                                <img src={image} style={{width:"100%"}} alt="image"/>    
                        ))
                    }
                </Box>
                <Image src={url}></Image>
        </>

    )
}

export default MidSection;