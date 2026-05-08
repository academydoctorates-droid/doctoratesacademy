"use client";

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "./../../../public/images/tab1.jpg";
import image2 from "./../../../public/images/pic1.jpg";
import image3 from "./../../../public/images/pic2.jpg";
import image4 from "./../../../public/images/pic3.jpg";
import image5 from "./../../../public/images/plus.png";
import Image from "next/image";

const items = [
  { id: 1, imageUrl: "images/GAD_IMAGE_2023/GAD_1_23.JPG" },
  { id: 2, imageUrl: "images/GAD_IMAGE_2023/GAD_2_23.JPG" },
  { id: 3, imageUrl: "images/GAD_IMAGE_2023/GAD_3_23.JPG" },
  { id: 4, imageUrl: "images/GAD_IMAGE_2023/GAD_4_23.JPG" },
  { id: 5, imageUrl: "images/GAD_IMAGE_2023/GAD_5_23.JPG" },
  { id: 6, imageUrl: "images/GAD_IMAGE_2023/GAD_6_23.JPG" },
  { id: 7, imageUrl: "images/GAD_IMAGE_2023/GAD_7_23.JPG" },
  { id: 8, imageUrl: "images/GAD_IMAGE_2023/GAD_8_23.JPG" },
  { id: 9, imageUrl: "images/GAD_IMAGE_2023/GAD_9_23.JPG" },
  { id: 10, imageUrl: "images/GAD_IMAGE_2023/GAD_10_23.JPG" },
  { id: 11, imageUrl: "images/GAD_IMAGE_2023/GAD_11_23.JPG" },
  { id: 12, imageUrl: "images/GAD_IMAGE_2023/GAD_12_23.JPG" },
];

const CustomPrevButton = ({ onClick }) => (
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "0",
      zIndex: "1",
      transform: "translateY(-50%)",
    }}
  >
    <a className="btn prev2" onClick={onClick}>
      <img src="images/l_o.png" alt="Previous" />
    </a>
  </div>
);

const CustomNextButton = ({ onClick }) => (
  <div
    style={{
      position: "absolute",
      top: "50%",
      right: "0",
      zIndex: "1",
      transform: "translateY(-50%)",
    }}
  >
    <a className="btn next2" onClick={onClick}>
      <img src="images/r_o.png" alt="Next" />
    </a>
  </div>
);

const ImageGalleryCarousel = () => {
  const settings = {
    // dots: true,
    infinite: true,
    className: "image-gallery",
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevButton />,
    nextArrow: <CustomNextButton />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <Slider {...settings}>
        {items.map((item) => (
          <div className="item" key={item.id}>
            <div className="gallery_box">
              <div className="cpl_image cpl_new">
                <a href={item.imageUrl} data-fancybox="images">
                  <img
                    src={item.imageUrl}
                    className="img-responsive center-block image_size2"
                    alt=""
                  />
                  <div className="pro_plus">
                    <img
                      src={"images/plus.png"}
                      className="img-responsive"
                      alt=""
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageGalleryCarousel;
