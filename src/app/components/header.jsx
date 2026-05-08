"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import useLocalStorage from "./../components/StorageHook";
import axios from "axios";
import { BASE_ASSET_URL } from "../utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MandatoryForLogin from "./MandatoryForLogin";
import { Card, CardContent } from "@mui/material";

const Header = () => {
  const [userId, setUserId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [members, setMembers] = useState([]);
  const [tokenId, setTokentId] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [visitorData, setVisitorData] = useState(null);
  const [hasFetchedData, setHasFetchedData] = useState(false);

  // console.log("TokenId--->",tokenId)

  const [MemberData, setMemberData] = useState("");

  const [logoutActive, setLogoutActive] = useState(false);

  const pathname = usePathname();
  const isActive = (href) => href == pathname;
  console.log(isActive, "isActiove");

  const handleChange = async (event) => {
    const value = event.target.value;
    const filteredMembers = members.filter(
      (item) =>
        item?.firstName?.toLowerCase().includes(value.toLowerCase()) ||
        item?.middleName?.toLowerCase().includes(value.toLowerCase()) ||
        item?.familyName?.toLowerCase().includes(value.toLowerCase()) ||
        item?.city?.toLowerCase().includes(value.toLowerCase()) ||
        item?.Country?.toLowerCase().includes(value.toLowerCase()) ||
        item?.Institution?.toLowerCase().includes(value.toLowerCase()) ||
        item?.designation?.toLowerCase().includes(value.toLowerCase()) ||
        item?.research_keyword?.toLowerCase().includes(value.toLowerCase())
    );
    console.log("filteredMembers====>", filteredMembers);
    setSearchTerm(value);

    if (value) {
      setSuggestions(filteredMembers);
    } else {
      setSuggestions([]);
    }
  };

  const getMembers = async (event) => {
    try {
      const response = await fetch(`${BASE_ASSET_URL}/members`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("data->", data);
      setMembers(data);
      // setSuggestions(data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  useEffect(() => {
    const memberLogin = localStorage.getItem("members");
    setMemberData(memberLogin);
    async function fetchVisitorData() {
      try {
        const response = await fetch(`${BASE_ASSET_URL}/visitor/increment`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ increment: true }),
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const countResponse = await fetch(`${BASE_ASSET_URL}/visitor/count`);
        if (!countResponse.ok) {
          throw new Error("Failed to fetch Visitor count");
        }
        const data = await countResponse.json();
        setVisitorData(data.count);
      } catch (error) {
        console.error("Error fetching visitor data:", error);
      }
    }

    if (typeof window != "undefined") {
      // Attach event listener to beforeunload event
      window.addEventListener("beforeunload", fetchVisitorData);
    }

    // Fetch data when component mounts
    fetchVisitorData();

    // Cleanup function to remove event listener
    return () => {
      if (typeof window != "undefined") {
        window.removeEventListener("beforeunload", fetchVisitorData);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const handleSearch = async () => {
    try {
      const response = await fetch(`${BASE_ASSET_URL}/members?q=${searchTerm}`);
      console.log("search data---->" + response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  useEffect(() => {
    // async function getLoginUser(){
    //   const user = await
    // }
    const userId = localStorage.getItem("userId");

    const token = localStorage.getItem("token");
    const mambersToken = localStorage.getItem("members");

    setTokentId(token);

    if (mambersToken === "Memberlogin") {
      const getLoginUserDetails = async () => {
        const res = await axios.get(`${BASE_ASSET_URL}/members/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("login details-->", res.data);
        setFirstName(res.data.firstName);
        setLastName(res.data.familyName);
        setProfileImage(res.data.profileImage.filename);
      };
      if (userId) {
        getLoginUserDetails(userId, token);
      }

      setUserId(userId);
    } else {
      const getLoginUserDetails = async () => {
        const res = await axios.get(`${BASE_ASSET_URL}/volunteers/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("volunteer  -->", res.data);
        setFirstName(res.data.firstName);
        setLastName(res.data.familyName);
        setProfileImage(res.data.profileImage.filename);
      };
      if (userId) {
        getLoginUserDetails(userId, token);
      }

      setUserId(userId);
    }

    getMembers();
  }, []);

  // const handleLogout = () => {
  //   localStorage.clear();
  //   location.replace("/");
  // };

  const handleLogout = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    e.stopPropagation(); // Stop the event from propagating to the parent elements

    // Perform logout actions here
    // ...

    localStorage.clear();
    location.replace("/");

    // Set the active state to prevent immediate hiding of the logout button
    setLogoutActive(true);

    // Set a timeout to remove the active state after a delay (e.g., 2 seconds)
    setTimeout(() => {
      setLogoutActive(false);
    }, 2000);
  };

  const handleChangePassword = (e) => {
    console.log("change password");
    // router.replace("/changepassword");
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="myheader">
      <div className="wrap2 navbar-custom navbar-fixed-top">
        <div className="container header">
          <div className="row">
            <div className="col-md-9 logo_div ">
              <div className="col-md-3">
                <a href="/">
                  <Image
                    src="/images/GAD Logo.png"
                    className="img-responsive"
                    alt=""
                    style={{ width: "80%", objectFit: "contain" }}
                    width={180}
                    height={180}
                  />
                </a>
              </div>

              <div className="col-md-9" style={{ textAlign: "left" }}>
                <h3
                  className="header-title"
                  style={{ fontFamily: "arial Narrow" }}
                >
                  Global Academy of Doctorates
                </h3>

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <p className="header-subtitle">
                      "Empowering Scholars with Boundless Opportunities”
                    </p>
                    <p
                      style={{
                        width: "115%",
                        marginLeft: 0,
                        fontSize: "1.5rem",
                        fontWeight: 600,
                      }}
                    >
                      (under the Society registration act XXI of 1860 no.
                      '#462/2022, New Delhi, India )
                    </p>
                  </div>

                  <div style={{ marginLeft: "5%" }}>
                    <Card
                      variant="outlined"
                      sx={{
                        backgroundColor: "teal",
                        width: "100%",
                        height: "4rem",
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "center",
                      }}
                    >
                      <CardContent sx={{ p: 0 }}>
                        <p
                          style={{
                            fontSize: "30px",
                            color: "white",
                            textAlign: "center",
                            // width: "13rem",
                          }}
                        >
                          {visitorData ? visitorData : "Loading..."}


                          
                        </p>
                      </CardContent>
                    </Card>
                    <p
                      style={{
                        fontWeight: "bold",
                        fontSize: 13,
                        marginTop: 2,
                        textAlign: "center",
                      }}
                    >
                      Total Visitors
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-3" style={{ marginTop: "1rem" }}>
              <div className="row">
                <div className="col-md-12">
                  <div className="slider_form">
                    <span className="search">
                      <input
                        placeholder="Search Members"
                        value={searchTerm}
                        onChange={handleChange}
                      />
                      {/* <button onClick={handleSearch}>
                        <span className="large_text" />
                        <span className="small_text">
                          <i className="las la-search" />
                        </span>
                      </button> */}
                      <button>
                        <span className="large_text" />
                        <span className="small_text">
                          <i className="las la-search" />
                        </span>
                      </button>
                    </span>
                    <div
                      className="suggestions"
                      style={
                        suggestions.length
                          ? {
                              position: "absolute",
                              zIndex: "99",
                              backgroundColor: "white",
                              width: "97%",
                              left: "6px",

                              top: "41px",
                              paddingLeft: "10px",
                              paddingRight: "10px",
                              borderRadius: "9px",
                              maxHeight: "242px",
                              overflowY: "hidden",
                              border: "1.5px solid blue",
                              borderTop: 0,
                              borderTopLeftRadius: 0,
                              borderTopRightRadius: 0,
                              display: "block",
                              paddingTop: 20,
                            }
                          : { display: "none" }
                      }
                    >
                      {suggestions.map((suggestion, index) => (
                        <>
                          <div key={index}>
                            {tokenId ? (
                              <Link href={`/viewProfile/${suggestion._id}`}>
                                <p style={{ color: "#007991" }}>
                                  <img
                                    style={{
                                      width: "13%",

                                      height: "40px",
                                      borderRadius: "100%",
                                      objectFit: "cover",
                                      marginRight: "17px",
                                      // marginTop: "5px",
                                    }}
                                    src={`${BASE_ASSET_URL}/${suggestion.profileImage.filename}`}
                                    alt=""
                                  />
                                  {suggestion.firstName} {suggestion.familyName},{" "}
                                  <span>{suggestion.city}</span>,
                                  <span>{suggestion.Country}</span>
                                </p>
                              </Link>
                            ) : (
                              <span
                                style={{ cursor: "pointer" }}
                                onClick={() => setOpenModal(true)}
                              >
                                <p
                                  style={{ color: "#007991" }}
                                  className="searchNamesText"
                                >
                                  <img
                                    style={{
                                      width: "13%",

                                      height: "40px",
                                      borderRadius: "100%",
                                      objectFit: "cover",
                                      marginRight: "17px",
                                      marginTop: "5px",
                                    }}
                                    src={`${BASE_ASSET_URL}/${suggestion.profileImage.filename}`}
                                    alt=""
                                  />
                                  {suggestion.firstName},{" "}
                                  <span className="searchNamesText">
                                    {suggestion.city}
                                  </span>
                                  ,
                                  <span className="searchNamesText">
                                    {suggestion.Country}
                                  </span>
                                </p>
                              </span>
                            )}
                            {/* <p>Title: {suggestion.title}</p> */}
                            {/* Render other properties as needed */}
                          </div>
                          {!(index === suggestions.length - 1) && <hr />}
                        </>
                      ))}
                    </div>
                  </div>
                </div>
                <MandatoryForLogin
                  open={openModal}
                  onClose={handleCloseModal}
                />

                {userId ? (
                  <div
                    style={{ justifyContent: "flex-end" }}
                    className="col-md-12 top_right_btns buttons "
                  >
                    <p>
                      {firstName} {lastName}
                    </p>
                    <a
                      href="/editprofile"
                      className="profile-link"
                      onMouseEnter={() => setLogoutActive(true)}
                      onMouseLeave={() => setLogoutActive(false)}
                    >
                      <img
                        src={BASE_ASSET_URL + "/" + profileImage}
                        style={{ width: 50, height: 50 }}
                        alt="ProfileImage_Error"
                      />
                      <div className="profile-dropdown-content">
                        {MemberData ? (
                          <a href="/editprofile">Edit Profile</a>
                        ) : (
                          ""
                        )}
                        <a href="/changepassword">Change Password</a>
                        <a onClick={handleLogout}>Logout</a>
                      </div>
                    </a>
                  </div>
                ) : (
                  <>
                    <div
                      style={{ justifyContent: "flex-end" }}
                      className="col-md-12 top_right_btns buttons"
                    >
                      <a className="btn btn_new1" href="/form">
                        Join as Member
                      </a>
                    </div>
                    <div
                      style={{ justifyContent: "flex-end" }}
                      className="col-md-12 top_right_btns buttons"
                    >
                      <a className="btn btn_new3" href="/volunteerform">
                        Join as volunteer
                      </a>
                    </div>
                    <div
                      style={{ justifyContent: "flex-end" }}
                      className="col-md-12 top_right_btns buttons"
                    >
                      <a href="/login" className="btn btn_new2">
                        Login
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </div>
        <div className="droopmenu-navbar">
          <div className="droopmenu-inner">
            <div className="droopmenu-header">
              <a href="/" className="droopmenu-brand visible-sm visible-xs">
                <img
                  src="images/GAD Logo.png"
                  className="img-responsive center-block"
                  alt=""
                />
              </a>
              <a href="#" className="droopmenu-toggle" />
            </div>
            {/* droopmenu-header */}
            <div className="droopmenu-nav">
              <ul className="droopmenu">
                <li>
                  {" "}
                  <Link href="/" className={isActive("/") ? "active" : ""}>
                    Home
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link
                    href="/about"
                    className={isActive("/about") ? "active" : ""}
                  >
                    About Us
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link
                    href="/objectives"
                    className={isActive("/objectives") ? "active" : ""}
                  >
                    Objectives
                  </Link>{" "}
                </li>
                {/* <li>
                  {" "}
                  <Link href="/activities">Activities</Link>{" "}
                </li> */}
                <li>
                  {" "}
                  <Link
                    href="/why-join"
                    className={isActive("/why-join") ? "active" : ""}
                  >
                    Why Join
                  </Link>{" "}
                </li>

                <li>
                  {" "}
                  <Link
                    href="/wdd"
                    className={isActive("/wdd") ? "active" : ""}
                  >
                    WDD
                  </Link>{" "}
                </li>
                {/* <li>
                  {" "}
                  <Link href="#">Conference</Link>{" "}
                </li> */}
                <li>
                  {" "}
                  <Link
                    href="/gallery"
                    className={isActive("/gallery") ? "active" : ""}
                  >
                    Gallery
                  </Link>{" "}
                </li>

                <li>
                  {" "}
                  <Link
                    href="/publication"
                    className={isActive("") ? "active" : ""}
                  >
                    Publications
                  </Link>{" "}
                </li>

                <li>
                  {" "}
                  {/* <Link href="" className={isActive("") ? "active" : ""}>
                    Innosolver
                  </Link>{" "} */}
                </li>
                <li>
                  {" "}
                  <Link
                    href="/members"
                    className={isActive("/members") ? "active" : ""}
                  >
                    Members
                  </Link>{" "}
                </li>
                <li>
                  {" "}
                  <Link
                    href="/volunteer"
                    className={isActive("/volunteer") ? "active" : ""}
                  >
                    Volunteer
                  </Link>{" "}
                </li>

                <li>
                  {" "}
                  <Link
                    href="/donation"
                    className={isActive("/donation") ? "active" : ""}
                  >
                    Donation
                  </Link>{" "}
                </li>
              </ul>
              {/* <li className="headerdown">
                        <a href="#" className="dropdown-toggle">
                          Publication <b className="caret"></b>
                        </a>
                        <ul className="headerdown-menu">
                          <li>
                            <Link href="/members">Members</Link>
                          </li>
                        </ul>
                      </li> */}
            </div>
            {/* droopmenu-nav */}
          </div>
          {/* droopmenu-inner */}
        </div>
      </div>
    </div>
  );
};

export default Header;
