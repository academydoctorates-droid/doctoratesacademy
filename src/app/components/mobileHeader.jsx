// ... (your imports and other code)

"use client";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import EventIcon from "@mui/icons-material/Event";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import PeopleIcon from "@mui/icons-material/People";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import IconButton from "@mui/material/IconButton";

import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import useLocalStorage from "./../components/StorageHook";
import axios from "axios";
import { BASE_ASSET_URL } from "../utils";

const CustomHeader = () => {
  const [userId, setUserId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [memberLogin, setMemberLogin] = useState(null);
  const [volunteerLogin, setVolunteerLogin] = useState(null);

  const [logoutActive, setLogoutActive] = useState(false);

  // console.log("profileImage====>",profileImage)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const members = localStorage.getItem("members");
      const volunteers = localStorage.getItem("Volunteer");
      setMemberLogin(members);
      setVolunteerLogin(volunteers); 
    }
  }, []);

  const isLoggedIn = memberLogin || volunteerLogin;


  useEffect(() => {
    // async function getLoginUser(){
    //   const user = await
    // }
    const userId = localStorage.getItem("userId");

    const token = localStorage.getItem("token");

    const getLoginUserDetails = async () => {
      const res = await axios.get(`${BASE_ASSET_URL}/members/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // console.log("login details-->", res.data);
      setFirstName(res.data.firstName);
      setLastName(res.data.familyName);
      setProfileImage(res.data.profileImage.filename);
    };

    if (userId) {
      getLoginUserDetails(userId, token);
    }

    setUserId(userId);
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
  // ... (your existing state and useEffect code)

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  // ... (your existing handleLogout and other functions)

  return (
    <div className="Myheader">
      <div className="wrap2 navbar-custom navbar-fixed-top">
        <div className="mobileHeader">
          <div style={{ display: "flex", flexDirection: "column-reverse" }}>
            <div className="col-md-8  log_mobileheader">
              <div className="col-md-3">
                <a href="/">
                  <img
                    src="images/GAD Logo.png"
                    className="logoimg-responsive"
                    alt="Global Academy of Doctorates Logo"
                  />
                </a>
              </div>
              <div className="col-md-9" style={{ textAlign: "center" }}>
                <h3 style={{ fontSize: "18px", color: "red" }}>
                  GLOBAL ACADEMY OF DOCTORATES
                </h3>
                <p style={{ fontSize: "12px", color: "lightgreen" }}>
                  "Empowering Scholars with Boundless Opportunities”
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          style={{ width: "200px" }}
        >
          <div className="custom-drawer-header">
            <img
              src={userId ? BASE_ASSET_URL + "/" + profileImage : `${BASE_ASSET_URL}/images/dummy-image.jpg`}
              alt="ProfileImage_Error"
              className="custom-drawer-profile-image"
            />
            {userId && (
              <p className="custom-drawer-username">
                {firstName} {lastName}
                
              </p>
              
              
            )}
            <p>
                <a href="/editprofile">Edit Profile</a>
            </p>
           
          </div>
          <List
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ListItem>
              <a className="drawer-link" href="/">
                {" "}
                <HomeIcon className="drawer-icon" />
                Home
              </a>
            </ListItem>
            <ListItem>
              <a className="drawer-link" href="/about">
                <InfoIcon className="drawer-icon" />
                About Us
              </a>
            </ListItem>

            <ListItem>
              <a className="drawer-link" href="/objectives">
                {" "}
                <AssignmentIcon className="drawer-icon" /> Objectives
              </a>
            </ListItem>
            {/* <ListItem>
              <a className="drawer-link" href="/activities">
                {" "}
                <SportsEsportsIcon className="drawer-icon" /> Why Join
              </a>
            </ListItem> */}
            <ListItem>
              <a className="drawer-link" href="/why-join">
                {" "}
                <EmojiObjectsIcon className="drawer-icon" />
                Why Join
              </a>
            </ListItem>

            <ListItem>
              <a className="drawer-link" href="/wdd">
                {" "}
                <EmojiObjectsIcon className="drawer-icon" /> WDD
              </a>
            </ListItem>
           

            <ListItem>
              <a className="drawer-link" href="/gallery">
                {" "}
                <PhotoLibraryIcon className="drawer-icon" />
                Gallery
              </a>
            </ListItem>
            {/* <ListItem>
              <a className="drawer-link" href="/why-join">
                {" "}
                <EmojiObjectsIcon className="drawer-icon" />
                Why Join
              </a>
            </ListItem> */}

            <ListItem>
              <a className="drawer-link" href="/publication">
                {" "}
                <LibraryBooksIcon className="drawer-icon" />
                Publication
              </a>
            </ListItem>
             
            <ListItem>
              <a className="drawer-link" href="#">
                {" "}
                <EventIcon className="drawer-icon" />
                Innosolver
              </a>
            </ListItem>

            <ListItem>
              <a className="drawer-link" href="/members">
                {" "}
                <PeopleIcon className="drawer-icon" />
                Members
              </a>
            </ListItem>
            <ListItem>
              <a className="drawer-link" href="/volunteer">
                {" "}
                <EmojiObjectsIcon className="drawer-icon" />
                Volunteer
              </a>
            </ListItem>
            {/* <ListItem>
              <a className="drawer-link" href="/why-join">
                {" "}
                <EmojiObjectsIcon className="drawer-icon" />
                Donation
              </a>
            </ListItem> */}
   <ListItem>
      {isLoggedIn ? (
        <a className="drawer-link" onClick={handleLogout}>
          <ExitToAppIcon className="drawer-icon" />
          Logout
        </a>
      ) : (
        <a className="drawer-link" href="/login">
          <ExitToAppIcon className="drawer-icon" />
          Login
        </a>
      )}
    </ListItem>
            {/* Add other menu items here */}
            {/* {userId && (
                <>
                  <ListItem>
                    <a href="/editprofile">Edit Profile</a>
                  </ListItem>
                  <ListItem>
                    <a onClick={handleLogout}>Logout</a>
                  </ListItem>
                </>
              )} */}
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default CustomHeader;
