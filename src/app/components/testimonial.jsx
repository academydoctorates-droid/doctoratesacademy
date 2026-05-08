"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BASE_ASSET_URL, getImageUrl } from "@/app/utils";

const testimonialItems = [
  {
    id: 1,
    imageSrc: "images/doc1.jpg",
    invertedImageSrc: "images/inverted.png",
    content:
      "I'm totally unconvinced that two people can find a person they haven't known previously and become an effective co-founder.",
    name: "Andrew Wilkins",
    title: "Managing Director, Yess Company",
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

  const styles = {
    customNavigation1: {
      position: "relative",
      top: "-40px", // Adjust the top position as needed
      display: "flex",
      justifyContent: "space-between",
    },
    btn: {
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
    },
    img: {
      width: "30px", // Adjust the width of the arrow images as needed
      
    },
    prev1: {
      alignSelf: "flex-start",
    },
    next1: {
      alignSelf: "flex-end",
    },
  };


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
    if (typeof window !== 'undefined') {
      const screenWidth = window.innerWidth;
  
      if (screenWidth < 768) {
        return 1;
      } else if (screenWidth < 992) {
        return 2;
      } else if (screenWidth < 1200) {
        return 3;
      }
    }
  
    return testimonialItems.length;
  }
  

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: calculateSlidesToShow(),
    slidesToScroll: 1,
    arrows: true,
    
  };

  const handlePrevClick = () => {
    console.log("Next button clicked");
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    console.log("Next button clicked");
    sliderRef.current.slickNext();
  };

  const [showFullMessage, setShowFullMessage] = useState(Array(testimonildata.length).fill(false));

  const toggleReadMore = (index) => {
    const updatedShowFullMessage = [...showFullMessage];
    updatedShowFullMessage[index] = !updatedShowFullMessage[index];
    setShowFullMessage(updatedShowFullMessage);
  };



  return (
    <div>
      <Slider {...settings} ref={sliderRef}>
        {testimonildata.map((item, index) => (
          <div key={index} className="item" style={{ margin: "0 10px"}}>
            <div className="diff_box" data-uniform="true3">
              <div className="diff_inner" >
                <div className="inverted">
                  <img src={"images/inverted.png"} alt="" />
                </div>
                <div className="clearfix" />
                <div className="diff_left" style={{marginTop:5}}>
                  <img
                    src={getImageUrl(item.image)}
                    className="img-responsive"
                    alt=""
                    
                  />
                </div>
                <div className="clearfix" />
                <div className="diff_right">
                  <h5>{item.name}</h5>
                  <h6 style={{textAlign:"justify"}}>{item.designation}</h6>
                </div>
                {/* <p style={{ height: 100 }}>{item.message}</p> */}
                {/* <p>{item.message}</p> */}
               
                <div className="clearfix" />
            
                <p>
                {showFullMessage[index] ? item.message : `${item.message.slice(0, 100)}`}
                <span onClick={()=>toggleReadMore(index)} className="read-more-link">
                    <a style={{cursor: 'pointer'}}>{showFullMessage[index] ? ' Read Less' : ' ...Read More'}</a>
                  </span>

                </p>
                {/* <div className="diff_right">
                  <h5>{item.name}</h5>
                  <h6 style={{textAlign:"justify"}}>{item.designation}</h6>
                </div> */}
                <div className="clearfix" />
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* <div className="customNavigation1">
        <a className="btn prev1" onClick={handlePrevClick} style={styles.btn}>
          <img src="images/l_o.png" alt="Previous" style={styles.img}/>
        </a>
        <a className="btn next1" onClick={handleNextClick}  style={styles.btn}>
          <img src="images/r_o.png" alt="Next" style={styles.img}/>
        </a>
      </div> */}
    </div>
  );
};

export default TESTIMONIALS;
