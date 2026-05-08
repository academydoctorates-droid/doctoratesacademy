"use client";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import DateCarousel from "./components/datacrosal";
import Events from "./components/events";
import TESTIMONIALS from "./components/testimonial";
import Header from "./components/header";
import useGetFetch from "./components/useGetFetch";
import { API_PATHS, BASE_ASSET_URL } from "./utils";
import React, { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import member1 from "./../../public/images/founding members/1.png";
import member2 from "./../../public/images/founding members/2.png";
import member3 from "./../../public/images/founding members/3.png";
import member4 from "./../../public/images/founding members/4.png";
import member5 from "./../../public/images/founding members/5.png";
import member6 from "./../../public/images/founding members/6.png";
import member7 from "./../../public/images/founding members/7.png";
import member8 from "./../../public/images/founding members/8.png";
import member9 from "./../../public/images/founding members/9.png";
import member10 from "./../../public/images/founding members/10.png";
import CustomHeader from "./components/mobileHeader";
import FoundingMembers from "./components/FoundingMembers";
import SideComponent from "./components/SideComponent";

export default function Home() {
  const [testimonildata, setTestimonildata] = useState([]);
  const [faqdata, setFaqdata] = useState([]);
  const [ourMembers, setOurMembers] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [testimonialRes, faqRes, membersRes, eventsRes] = await Promise.all([
          axios.get(API_PATHS.ADD_Testimonial),
          axios.get(API_PATHS.ADD_Faq),
          axios.get(API_PATHS.GET_Members),
          axios.get(API_PATHS.GET_Posts),
        ]);

        setTestimonildata(testimonialRes.data);
        setFaqdata(faqRes.data);
        setOurMembers(membersRes.data);
        setEvents(eventsRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {/* <Header /> */}
      <div className="header-container">
        <Header />
      </div>
      <div className="mobile-header-container">
        <CustomHeader />
      </div>

      <div className="sky_blue">
        <div className="container doctorates">
          <div className="row">
            <div className="col-md-9">
              <DateCarousel />
              <Events faqdata={faqdata}></Events>
            </div>
            <div className="col-md-3">
              <SideComponent faqdata={faqdata} allEvents={events} />
            </div>
          </div>
        </div>
      </div>
      <div className="container why_wrap">
        <div className="row">
          <div className="col-md-12 why_top">
            <h2>Why one should join the Global Academy of Doctorates?</h2>
            <p>
              Joining the Global Academy of Doctorates as a Life Member offers a
              multitude of benefits and opportunities that make it a compelling
              choice for aspiring and established scholars alike. Below are some
              of the key reasons why one should consider becoming a Life Member
              of the Global Academy of Doctorates:
            </p>
          </div>
          <div className="clearfix" />
        </div>
        <div className="clearfix" />
        <div className="row mid_row">
          <div className="col-md-5">
            {/* <Link href="/why-join#first" style={{ textDecoration: "none" }}> */}
            <div className="mid_left_item">
              <div className="mid_left_text flex-child-1 second">
                <h5>
                  {/* Best Industry Leaders */}
                  WHY SHOULD SCHOLARS JOIN
                </h5>
                <h6 style={{ textAlign: "start" }}>
                  Joining the Global Academy of Doctorates as a Life Member
                  offers a multitude of benefits and opportunities that make it
                  a compelling choice for aspiring and established scholars
                  alike. Below are some of the key reasons why one should
                  consider becoming a Life Member of the Global Academy of
                  Doctorates
                </h6>{" "}
                <div className="col-xs-6 view">
                  {" "}
                  <a href="/why-join#first" className="btn btn_new2">
                    View Details
                  </a>{" "}
                </div>
              </div>
              <div className="flex-child first">
                {" "}
                <img
                  src="images/scholar.svg"
                  className="img-responsive founding-members-img"
                  alt=""
                />{" "}
              </div>
              <div className="clearfix" />
            </div>
            {/* </Link> */}
            <div className="clearfix" />
          </div>
          <div className="col-md-2 mid_globe">
            {" "}
            <img
              src="images/GAD Logo.png"
              className="img-responsive center-block"
              alt=""
            />{" "}
          </div>
          <div className="col-md-5">
            {/* <Link href="/why-join#third"> */}
            <div className="mid_right_item">
              <div className="diff_left flex-child">
                {" "}
                <img
                  src="images/partner.svg"
                  className="img-responsive"
                  style={{ borderRadius: 0, height: 76, width: 66 }}
                  alt=""
                />{" "}
              </div>
              <div className="diff_right flex-child-1">
                <h5>
                  ADVANTAGES TO CORPORATES TO PARTNER WITH Global Academy of
                  Doctrates
                  {/* Professional Certification */}
                </h5>
                <h6>
                  Corporates and industries might consider becoming partners of
                  the Global Academy of Doctorates and joining as members for
                  several reasons, depending on their specific goals and
                  objectives. Here are some potential benefits:
                </h6>{" "}
                <div className="col-xs-6 view">
                  {" "}
                  <a href="/why-join#third" className="btn btn_new2">
                    View Details
                  </a>{" "}
                </div>
              </div>
              <div className="clearfix" />
            </div>
            {/* </Link> */}
            <div className="clearfix" />
            {/* <Link href="/why-join">
              <div className="mid_right_item">
                <div className="diff_left flex-child">
                  {" "}
                  <img
                    src="images/why4.png"
                    className="img-responsive"
                    alt=""
                  />{" "}
                </div>
                <div className="diff_right flex-child-1">
                  <h5>Global Network</h5>
                  <h6>
                    Joining the academy provides access to a vast and diverse
                    global network of fellow researchers, professors, and
                    industry experts. Networking opportunities allow you to
                    collaborate on research projects, share knowledge, and
                    foster meaningful connections that can further your academic
                    and professional goals.
                  </h6>{" "}
                </div>
                <div className="clearfix" />
              </div>
            </Link> */}
            <div className="clearfix" />
          </div>
          <div className="clearfix" />
        </div>
        <div className="clearfix" />
      </div>
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: -20,
          marginBottom: 20,
        }}
      >
        <div className="col-md-5">
          <div
            className="mid_left_item"
            style={{ display: "flex", flexDirection: "column-reverse" }}
          >
            <div className="mid_left_text flex-child-1 second">
              <h5 style={{ textAlign: "center" }}>
                ADVANTAGES TO ACADEMIC INSTITUTIONS TO PARTNER WITH GLOBAL
                ACADEMY OF DOCTORATES
                {/* Learn Online at Your Own Pace */}
              </h5>
              <h6 style={{ textAlign: "justify" }}>
                The decision for an academic institution to become a partner of
                the Global Academy of Doctorates and join as a member depends on
                several factors. Here are some potential reasons why an academic
                institution might consider such a partnership
              </h6>{" "}
              <div className="col-xs-6 view">
                {" "}
                <a href="/why-join#second" className="btn btn_new2">
                  View Details
                </a>{" "}
              </div>
            </div>
            <div className="flex-child first" style={{ alignSelf: "center" }}>
              {" "}
              <img
                src="images/graduate.svg"
                className="img-responsive"
                alt=""
              />{" "}
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </div>
      <div className="testi_say">
        <div className="container concept_wrap">
          <div className="row">
            <div className="col-md-6 doctors_top_left">
              <h3>TESTIMONIALS</h3>
              <h2>We Believe people we trust</h2>{" "}
            </div>
            {/* <div className="col-md-3 col-md-offset-3 doctors_top_right">
              <div className="diff_left">
                <div className="circle1">
                  <p>4.8</p>
                </div>
              </div>
              <div className="diff_right circle_text">
                <ul className="star_rating">
                  <li>
                    <i className="las la-star" />
                  </li>
                  <li>
                    <i className="las la-star" />
                  </li>
                  <li>
                    <i className="las la-star" />
                  </li>
                  <li>
                    <i className="las la-star" />
                  </li>
                  <li>
                    <i className="las la-star light_grey" aria-hidden="true" />
                  </li>
                </ul>
                <div className="clearfix" />
                <h6>
                  2,394 Ratings <br />
                  (Google Reviews)
                </h6>{" "}
              </div>
              <div className="clearfix" />
            </div> */}
            <div className="clearfix" />
            <div className="col-md-12 diff">
              <TESTIMONIALS testimonildata={testimonildata} />
              {/* <div >
            <div className="item">
              <div className="diff_box" data-uniform="true3">
                <div className="diff_inner">
                  <div className="inverted">
                    <img src="images/inverted.png" alt="" />{" "}
                  </div>
                  <div className="clearfix" />
                  <p>
                    I m totally unconvinced that two people can find a person
                    they havent known previously, and become an effective co
                    founder
                  </p>
                  <div className="clearfix" />
                  <div className="diff_left">
                    {" "}
                    <img
                      src="images/doc1.jpg"
                      className="img-responsive"
                      alt=""
                    />{" "}
                  </div>
                  <div className="diff_right">
                    <h5>Andrew Wilkins</h5>
                    <h6>Managing Director, Yess Company</h6>{" "}
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="diff_box" data-uniform="true3">
                <div className="diff_inner">
                  <div className="inverted">
                    <img src="images/inverted.png" alt="" />{" "}
                  </div>
                  <div className="clearfix" />
                  <p>
                    I m totally unconvinced that two people can find a person
                    they havent known previously, and become an effective co
                    founder
                  </p>
                  <div className="clearfix" />
                  <div className="diff_left">
                    {" "}
                    <img
                      src="images/doc2.jpg"
                      className="img-responsive"
                      alt=""
                    />{" "}
                  </div>
                  <div className="diff_right">
                    <h5>Andrew Wilkins</h5>
                    <h6>Managing Director, Yess Company</h6>{" "}
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="diff_box" data-uniform="true3">
                <div className="diff_inner">
                  <div className="inverted">
                    <img src="images/inverted.png" alt="" />{" "}
                  </div>
                  <div className="clearfix" />
                  <p>
                    I m totally unconvinced that two people can find a person
                    they havent known previously, and become an effective co
                    founder
                  </p>
                  <div className="clearfix" />
                  <div className="diff_left">
                    {" "}
                    <img
                      src="images/doc3.jpg"
                      className="img-responsive"
                      alt=""
                    />{" "}
                  </div>
                  <div className="diff_right">
                    <h5>Andrew Wilkins</h5>
                    <h6>Managing Director, Yess Company</h6>{" "}
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="diff_box" data-uniform="true3">
                <div className="diff_inner">
                  <div className="inverted">
                    <img src="images/inverted.png" alt="" />{" "}
                  </div>
                  <div className="clearfix" />
                  <p>
                    I m totally unconvinced that two people can find a person
                    they havent known previously, and become an effective co
                    founder
                  </p>
                  <div className="clearfix" />
                  <div className="diff_left">
                    {" "}
                    <img
                      src="images/doc1.jpg"
                      className="img-responsive"
                      alt=""
                    />{" "}
                  </div>
                  <div className="diff_right">
                    <h5>Andrew Wilkins</h5>
                    <h6>Managing Director, Yess Company</h6>{" "}
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="diff_box" data-uniform="true3">
                <div className="diff_inner">
                  <div className="inverted">
                    <img src="images/inverted.png" alt="" />{" "}
                  </div>
                  <div className="clearfix" />
                  <p>
                    I m totally unconvinced that two people can find a person
                    they havent known previously, and become an effective co
                    founder
                  </p>
                  <div className="clearfix" />
                  <div className="diff_left">
                    {" "}
                    <img
                      src="images/doc2.jpg"
                      className="img-responsive"
                      alt=""
                    />{" "}
                  </div>
                  <div className="diff_right">
                    <h5>Andrew Wilkins</h5>
                    <h6>Managing Director, Yess Company</h6>{" "}
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="diff_box" data-uniform="true3">
                <div className="diff_inner">
                  <div className="inverted">
                    <img src="images/inverted.png" alt="" />{" "}
                  </div>
                  <div className="clearfix" />
                  <p>
                    I m totally unconvinced that two people can find a person
                    they havent known previously, and become an effective co
                    founder
                  </p>
                  <div className="clearfix" />
                  <div className="diff_left">
                    {" "}
                    <img
                      src="images/doc3.jpg"
                      className="img-responsive"
                      alt=""
                    />{" "}
                  </div>
                  <div className="diff_right">
                    <h5>Andrew Wilkins</h5>
                    <h6>Managing Director, Yess Company</h6>{" "}
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="diff_box" data-uniform="true3">
                <div className="diff_inner">
                  <div className="inverted">
                    <img src="images/inverted.png" alt="" />{" "}
                  </div>
                  <div className="clearfix" />
                  <p>
                    I m totally unconvinced that two people can find a person
                    they havent known previously, and become an effective co
                    founder
                  </p>
                  <div className="clearfix" />
                  <div className="diff_left">
                    {" "}
                    <imgf
                      src="images/doc1.jpg"
                      className="img-responsive"
                      alt=""
                    />{" "}
                  </div>
                  <div className="diff_right">
                    <h5>Andrew Wilkins</h5>
                    <h6>Managing Director, Yess Company</h6>{" "}
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="diff_box" data-uniform="true3">
                <div className="diff_inner">
                  <div className="inverted">
                    <img src="images/inverted.png" alt="" />{" "}
                  </div>
                  <div className="clearfix" />
                  <p>
                    I m totally unconvinced that two people can find a person
                    they havent known previously, and become an effective co
                    founder
                  </p>
                  <div className="clearfix" />
                  <div className="diff_left">
                    {" "}
                    <img
                      src="images/doc2.jpg"
                      className="img-responsive"
                      alt=""
                    />{" "}
                  </div>
                  <div className="diff_right">
                    <h5>Andrew Wilkins</h5>
                    <h6>Managing Director, Yess Company</h6>{" "}
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
          </div> */}
            </div>
            <div className="clearfix" />
          </div>

          <div className="clearfix" />
        </div>
      </div>

      <div className="container instructor_wrap">
        <div className="row">
          <div className="col-md-12 ins_top">
            <h2>Our Founding Members</h2>
            {/* <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </p> */}
          </div>
          <div className="clearfix" />
          <FoundingMembers />

          {/* <div className="col-md-4">
            <div className="instruct_box">
              {" "}
              <img
                src="images/t2.jpg"
                className="img-responsive center-block"
                alt=""
              />
              <h3>Bruce Stevens</h3>
              <p>
                Duis aute irure dolor in velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat voluptas.
              </p>{" "}
              <a href="#" className="btn btn_new2">
                View Profile
              </a>{" "}
            </div>
          </div>
          <div className="col-md-4">
            <div className="instruct_box">
              {" "}
              <img
                src="images/t3.jpg"
                className="img-responsive center-block"
                alt=""
              />
              <h3>Michelle Baker</h3>
              <p>
                Duis aute irure dolor in velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat voluptas.
              </p>{" "}
              <a href="#" className="btn btn_new2">
                View Profile
              </a>{" "}
            </div>
          </div> */}
          <div className="clearfix" />
        </div>
        <div className="clearfix" />
      </div>

      <div className="join_com">
        <div className="container">
          <div className="row">
            {/* <div className="col-md-12">
              <h2>Join the Global Academy of Doctorates</h2>
              <p>
                Enter your email address to register to our newsletter
                subscription delivered on regular basis!{" "}
              </p>
              <div className="clearfix" />
              <div className="row">
                <div className="col-md-8 col-md-offset-2 mid_input">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email.."
                    />{" "}
                  </div>
                </div>
                <div className="clearfix" />
                <button className="btn btn_new1">Join</button>
              </div>
              <div className="clearfix" />
              <div className="clearfix" />
            </div> */}
            <div className="clearfix" />
          </div>
          <div className="clearfix" />
        </div>
      </div>

      <div className="desk_footer" data-toggle="modal">
        <ul>
          <li>
            <Link href="/">
              <div className="icon_div">
                {" "}
                <i className="las la-home" /> <span>Home</span>{" "}
              </div>
            </Link>
          </li>
          <li>
            <Link href="/form">
              <div className="icon_div">
                {" "}
                <i className="las la-user" /> <span>Join As Member</span>{" "}
              </div>
            </Link>
          </li>
          <li>
            <Link href="/volunteerform">
              <div className="icon_div">
                {" "}
                <i className="las la-user" /> <span>Join As Volunteer</span>{" "}
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="modal fade advert_modal" id="myModal_login" role="dialog">
        <div className="modal-dialog">
          {/* Modal content*/}
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="login_wrap login_box">
                <ul className="nav nav-pills nav-justified">
                  <li className="active">
                    <a data-toggle="pill" href="#customer">
                      Login
                    </a>
                  </li>
                  <li>
                    <a data-toggle="pill" href="#agency">
                      Register
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div id="customer" className="tab-pane fade in active">
                    <form action="/action_page.php" className="form_div_outer2">
                      <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                        />{" "}
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Phone:</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                        />{" "}
                      </div>
                      <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input
                          type="password"
                          className="form-control"
                          id="pwd"
                        />{" "}
                      </div>{" "}
                      <a
                        href="javascript:void(0);"
                        className="forgot"
                        data-toggle="collapse"
                        data-target="#fgot2"
                      >
                        Forgot Password?
                      </a>
                      <div id="fgot2" className="collapse">
                        <h6>
                          We shall send a re-activation link to your email
                          address
                        </h6>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Email Address"
                          />{" "}
                        </div>
                        <button className="btn btn_new1">Submit</button>
                      </div>
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" /> Stay Logged In
                        </label>
                      </div>
                      <div className="login_lower">
                        <button type="submit" className="btn btn_new1">
                          Submit
                        </button>
                      </div>
                    </form>
                    <div className="clearfix" />
                    <div className="reg_link">
                      <p>
                        If you dont have any account then register here -{" "}
                        <a href="#agency" className="link-to-tab">
                          Register
                        </a>
                      </p>
                    </div>
                  </div>
                  <div id="agency" className="tab-pane fade">
                    <form action="/action_page.php" className="form_div_outer2">
                      <div className="form-group">
                        <label htmlFor="email">Name:</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                        />{" "}
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                        />{" "}
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Phone:</label>
                        <input
                          type="email"
                          className="form-control"
                          id="phone"
                        />{" "}
                      </div>
                      <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input
                          type="password"
                          className="form-control"
                          id="pwd"
                        />{" "}
                      </div>
                      <div className="form-group">
                        <label htmlFor="pwd">Confirm Password:</label>
                        <input
                          type="password"
                          className="form-control"
                          id="pwd"
                        />{" "}
                      </div>
                      <div className="login_lower">
                        <button type="submit" className="btn btn_new1">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="clearfix" />
              </div>
              <div className="clearfix" />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn_new1"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
