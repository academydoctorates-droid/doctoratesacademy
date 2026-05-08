"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tr from "date-and-time/locale/tr";
import useGetFetch from "./useGetFetch";
import { BASE_ASSET_URL } from "../utils";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import MandatoryForLogin from "./MandatoryForLogin";

const DateCarousel = () => {
  const [slidesToShow, setSlidesToShow] = useState(calculateSlidesToShow());

  const [tokenId,setTokentId] = useState("")
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const getToken = () => {
      if (typeof window !== "undefined") {
        // Access localStorage only if the window object is available
        const token = localStorage.getItem("token");
        setTokentId(token);
      }
    };
  
    getToken();
  }, []);
  

console.log("token->", tokenId)

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const [members, setMembers] = useState([]);
  const [data] = useGetFetch(`${BASE_ASSET_URL}/members`);
  useEffect(() => {
    if (data.length < 10) {
      setMembers([...data, ...data, ...data, ...data, ...data, ...data, ...data]);
    } else {
      setMembers([...data, ...data, ...data, ...data, ...data, ...data, ...data, ...data]);
    }
  }, [data]);

  const CustomPrevButton = ({ onClick }) => (
    <div
      style={{
        position: "absolute",
        top: "38%",
        left: "-5.45%",
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
        top: "38%",
        right: "-10.45%",
        transform: "translateY(-50%)",
      }}
    >
      <a className="btn next2" onClick={onClick}>
        <img src="images/r_o.png" alt="Next" />
      </a>
    </div>
  );

  function calculateSlidesToShow() {
    if (typeof window !== 'undefined') {
      const screenWidth = window.innerWidth;

      if (screenWidth < 768) {
        return 2;
      } else if (screenWidth < 1200) {
        return 3;
      } else {

        return 4;
      }
    } else {

      return 2;
    }
  }


  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(calculateSlidesToShow());
    };
    if (typeof window != undefined) {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log("members00>", members)

  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 5,
    rows: 1,
    slidesToScroll: 1,
    className: "doctrate-body",
    prevArrow: <CustomPrevButton />,
    nextArrow: <CustomNextButton />,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    // centerMode: true,
    infinite: true
  };

  const numItemsNeeded = Math.ceil(slidesToShow / members.length) * members.length;

  // Generate a new array with repeated items to fill the carousel
  const repeatedItems = Array.from({ length: numItemsNeeded }, (_, index) => members[index % members.length]);

  // ... (existing code)
  return (
    <div>
      <div className="right_title" style={{textAlign:'center'}}>
        <h3>Members</h3>
      </div>
     {tokenId ? <Marquee pauseOnHover={true} >
        {repeatedItems.map((item, index) => (
          <div key={index} className="item">
            <div className="phd_box">
              <Link href={`viewProfile/${item._id}`}>
                {/* <img
                  src={`${BASE_ASSET_URL}/${item.profileImage.filename}`}
                  className="center-block member-header-img"
                  alt=""
                /> */}

                {item.profileImage ? (
          <img
            src={`${BASE_ASSET_URL}/${item.profileImage.filename}`}
            className="center-block member-header-img"
            alt=""
          />
        ) : (
          <img
            src="images/doc1.jpg"
            className="center-block member-header-img"
            alt=""
          />
        )}
              </Link>
              <div className="clearfix" />{" "}
              <a href="#" className="doc_name">
                {item.firstName} {item.middleName} {item.familyName}
              </a>{" "}
              <a href="#" className="doc_name">
                {item.city}
              </a>{" "}
            </div>
          </div>
        ))}
      </Marquee> :
      <Marquee pauseOnHover={true}  >
      {repeatedItems.map((item, index) => (
        <div key={index} className="item" onClick={() => setOpenModal(true)}>
          <div className="phd_box">
            <span style={{cursor: 'pointer'}}>
              {/* <img
                src={`${BASE_ASSET_URL}/${item.profileImage.filename}`}
                className="center-block member-header-img"
                alt=""
              /> */}
          {item.profileImage.filename ? (
          <img
            src={`${BASE_ASSET_URL}/${item.profileImage.filename}`}
            className="center-block member-header-img"
            alt=""
          />
        ) : (
          <img
            src="images/dummy-image.jpg"
            className="center-block member-header-img"
            alt=""
          />
        )}
            </span>
            <div className="clearfix" />{" "}
            <a href="#" className="doc_name">
             {item.title} {item.firstName} {item.middleName} {item.familyName}
            </a>{" "}
            <a href="#" className="doc_name">
              {item.city}
            </a>{" "}
          </div>
        </div>
      ))}
    </Marquee>}
      {/*   <Slider className="slider-container" {...settings}>
      {repeatedItems.map((item, index) => (

        <div key={index} className="item">
          <div className="phd_box">
            <Link href={`viewProfile/${item._id}`}>
              <img
                src={`${BASE_ASSET_URL}/${item.profileImage.filename}`}
                className="center-block member-header-img"
                alt=""
              />
            </Link>
            <div className="clearfix" />{" "}
            <a href="#" className="doc_name">
              {item.firstName} {item.lastName}
            </a>{" "}
            <a href="#" className="doc_name">
              {item.address}
            </a>{" "}
          </div>
        </div>
      ))}
    </Slider> */}
    <MandatoryForLogin open={openModal} onClose={handleCloseModal}/>

    </div>
  );
};

export default DateCarousel;
