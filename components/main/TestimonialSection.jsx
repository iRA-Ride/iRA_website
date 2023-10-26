import React, { useState } from "react";
import Slider from "react-slick";
import Testimonials from "./Testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import content from "/data.json";

const TestimonialSection = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (currentSlide, nextSlide) => {
      setSlideIndex(nextSlide);
    },
    responsive: [
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  const testimonialList = content.map((item) => (
    <div key={item.id}>
      <Testimonials id={item.id} name={item.name} text={item.text} />
    </div>
  ));

  return (
    <div className="px-10">
      <Slider {...settings}>{testimonialList}</Slider>
    </div>
  );
};

export default TestimonialSection;
