import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Sliders = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    Infinity: true,
    dots: false,
    pauseOnHover: false,
    autoplaySpeed: 1000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="">
      <Slider {...settings}>
        <div>
          <img
            src="gridle.png"
            alt=""
            className="w-[4rem] h-[1rem] md:w-[8rem] md:h-[2rem]"
          />
        </div>
        <div>
          <img
            src="gaitup.png"
            alt=""
            className="w-[4rem] h-[1rem] md:w-[8rem] md:h-[2rem]"
          />
        </div>
        <div>
          <img
            src="gamya.png"
            alt=""
            className="w-[4rem] h-[1rem] md:w-[8rem] md:h-[2rem]"
          />
        </div>
        <div>
          <img
            src="hotspot.png"
            alt=""
            className="w-[4rem] h-[1rem] md:w-[8rem] md:h-[2rem]"
          />
        </div>
        <div>
          <img
            src="abode.png"
            alt=""
            className="w-[4rem] h-[1rem] md:w-[8rem] md:h-[2rem]"
          />
        </div>
        <div>
          <img
            src="gridle.png"
            alt=""
            className="w-[4rem] h-[1rem] md:w-[8rem] md:h-[2rem]"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Sliders;
