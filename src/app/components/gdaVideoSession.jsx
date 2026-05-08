"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BASE_ASSET_URL } from "@/app/utils";
import axios from "axios";

const videoItems = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/embed/PtLz0ZSKmBM?si=Bfgxf5XBACAYUQj_",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/embed/PtLz0ZSKmBM?si=Bfgxf5XBACAYUQj_",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/embed/PtLz0ZSKmBM?si=Bfgxf5XBACAYUQj_",
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/PtLz0ZSKmBM?si=Bfgxf5XBACAYUQj_",
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/embed/PtLz0ZSKmBM?si=Bfgxf5XBACAYUQj_",
  },
  {
    id: 6,
    videoUrl: "https://www.youtube.com/embed/PtLz0ZSKmBM?si=Bfgxf5XBACAYUQj_",
  },
];

const GdaVideoSession = ({ testimonildata }) => {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(calculateSlidesToShow());
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(calculateSlidesToShow());
    };

    getVideoGalleryData();

    if(typeof window !="undefined"){
    window.addEventListener("resize", handleResize);
    }

    return () => {
      if(typeof window !="undefined"){
      window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const getVideoGalleryData = async () => {
    const res = await axios.get(`${BASE_ASSET_URL}/video-gallery`);
    setVideoData(res.data);
  };

  function calculateSlidesToShow() {
    if(typeof window !="undefined"){
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      return 1;
    } else if (screenWidth < 992) {
      return 2;
    } else if (screenWidth < 1200) {
      return 3;
    } else {
      return videoItems.length / 2;
    }
  }
  }

  const settings = {
    className: "video-gallery",
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
        {videoItems.map((item, index) => (
          <div className="item">
            <div className="video_box2">
              <iframe
                className="video_size"
                src={item.videoUrl}
                frameBorder={0}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""
              />
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

export default GdaVideoSession;
