
import Slide from "./slides.jsx";

import { Box,styled } from "@mui/material";

const Component=styled(Box)`
        display:flex;

`
const LeftComponent=styled(Box)({
        width:"83%",
        

    });

const RightComponent=styled(Box)({
        background:"white",
        padding:5,
        marginTop:10,
        marginLeft:10,
        width:"17%",
        textAlign:"center",
    });

const addUrl="https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70"

const MidleSlide=({products,title,timer})=>{
    return (
        <Component>
            <LeftComponent>
            <Slide products={products} 
            title={title} 
            timer={timer}/>
            </LeftComponent>
            <RightComponent>
                <img src={addUrl} style={{width:217}} alt="ADD"/>
            </RightComponent>
        </Component>
    )
}

export default MidleSlide;