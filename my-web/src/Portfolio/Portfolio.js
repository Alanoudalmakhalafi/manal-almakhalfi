import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import pic1 from '../images/pic1.png';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.png';
import hype from '../images/hype.jpeg';
import my from '../images/my.jpeg';

import './Portfolio.css';
import "swiper/css";
import Carousel  from 'react-bootstrap/Carousel'


const Portfolio = () => {
  return (

    <div className='Portfolio' id='Portfolio'>
    <div className='ad'>
        <span>Advertising Designs</span>
        </div >
        <div className="picy">
        <Swiper
        spaceBetween={30}
        slidesPerView={4}
        grabCursor={true}
        className='Portfolio-slider' 
        >

        <SwiperSlide>
        <img src={pic1}/>
        </SwiperSlide>

        <SwiperSlide>
        <img src={pic2}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={pic3}/>
        </SwiperSlide>
        {/* <SwiperSlide>
        <img src={"https://www.youtube.com/shorts/8J7cIaHbYnY"}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={my}/>
        </SwiperSlide> */}
      
        </Swiper>
</div>

{/* 
        <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Disney}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={saudi}
      alt="Second slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={store}
      alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */}










    </div>
    
  )
}

export default Portfolio