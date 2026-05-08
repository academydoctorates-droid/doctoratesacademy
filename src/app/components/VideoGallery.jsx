"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BASE_ASSET_URL } from "@/app/utils";

const testimonialItems = [
  {
    id: 1,
    videoURL: "https://www.youtube.com/embed/PtLz0ZSKmBM?si=Bfgxf5XBACAYUQj_",
  },
  {
    id: 2,
    imageSrc: "images/doc2.jpg",
    invertedImageSrc: "images/inverted.png",
    content:
      "I'm totally unconvinced that two people can find a person they haven't known previously and become an effective co-founder.",
    name: "Andrew Wilkins",
    title: "Managing Director, Yess Company",
  },
  {
    id: 3,
    imageSrc: "images/doc3.jpg",
    invertedImageSrc: "images/inverted.png",
    content:
      "I'm totally unconvinced that two people can find a person they haven't known previously and become an effective co-founder.",
    name: "Andrew Wilkins",
    title: "Managing Director, Yess Company",
  },
];

const TESTIMONIALS = ({ testimonildata }) => {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(calculateSlidesToShow());

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(calculateSlidesToShow());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function calculateSlidesToShow() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      return 1;
    } else if (screenWidth < 992) {
      return 2;
    } else if (screenWidth < 1200) {
      return 3;
    } else {
      return testimonialItems.length;
    }
  }

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: calculateSlidesToShow(),
    slidesToScroll: 1,
    arrows: false,
  };

  const handlePrevClick = () => {
    console.log("Next button clicked");
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    console.log("Next button clicked");
    sliderRef.current.slickNext();
  };

  return (
    <div>
      <Slider {...settings} ref={sliderRef}>
        {testimonildata.map((item, index) => (
          <div class="item">
            <div class="video_box2">
              <iframe
                class="video_size"
                src="https://www.youtube.com/embed/PtLz0ZSKmBM?si=Bfgxf5XBACAYUQj_"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        ))}
      </Slider>

      <div className="customNavigation1">
        <a className="btn prev1" onClick={handlePrevClick}>
          <img src="images/l_o.png" alt="Previous" />
        </a>
        <a className="btn next1" onClick={handleNextClick}>
          <img src="images/r_o.png" alt="Next" />
        </a>
      </div>
    </div>
  );
};

export default TESTIMONIALS;
