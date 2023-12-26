import Navbar from "./NavBar";
import Banner from "./banner";
import { Fragment } from "react";
import 'react-multi-carousel/lib/styles.css'
import {Box, styled} from "@mui/material";
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/productActions.js";
import {useDispatch,useSelector} from "react-redux"
import Slide from "./slides.jsx"
import MidleSlide from "./midSlide.jsx";
import MidSection from "./midSection.jsx";

const Component=styled(Box)`
    padding:10px 10px;
    background:#F2F2F2
`

const Home=()=>{
    const getproducts=useSelector(state=>state.getProducts);
    const {products}=getproducts;
    console.log(products)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch])
    return (
        <Fragment>
            <Navbar/>
            <Component>
                <Banner/>
                <MidleSlide products={products} title="Deal of the Day" timer={true}/>
                <MidSection/>
                <Slide products={products} title="Discounts for You" timer={false}/>
                <Slide products={products} title="Suggesting Items" timer={false}/>
                <Slide products={products} title="Top Selections" timer={false}/>
                <Slide products={products} title="Recommended Items" timer={false}/>
                <Slide products={products} title="Trending Offers" timer={false}/>
                <Slide products={products} title="Season's Top Picks" timer={false}/>
                <Slide products={products} title="Top Deals on Accessories" timer={false}/>
            </Component>
        </Fragment>
    )
}

export default Home;