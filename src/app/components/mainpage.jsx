// "use client"
// import Image from 'next/image';
// import Script from 'next/script';
// import DateCarousel from './datacrosal';
// import MembersCarousel from './memberscarousel';
// import GalleryCarousel from './gallerycarousel';
// import TESTIMONIALS from './testimonial';
// import { useState } from 'react';
// import Events from './events'
// const Mainpage = () => {

//   return (
//     <>

//       <div className="myheader">
//         <div className="wrap2 navbar-custom navbar-fixed-top">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-2 logo_div ">
//                 <a href="index.html">
//                   <img src="images/logo.png" className="img-responsive" alt="" />
//                 </a>
//               </div>
//               <div className="col-md-10">
//                 <div className="row">
//                   <div className="col-md-5 col-md-offset-4">
//                     <div className="slider_form">
//                       {" "}
//                       <span className="search">
//                         <input placeholder="Search here" />
//                         <button>
//                           <span className="large_text" />
//                           <span className="small_text">
//                             <i className="las la-search" />
//                           </span>
//                         </button>
//                       </span>
//                     </div>
//                   </div>
//                   <div className="col-md-3 top_right_btns">
//                     {" "}
//                     <a href="#" className="btn btn_new1">
//                       Join as Member
//                     </a>{" "}
//                     <a href="#" className="btn btn_new2">
//                       Login
//                     </a>{" "}
//                   </div>
//                 </div>
//                 <div className="droopmenu-navbar">
//                   <div className="droopmenu-inner">
//                     <div className="droopmenu-header">
//                       <a href="#" className="droopmenu-brand visible-sm visible-xs">
//                         <img
//                           src="images/logo.png"
//                           className="img-responsive center-block"
//                           alt=""
//                         />
//                       </a>
//                       <a href="#" className="droopmenu-toggle" />
//                     </div>
//                     {/* droopmenu-header */}
//                     <div className="droopmenu-nav">
//                       <ul className="droopmenu">
//                         <li>
//                           {" "}
//                           <a href="#">Home</a>{" "}
//                         </li>
//                         <li>
//                           {" "}
//                           <a href="#">About Us</a>{" "}
//                         </li>
//                         <li>
//                           {" "}
//                           <a href="#">Objectives</a>{" "}
//                         </li>
//                         <li>
//                           {" "}
//                           <a href="#">Activities</a>{" "}
//                         </li>
//                         <li>
//                           {" "}
//                           <a href="#">WDD</a>{" "}
//                         </li>
//                         <li>
//                           {" "}
//                           <a href="#">Conference</a>{" "}
//                         </li>
//                         <li>
//                           {" "}
//                           <a href="#">Gallery</a>{" "}
//                         </li>
//                         <li>
//                           {" "}
//                           <a href="#">Publication</a>{" "}
//                         </li>
//                         <li>
//                           {" "}
//                           <a href="#">Member</a>{" "}
//                         </li>
//                       </ul>
//                     </div>
//                     {/* droopmenu-nav */}
//                   </div>
//                   {/* droopmenu-inner */}
//                 </div>
//                 {/* droopmenu-navbar  */}
//               </div>
//             </div>
//             <div className="clearfix" />
//           </div>
//         </div>
//       </div>

//       <div className="sky_blue">
//         <div className="container doctorates">
//           <div className="row">
//             <div className="col-md-12">
//               <h2>GLOBAL ACADEMY OF DOCTORATES</h2>{" "}
//             </div>
//             <div className="col-md-12">
//               <DateCarousel />
//             </div>
//           </div>
//           <div className="clearfix" />
//         </div>
//         <Events></Events>
//       </div>
//       <div className="container why_wrap">
//         <div className="row">
//           <div className="col-md-12 why_top">
//             <h2>Why one should join the GAD?</h2>
//             <p>
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry standard dummy text ever
//               since the 1500s, when an unknown printer took a galley of type and
//               scrambled it to make a type specimen book. It has survived not only
//               five centuries
//             </p>
//           </div>
//           <div className="clearfix" />
//         </div>
//         <div className="clearfix" />
//         <div className="row mid_row">
//           <div className="col-md-5">
//             <div className="mid_left_item">
//               <div className="mid_left_text flex-child-1 second">
//                 <h5>Best Industry Leaders </h5>
//                 <h6>
//                   Lorem Ipsum is simply dummy text of the printing and typesetting
//                   industry. Lorem Ipsum has been the industry s standard dummy text
//                   ever since the 1500s,
//                 </h6>{" "}
//               </div>
//               <div className="flex-child first">
//                 {" "}
//                 <img src="images/why1.png" className="img-responsive" alt="" />{" "}
//               </div>
//               <div className="clearfix" />
//             </div>
//             <div className="clearfix" />
//             <div className="mid_left_item">
//               <div className="mid_left_text flex-child-1 second">
//                 <h5>Learn Online at Your Own Pace</h5>
//                 <h6>
//                   Lorem Ipsum is simply dummy text of the printing and typesetting
//                   industry. Lorem Ipsum has been the industry standard dummy text
//                   ever since the 1500s,
//                 </h6>{" "}
//               </div>
//               <div className="flex-child first">
//                 {" "}
//                 <img src="images/why2.png" className="img-responsive" alt="" />{" "}
//               </div>
//               <div className="clearfix" />
//             </div>
//           </div>
//           <div className="col-md-2 mid_globe">
//             {" "}
//             <img
//               src="images/globe.png"
//               className="img-responsive center-block"
//               alt=""
//             />{" "}
//           </div>
//           <div className="col-md-5">
//             <div className="mid_right_item">
//               <div className="diff_left flex-child">
//                 {" "}
//                 <img src="images/why3.png" className="img-responsive" alt="" />{" "}
//               </div>
//               <div className="diff_right flex-child-1">
//                 <h5>Professional Certification</h5>
//                 <h6>
//                   Lorem Ipsum is simply dummy text of the printing and typesetting
//                   industry. Lorem Ipsum has been the industry standard dummy text
//                   ever since the 1500s,
//                 </h6>{" "}
//               </div>
//               <div className="clearfix" />
//             </div>
//             <div className="clearfix" />
//             <div className="mid_right_item">
//               <div className="diff_left flex-child">
//                 {" "}
//                 <img src="images/why4.png" className="img-responsive" alt="" />{" "}
//               </div>
//               <div className="diff_right flex-child-1">
//                 <h5>Best Industry Leaders</h5>
//                 <h6>
//                   Lorem Ipsum is simply dummy text of the printing and typesetting
//                   industry. Lorem Ipsum has been the industry standard dummy text
//                   ever since the 1500s,
//                 </h6>{" "}
//               </div>
//               <div className="clearfix" />
//             </div>
//             <div className="clearfix" />
//           </div>
//           <div className="clearfix" />
//         </div>
//         <div className="clearfix" />
//       </div>
//       <div className="testi_say">
//         <div className="container concept_wrap">
//           <div className="row">
//             <div className="col-md-6 doctors_top_left">
//               <h3>TESTIMONIALS</h3>
//               <h2>We Believe people we trust</h2>{" "}
//             </div>
//             <div className="col-md-3 col-md-offset-3 doctors_top_right">
//               <div className="diff_left">
//                 <div className="circle1">
//                   <p>4.8</p>
//                 </div>
//               </div>
//               <div className="diff_right circle_text">
//                 <ul className="star_rating">
//                   <li>
//                     <i className="las la-star" />
//                   </li>
//                   <li>
//                     <i className="las la-star" />
//                   </li>
//                   <li>
//                     <i className="las la-star" />
//                   </li>
//                   <li>
//                     <i className="las la-star" />
//                   </li>
//                   <li>
//                     <i className="las la-star light_grey" aria-hidden="true" />
//                   </li>
//                 </ul>
//                 <div className="clearfix" />
//                 <h6>
//                   2,394 Ratings <br />
//                   (Google Reviews)
//                 </h6>{" "}
//               </div>
//               <div className="clearfix" />
//             </div>
//             <div className="clearfix" />
//             <div className="col-md-12 diff">
//               <TESTIMONIALS />
//               {/* <div >
//             <div className="item">
//               <div className="diff_box" data-uniform="true3">
//                 <div className="diff_inner">
//                   <div className="inverted">
//                     <img src="images/inverted.png" alt="" />{" "}
//                   </div>
//                   <div className="clearfix" />
//                   <p>
//                     I m totally unconvinced that two people can find a person
//                     they havent known previously, and become an effective co
//                     founder
//                   </p>
//                   <div className="clearfix" />
//                   <div className="diff_left">
//                     {" "}
//                     <img
//                       src="images/doc1.jpg"
//                       className="img-responsive"
//                       alt=""
//                     />{" "}
//                   </div>
//                   <div className="diff_right">
//                     <h5>Andrew Wilkins</h5>
//                     <h6>Managing Director, Yess Company</h6>{" "}
//                   </div>
//                   <div className="clearfix" />
//                 </div>
//               </div>
//             </div>
//             <div className="item">
//               <div className="diff_box" data-uniform="true3">
//                 <div className="diff_inner">
//                   <div className="inverted">
//                     <img src="images/inverted.png" alt="" />{" "}
//                   </div>
//                   <div className="clearfix" />
//                   <p>
//                     I m totally unconvinced that two people can find a person
//                     they havent known previously, and become an effective co
//                     founder
//                   </p>
//                   <div className="clearfix" />
//                   <div className="diff_left">
//                     {" "}
//                     <img
//                       src="images/doc2.jpg"
//                       className="img-responsive"
//                       alt=""
//                     />{" "}
//                   </div>
//                   <div className="diff_right">
//                     <h5>Andrew Wilkins</h5>
//                     <h6>Managing Director, Yess Company</h6>{" "}
//                   </div>
//                   <div className="clearfix" />
//                 </div>
//               </div>
//             </div>
//             <div className="item">
//               <div className="diff_box" data-uniform="true3">
//                 <div className="diff_inner">
//                   <div className="inverted">
//                     <img src="images/inverted.png" alt="" />{" "}
//                   </div>
//                   <div className="clearfix" />
//                   <p>
//                     I m totally unconvinced that two people can find a person
//                     they havent known previously, and become an effective co
//                     founder
//                   </p>
//                   <div className="clearfix" />
//                   <div className="diff_left">
//                     {" "}
//                     <img
//                       src="images/doc3.jpg"
//                       className="img-responsive"
//                       alt=""
//                     />{" "}
//                   </div>
//                   <div className="diff_right">
//                     <h5>Andrew Wilkins</h5>
//                     <h6>Managing Director, Yess Company</h6>{" "}
//                   </div>
//                   <div className="clearfix" />
//                 </div>
//               </div>
//             </div>
//             <div className="item">
//               <div className="diff_box" data-uniform="true3">
//                 <div className="diff_inner">
//                   <div className="inverted">
//                     <img src="images/inverted.png" alt="" />{" "}
//                   </div>
//                   <div className="clearfix" />
//                   <p>
//                     I m totally unconvinced that two people can find a person
//                     they havent known previously, and become an effective co
//                     founder
//                   </p>
//                   <div className="clearfix" />
//                   <div className="diff_left">
//                     {" "}
//                     <img
//                       src="images/doc1.jpg"
//                       className="img-responsive"
//                       alt=""
//                     />{" "}
//                   </div>
//                   <div className="diff_right">
//                     <h5>Andrew Wilkins</h5>
//                     <h6>Managing Director, Yess Company</h6>{" "}
//                   </div>
//                   <div className="clearfix" />
//                 </div>
//               </div>
//             </div>
//             <div className="item">
//               <div className="diff_box" data-uniform="true3">
//                 <div className="diff_inner">
//                   <div className="inverted">
//                     <img src="images/inverted.png" alt="" />{" "}
//                   </div>
//                   <div className="clearfix" />
//                   <p>
//                     I m totally unconvinced that two people can find a person
//                     they havent known previously, and become an effective co
//                     founder
//                   </p>
//                   <div className="clearfix" />
//                   <div className="diff_left">
//                     {" "}
//                     <img
//                       src="images/doc2.jpg"
//                       className="img-responsive"
//                       alt=""
//                     />{" "}
//                   </div>
//                   <div className="diff_right">
//                     <h5>Andrew Wilkins</h5>
//                     <h6>Managing Director, Yess Company</h6>{" "}
//                   </div>
//                   <div className="clearfix" />
//                 </div>
//               </div>
//             </div>
//             <div className="item">
//               <div className="diff_box" data-uniform="true3">
//                 <div className="diff_inner">
//                   <div className="inverted">
//                     <img src="images/inverted.png" alt="" />{" "}
//                   </div>
//                   <div className="clearfix" />
//                   <p>
//                     I m totally unconvinced that two people can find a person
//                     they havent known previously, and become an effective co
//                     founder
//                   </p>
//                   <div className="clearfix" />
//                   <div className="diff_left">
//                     {" "}
//                     <img
//                       src="images/doc3.jpg"
//                       className="img-responsive"
//                       alt=""
//                     />{" "}
//                   </div>
//                   <div className="diff_right">
//                     <h5>Andrew Wilkins</h5>
//                     <h6>Managing Director, Yess Company</h6>{" "}
//                   </div>
//                   <div className="clearfix" />
//                 </div>
//               </div>
//             </div>
//             <div className="item">
//               <div className="diff_box" data-uniform="true3">
//                 <div className="diff_inner">
//                   <div className="inverted">
//                     <img src="images/inverted.png" alt="" />{" "}
//                   </div>
//                   <div className="clearfix" />
//                   <p>
//                     I m totally unconvinced that two people can find a person
//                     they havent known previously, and become an effective co
//                     founder
//                   </p>
//                   <div className="clearfix" />
//                   <div className="diff_left">
//                     {" "}
//                     <imgf
//                       src="images/doc1.jpg"
//                       className="img-responsive"
//                       alt=""
//                     />{" "}
//                   </div>
//                   <div className="diff_right">
//                     <h5>Andrew Wilkins</h5>
//                     <h6>Managing Director, Yess Company</h6>{" "}
//                   </div>
//                   <div className="clearfix" />
//                 </div>
//               </div>
//             </div>
//             <div className="item">
//               <div className="diff_box" data-uniform="true3">
//                 <div className="diff_inner">
//                   <div className="inverted">
//                     <img src="images/inverted.png" alt="" />{" "}
//                   </div>
//                   <div className="clearfix" />
//                   <p>
//                     I m totally unconvinced that two people can find a person
//                     they havent known previously, and become an effective co
//                     founder
//                   </p>
//                   <div className="clearfix" />
//                   <div className="diff_left">
//                     {" "}
//                     <img
//                       src="images/doc2.jpg"
//                       className="img-responsive"
//                       alt=""
//                     />{" "}
//                   </div>
//                   <div className="diff_right">
//                     <h5>Andrew Wilkins</h5>
//                     <h6>Managing Director, Yess Company</h6>{" "}
//                   </div>
//                   <div className="clearfix" />
//                 </div>
//               </div>
//             </div>
//           </div> */}

//             </div>
//             <div className="clearfix" />
//           </div>
//           <div className="clearfix" />
//         </div>
//       </div>
//       <div className="container instructor_wrap">
//         <div className="row">
//           <div className="col-md-12 ins_top">
//             <h2>Our Founding Members</h2>
//             <p>
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry standard dummy text ever
//               since the 1500s, when an unknown printer took a galley of type and
//               scrambled
//             </p>
//           </div>
//           <div className="clearfix" />
//           <div className="col-md-4">
//             <div className="instruct_box">
//               {" "}
//               <img
//                 src="images/t1.jpg"
//                 className="img-responsive center-block"
//                 alt=""
//               />
//               <h3>Deborah Holmes</h3>
//               <p>
//                 Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla
//                 pariatur. Excepteur sint occaecat cupidatat voluptas.
//               </p>{" "}
//               <a href="#" className="btn btn_new2">
//                 View Profile
//               </a>{" "}
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="instruct_box">
//               {" "}
//               <img
//                 src="images/t2.jpg"
//                 className="img-responsive center-block"
//                 alt=""
//               />
//               <h3>Bruce Stevens</h3>
//               <p>
//                 Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla
//                 pariatur. Excepteur sint occaecat cupidatat voluptas.
//               </p>{" "}
//               <a href="#" className="btn btn_new2">
//                 View Profile
//               </a>{" "}
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="instruct_box">
//               {" "}
//               <img
//                 src="images/t3.jpg"
//                 className="img-responsive center-block"
//                 alt=""
//               />
//               <h3>Michelle Baker</h3>
//               <p>
//                 Duis aute irure dolor in velit esse cillum dolore eu fugiat nulla
//                 pariatur. Excepteur sint occaecat cupidatat voluptas.
//               </p>{" "}
//               <a href="#" className="btn btn_new2">
//                 View Profile
//               </a>{" "}
//             </div>
//           </div>
//           <div className="clearfix" />
//         </div>
//         <div className="clearfix" />
//       </div>
//       <div className="join_com">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12">
//               <h2>Join the Global Academy of Doctorates</h2>
//               <p>
//                 Enter your email address to register to our newsletter subscription
//                 delivered on regular basis!{" "}
//               </p>
//               <div className="clearfix" />
//               <div className="row">
//                 <div className="col-md-8 col-md-offset-2 mid_input">
//                   <div className="form-group">
//                     <input
//                       type="email"
//                       className="form-control"
//                       id="email"
//                       placeholder="Enter your email.."
//                     />{" "}
//                   </div>
//                 </div>
//                 <div className="clearfix" />
//                 <button className="btn btn_new1">Join</button>
//               </div>
//               <div className="clearfix" />
//               <div className="clearfix" />
//             </div>
//             <div className="clearfix" />
//           </div>
//           <div className="clearfix" />
//         </div>
//       </div>
//       <footer>
//         <div className="container">
//           <div className="row footer3">
//             <div className="col-md-4 first_footer">
//               <a href="#">
//                 <img
//                   src="images/footer_logo.jpg"
//                   className="img-responsive"
//                   alt=""
//                 />{" "}
//               </a>
//             </div>
//             <div className="col-md-2">
//               <div className="app_lower">
//                 <ul>
//                   <li>
//                     <a href="#">Home</a>
//                   </li>
//                   <li>
//                     <a href="#">About Us</a>
//                   </li>
//                   <li>
//                     <a href="#">Objectives</a>
//                   </li>
//                   <li>
//                     <a href="#">Activites</a>
//                   </li>
//                   <li>
//                     <a href="#">WDD</a>
//                   </li>
//                   <li>
//                     <a href="#">Conference</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="col-md-2">
//               <ul>
//                 <li>
//                   <a href="#">Gallery</a>
//                 </li>
//                 <li>
//                   <a href="#">Publication</a>
//                 </li>
//                 <li>
//                   <a href="#">Member</a>
//                 </li>
//                 <li>
//                   <a href="#">Contact Us</a>
//                 </li>
//               </ul>
//             </div>
//             <div className="col-md-4 footer_right">
//               <h4>Join in global register of doctorates</h4>{" "}
//               <a href="#" className="btn btn_new2">
//                 CLICK HERE
//               </a>{" "}
//             </div>
//           </div>
//           <div className="row footer4">
//             <div className="col-md-12 text-center">
//               <p>Copyright © 2023 Global Academy. All Rights Reserved</p>
//             </div>
//           </div>
//         </div>
//       </footer>
//       <div className="desk_footer" data-toggle="modal">
//         <ul>
//           <li>
//             <a href="#">
//               <div className="icon_div">
//                 {" "}
//                 <i className="las la-search" /> <span>Search</span>{" "}
//               </div>
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               <div className="icon_div">
//                 {" "}
//                 <i className="las la-user" /> <span>Join As Member</span>{" "}
//               </div>
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               <div className="icon_div">
//                 {" "}
//                 <i className="las la-sign-in-alt" /> <span>Login</span>{" "}
//               </div>
//             </a>
//           </li>
//         </ul>
//       </div>
//       <div className="modal fade advert_modal" id="myModal_login" role="dialog">
//         <div className="modal-dialog">
//           {/* Modal content*/}
//           <div className="modal-content">
//             <div className="modal-header">
//               <button type="button" className="close" data-dismiss="modal">
//                 ×
//               </button>
//             </div>
//             <div className="modal-body">
//               <div className="login_wrap login_box">
//                 <ul className="nav nav-pills nav-justified">
//                   <li className="active">
//                     <a data-toggle="pill" href="#customer">
//                       Login
//                     </a>
//                   </li>
//                   <li>
//                     <a data-toggle="pill" href="#agency">
//                       Register
//                     </a>
//                   </li>
//                 </ul>
//                 <div className="tab-content">
//                   <div id="customer" className="tab-pane fade in active">
//                     <form action="/action_page.php" className="form_div_outer2">
//                       <div className="form-group">
//                         <label htmlFor="email">Email address:</label>
//                         <input
//                           type="email"
//                           className="form-control"
//                           id="email"
//                         />{" "}
//                       </div>
//                       <div className="form-group">
//                         <label htmlFor="email">Phone:</label>
//                         <input
//                           type="email"
//                           className="form-control"
//                           id="email"
//                         />{" "}
//                       </div>
//                       <div className="form-group">
//                         <label htmlFor="pwd">Password:</label>
//                         <input
//                           type="password"
//                           className="form-control"
//                           id="pwd"
//                         />{" "}
//                       </div>{" "}
//                       <a
//                         href="javascript:void(0);"
//                         className="forgot"
//                         data-toggle="collapse"
//                         data-target="#fgot2"
//                       >
//                         Forgot Password?
//                       </a>
//                       <div id="fgot2" className="collapse">
//                         <h6>
//                           We shall send a re-activation link to your email address
//                         </h6>
//                         <div className="form-group">
//                           <input
//                             type="text"
//                             className="form-control"
//                             placeholder="Enter Email Address"
//                           />{" "}
//                         </div>
//                         <button className="btn btn_new1">Submit</button>
//                       </div>
//                       <div className="checkbox">
//                         <label>
//                           <input type="checkbox" /> Stay Logged In
//                         </label>
//                       </div>
//                       <div className="login_lower">
//                         <button type="submit" className="btn btn_new1">
//                           Submit
//                         </button>
//                       </div>
//                     </form>
//                     <div className="clearfix" />
//                     <div className="reg_link">
//                       <p>
//                         If you dont have any account then register here -{" "}
//                         <a href="#agency" className="link-to-tab">
//                           Register
//                         </a>
//                       </p>
//                     </div>
//                   </div>
//                   <div id="agency" className="tab-pane fade">
//                     <form action="/action_page.php" className="form_div_outer2">
//                       <div className="form-group">
//                         <label htmlFor="email">Name:</label>
//                         <input
//                           type="email"
//                           className="form-control"
//                           id="email"
//                         />{" "}
//                       </div>
//                       <div className="form-group">
//                         <label htmlFor="email">Email address:</label>
//                         <input
//                           type="email"
//                           className="form-control"
//                           id="email"
//                         />{" "}
//                       </div>
//                       <div className="form-group">
//                         <label htmlFor="email">Phone:</label>
//                         <input
//                           type="email"
//                           className="form-control"
//                           id="phone"
//                         />{" "}
//                       </div>
//                       <div className="form-group">
//                         <label htmlFor="pwd">Password:</label>
//                         <input
//                           type="password"
//                           className="form-control"
//                           id="pwd"
//                         />{" "}
//                       </div>
//                       <div className="form-group">
//                         <label htmlFor="pwd">Confirm Password:</label>
//                         <input
//                           type="password"
//                           className="form-control"
//                           id="pwd"
//                         />{" "}
//                       </div>
//                       <div className="login_lower">
//                         <button type="submit" className="btn btn_new1">
//                           Submit
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//                 <div className="clearfix" />
//               </div>
//               <div className="clearfix" />
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn_new1" data-dismiss="modal">
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>



//     </>

//   );
// }

// export default Mainpage;