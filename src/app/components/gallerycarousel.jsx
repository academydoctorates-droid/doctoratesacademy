"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useGetFetch from "./../components/useGetFetch";
import { BASE_ASSET_URL, getImageUrl } from "../utils";
const items = [
  { id: 1, imageUrl: "tab1.jpg" },
  { id: 2, imageUrl: "tab1b.jpg" },
  { id: 1, imageUrl: "tab1.jpg" },
  { id: 2, imageUrl: "tab1b.jpg" },
  { id: 1, imageUrl: "tab1.jpg" },
  { id: 2, imageUrl: "tab1b.jpg" },
  { id: 1, imageUrl: "tab1.jpg" },
  { id: 2, imageUrl: "tab1b.jpg" },
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

const GalleryCarousel = () => {
  const [data] = useGetFetch(`${BASE_ASSET_URL}/image-gallery`);
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    setGallery(data);
  }, [data]);
  console.log("data-->", gallery);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    className: "GDA",
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
        {gallery.map((item) => (
          <div key={item._id} className="item">
            <div className="gallery_box">
              <div className="cpl_image cpl_new">
                <a
                  href={getImageUrl(item.image)}
                  data-fancybox="images"
                >
                  <img
                    src={getImageUrl(item.image)}
                    className="img-responsive center-block"
                    alt=""
                    style={{height:350}}
                  />
                  {/* <div className="pro_plus">
                    <img
                      src="images/plus.png"
                      className="img-responsive"
                      alt=""
                    />
                  </div> */}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* <div className="customNavigation3">
        <button className="btn prev3" onClick={() => this.slider.slickPrev()}>
          <img src="images/l_o.png" alt="Previous" />
        </button>
        <button className="btn next3" onClick={() => this.slider.slickNext()}>
          <img src="images/r_o.png" alt="Next" />
        </button>
      </div> */}
    </div>
  );
};

export default GalleryCarousel;
