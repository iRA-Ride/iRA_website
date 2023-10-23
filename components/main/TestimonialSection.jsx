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
          slidesToShow: 1,
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

  return (
    <div className="px-10">
      <Slider {...settings}>
        {content.map((item) => (
          <div>
            <Testimonials
              key={item.name}
              id={item.id}
              name={item.name}
              text={item.text}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSection;
