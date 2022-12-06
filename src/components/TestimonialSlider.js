import React from "react";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../slider.css";

// import required modules
import { Pagination } from "swiper";

// import testimonials data
import { testimonialsData } from "../data";

const TestimonialSlider = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      // centerInsufficientSlides={true}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='mySwiper'
    >
      {testimonialsData.map((slide, index) => {
        // destructure slide
        const { image, message, name, web, delay } = slide;
        return (
          // slide
          <SwiperSlide
            key={index}
            className=' flex flex-col lg:flex-row bg-white rounded-[20px] border border-accent-primary xl:max-w-[645px] max-w-[360px] lg:max-h-[330px] max-h-[400px] pt-[60px] px-[35px] xl:px-[70px] pb-[50px]  lg:items-start items-center gap-x-[30px] shadow-xl'
          >
            {/* avatar image */}
            <img src={image} alt='' />
            {/* text */}
            <div>
              <div className='text-lg text-primary font-bold'>{name}</div>
              <div className='mb-4 font-semibold text-accent-primary'>
                {web}
              </div>
              <p className='max-w-[240px]'>{message}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
