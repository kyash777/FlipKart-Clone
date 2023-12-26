import {styled} from "@mui/material"
import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../../constants/data.js";


const Image=styled('img')({
  width:"100%",
  height:280,
 
});
const Banner = () => {
  const [maindata, setMaindata] = useState(bannerData);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

  const totalItems = maindata.length;

  return (
    <div>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        slidesToSlide={1}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        beforeChange={(previousSlide, nextSlide) => {
          if (nextSlide === totalItems - 1 && previousSlide === 0) {
            // When clicking back arrow on the first page, go to the last page
            setMaindata((prevData) => {
              const updatedData = [...prevData];
              const lastItem = updatedData.pop();
              updatedData.unshift(lastItem);
              return updatedData;
            });
          }
        }}
      >
        {maindata.map((each) => (
          <div key={each.id}>
            <Image src={each.url} alt="banner" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;


