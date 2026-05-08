"use client";

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const items = [
  { id: 0, imageUrl: "images/GAD_IMAGE_2023/WDD_0_23.JPG" },
  { id: 1, imageUrl: "images/GAD_IMAGE_2023/WDD_1_23.JPG" },
  { id: 2, imageUrl: "images/GAD_IMAGE_2023/WDD_2_23.JPG" },
  { id: 3, imageUrl: "images/GAD_IMAGE_2023/WDD_3_23.JPG" },
  { id: 4, imageUrl: "images/GAD_IMAGE_2023/WDD_4_23.JPG" },
  { id: 5, imageUrl: "images/GAD_IMAGE_2023/WDD_5_23.JPG" },
  { id: 6, imageUrl: "images/GAD_IMAGE_2023/WDD_6_23.JPG" },
  { id: 7, imageUrl: "images/GAD_IMAGE_2023/WDD_7_23.JPG" },
  { id: 8, imageUrl: "images/GAD_IMAGE_2023/WDD_8_23.JPG" },
  { id: 9, imageUrl: "images/GAD_IMAGE_2023/WDD_9_23.JPG" },
  { id: 10, imageUrl: "images/GAD_IMAGE_2023/WDD_10_23.JPG" },
  { id: 11, imageUrl: "images/GAD_IMAGE_2023/WDD_11_23.JPG" },
  { id: 12, imageUrl: "images/GAD_IMAGE_2023/WDD_12_23.JPG" },
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

const WorldDoctorsDayGalleryCarousel = () => {
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

export default WorldDoctorsDayGalleryCarousel;
