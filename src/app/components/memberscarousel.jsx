/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useGetFetch from "./useGetFetch";
import { BASE_ASSET_URL } from "../utils";

const MembersCarousel = () => {

  const [members, setMembers] = useState([]);
 
  // console.log(members.reverse().slice(0,10),"dataMembers")
  
  const [data] = useGetFetch(`${BASE_ASSET_URL}/members`);
  useEffect(() => {
    setMembers(data.reverse());
  
  }, [data]);

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;


  const CustomPrevButton = ({ onClick }) => (
    <div className="btn prev4" onClick={onClick}>
      <img
        src="images/l_o.png"
        alt="Previous"
        style={{
          position: "absolute",
          top: "-20px",
          left: isMobile ? 0 : 0,
          zIndex: "1",
        }}
        className="btn prev4"
        onClick={onClick}
      />
    </div>
  );

  const CustomNextButton = ({ onClick }) => (
    <div
      style={{
        position: "absolute",
        top: "-20px",
        right: 0,
      }}
      className="btn next4"
      onClick={onClick}
    >
      <img src="images/r_o.png" alt="Next" />
    </div>
  );

  const settings = {
    // className:"gold-members",
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    prevArrow: <CustomPrevButton />,
    nextArrow: <CustomNextButton />,
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoints as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 480, // Adjust breakpoints as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "30px",
        },
      },
    ],
  };

  return (
    <div className="members_outer">
      <Slider {...settings}>
        {members.slice(0,10).map((member, index) => (
          <div key={member._id} className="item">
            <div className="member_div">
              {member.profileImage.filename ? (
                <img
                  src={`${BASE_ASSET_URL}/${member.profileImage.filename}`}
                  className="img-responsive member-image"
                  alt=""
                />
              ) : (
                <img
                  src="images/dummy-image.jpg"
                  className="img-responsive member-image"
                  alt=""
                />
              )}
              <div className="row member_detail">
                <div className="col-xs-12" style={{ textAlign: "center" }}>
                  <a href="#">
                    {member.title} {member.firstName}  {member.middleName} {member.familyName}
                  </a>
                </div>
                <div className="col-xs-12 text-center">
                  <p> {member.city}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MembersCarousel;
