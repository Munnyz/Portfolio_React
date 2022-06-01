import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Img1 from "../../img/1.png";
import Img2 from "../../img/2.png";
import Img3 from "../../img/3.png";
import Img4 from "../../img/4.png";
import HOC from "../../img/hoc.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recentes Projetos</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Portfolio;
