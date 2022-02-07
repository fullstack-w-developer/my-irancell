import React from "react";
import Slider from "react-slick";
import "./../../../../../node_modules/slick-carousel/slick/slick.css";
import "./../../../../../node_modules/slick-carousel/slick/slick-theme.css";
import Image1 from "./../../../../assests/image/3.jpg";
import Image2 from "./../../../../assests/image/4.jpg";
import Image3 from "./../../../../assests/image/5.jpg";
import Image4 from "./../../../../assests/image/6.jpg";
import Image5 from "./../../../../assests/image/7.jpg";
import "./slider.css";
interface settingesType {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  arrows: boolean;
}
const SliderHomeCenter = () => {
  const settings: settingesType = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className=" mt-4">
      <Slider {...settings}>
        <div className="outline-none">
          <img src={Image1} alt="image1" />
        </div>
        <div className="outline-none">
          <img src={Image2} alt="image2" />
        </div>
        <div className="outline-none">
          <img src={Image3} alt="image3" />
        </div>
        <div className="outline-none">
          <img src={Image4} alt="image4" />
        </div>
        <div className="outline-none">
          <img src={Image5} alt="image5" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderHomeCenter;
