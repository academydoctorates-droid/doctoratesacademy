"use client";

import { Button } from "@mui/material";
import Link from "next/link";
import { Footer } from "../components/Footer";
import GdaVideoSession from "../components/gdaVideoSession";
import Genesis from "../components/genesis";
import Header from "../components/header";
import CustomHeader from "../components/mobileHeader";
import WoodenFrame3 from "../components/WoodenFrame3";

const page = () => {
  return (
    <>
      {/* Hello world */}
      {/* <Header /> */}
      <div className="header-container">
        <Header />
      </div>
      <div className="mobile-header-container">
        <CustomHeader />
      </div>

      <div>
        {/* <div className="myheader">
          <div className="wrap2 navbar-custom navbar-fixed-top">
            <div className="container">
              <div className="row">
                <div className="col-md-2 logo_div wow fadeIn">
                  <a href="index.html">
                    <img
                      src="images/logo.png"
                      className="img-responsive"
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-md-10">
                  <div className="row">
                    <div className="col-md-5 col-md-offset-4">
                      <div className="slider_form">
                        <span className="search">
                          <input placeholder="Search here" />
                          <button>
                            <span className="large_text" />
                            <span className="small_text">
                              <i className="las la-search" />
                            </span>
                          </button>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-3 top_right_btns">
                      <a href="#" className="btn btn_new1">
                        Join as Member
                      </a>
                      <a href="#" className="btn btn_new2">
                        Login
                      </a>
                    </div>
                  </div>
                  <div className="droopmenu-navbar">
                    <div className="droopmenu-inner">
                      <div className="droopmenu-header">
                        <a
                          href="#"
                          className="droopmenu-brand visible-sm visible-xs"
                        >
                          <img
                            src="images/logo.png"
                            className="img-responsive center-block"
                            alt=""
                          />
                        </a>
                        <a href="#" className="droopmenu-toggle" />
                      </div>
                     
                      <div className="droopmenu-nav">
                        <ul className="droopmenu">
                          <li>
                            <a href="index.html">Home</a>
                          </li>
                          <li>
                            <a href="about.html">About Us</a>
                          </li>
                          <li>
                            <a href="objectives.html">Objectives</a>
                          </li>
                          <li>
                            <a href="#">Activities</a>
                          </li>
                          <li>
                            <a href="#">WDD</a>
                          </li>
                          <li>
                            <a href="#">Conference</a>
                          </li>
                          <li>
                            <a href="gallery.html">Gallery</a>
                          </li>
                          <li>
                            <a href="#">Publication</a>
                          </li>
                          <li>
                            <a href="#">Member</a>
                          </li>
                        </ul>
                      </div>
                   
                    </div>
                 
                  </div>
                  
                </div>
              </div>
              <div className="clearfix" />
            </div>
          </div>
        </div> */}
        <div className="top_banner margin_adjust2">
          <div className="top_banner_pic">
            <img
              src="images/wddimage.png"
              className="img-responsive center-block mob_hidden"
              alt=""
            />
            <img
              src="images/about-us-header.jpg"
              className="img-responsive center-block mob_pic1"
              alt=""
            />
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="fos_outer">
                    <div className="fos_text">
                      <div className="fos_padding">
                        <h1>
                          <span>World Doctorates Day</span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <WoodenFrame2/> */}

        <Genesis />
        <br />
        <WoodenFrame3 />
        <div className="history_wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-12 service_heading">
                <h2 style={{ fontWeight: "bolder" }}>World Doctorates Day</h2>
                <p style={{ fontSize: "20px" }}>
                  The “Global Academy of Doctorates” is an International
                  academic organization of accomplished people having highest
                  university degrees (Ph.D. or equivalent) in all fields of
                  studies. This Professional group was initially launched on
                  March 7, 2012 and currently enrolled more than 5000 members
                  from 55 countries. The main idea behind creation of this
                  Global Academy is to offer a global platform to all members to
                  share their experiences and to network as a powerful academic
                  body for social good. The Academy will also recognize its
                  members for their outstanding contributions in various fields
                  by nominating them as Fellows of the Academy. To earn a
                  doctorate is a matter of pride. All of You are great
                  achievers. You belong to an exclusive group of academicians
                  holding the highest university degree. One has to perform an
                  exciting journey in order to earn a doctorate. It may be
                  rough, bumpy, dark, lonely but at times thrilling and
                  rewarding. I feel that the Ph.D. is not merely a degree, but
                  it is a process that equips us with skills to deal gainfully
                  with difficult situations in life. Records show that the first
                  Ph.D. was awarded to a woman: Lady Elena Lucrezia
                  Cornaro-Piscopia of Italy in 1678. Evidence shows that even
                  before this Nalanda University in ancient India was awarding
                  doctorates degree in several subjects. Over centauries
                  millions of doctorates degrees have been awarded. On an
                  average about 45-50 thousand Ph.D.s are awarded in USA every
                  year. China also produces 50 thousand doctorates annually
                  whereas in India about 40 thousand obtain doctorates every
                  year. Today, at least 15-20 million doctorates live and work
                  in the world.
                </p>
                {/* <p>
                  Plusieurs variations de Lorem Ipsum peuvent être trouvées ici
                  ou là, mais la majeure partie d'entre elles a été altérée par
                  l'addition d'humour ou de mots aléatoires qui ne ressemblent
                  pas une seconde à du texte standard. Si vous voulez utiliser
                  un passage du Lorem Ipsum, vous devez être sûr qu'il n'y a
                  rien d'embarrassant caché dans le texte. Plusieurs variations
                  de Lorem Ipsum peuvent être trouvées ici ou là, mais la
                  majeure partie d'entre elles a été altérée par l'addition
                  d'humour ou de mots aléatoires qui ne ressemblent pas une
                  seconde à du texte standard. Si vous voulez utiliser un
                  passage du Lorem Ipsum, vous devez être sûr qu'il n'y a rien
                  d'embarrassant caché dans le texte.
                </p> */}
              </div>
              <div className="col-md-12">
                <ul className="timeline">
                  <li className="timeline-inverted">
                    <div className="timeline-badge danger">2023</div>
                    <div className="timeline-panel">
                      <div className="panel panel-default">
                        <div className="panel-heading n_head">
                          <h3>World Doctorates Day 2023 Speech</h3>
                        </div>
                        <div className="clearfix" />
                        <div className="panel-body n_body">
                          {/* <p>
                            On sait depuis longtemps que travailler avec du
                            texte lisible et contenant du sens est source de
                            distractions, et empêche de se concentrer sur la
                            mise en page elle-même. L'avantage du Lorem Ipsum
                            sur un texte générique comme.
                          </p>
                          <ul>
                            <li>
                              Plusieurs variations de Lorem Ipsum peuvent être
                              trouvées ici ou là, mais la majeure partie d'entre
                              elles a été altérée par l'addition d'humour ou de
                              mots aléatoires
                            </li>
                            <li>
                              Plusieurs variations de Lorem Ipsum peuvent être
                              trouvées ici ou là, mais la majeure partie d'entre
                              elles a été altérée par l'addition d'humour ou de
                              mots aléatoires
                            </li>
                          </ul> */}
                          <div className="clearfix" />
                          <div>
                            <video
                              // autoPlay
                              loop
                              playsInline
                              style={{ width: "100%", height: "auto" }}
                              controls={true}
                            >
                              <source src="/vid.mp4" type="video/mp4" />
                            </video>
                            <Button
                              variant="contained"
                              style={{
                                display: "flex",
                                justifyContent: "flex-end",
                              }}
                            >
                              YouTube
                            </Button>
                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="timeline-inverted">
                    <div className="timeline-badge danger">2023</div>
                    <div className="timeline-panel">
                      <div className="panel panel-default">
                        <div className="panel-heading n_head">
                          <h3>WDD Conference 2023</h3>
                        </div>
                        <div className="clearfix" />
                        <div className="panel-body n_body">
                          {/* <p>
                            On sait depuis longtemps que travailler avec du
                            texte lisible et contenant du sens est source de
                            distractions, et empêche de se concentrer sur la
                            mise en page elle-même. L'avantage du Lorem Ipsum
                            sur un texte générique comme.
                          </p>
                          <ul>
                            <li>
                              Plusieurs variations de Lorem Ipsum peuvent être
                              trouvées ici ou là, mais la majeure partie d'entre
                              elles a été altérée par l'addition d'humour ou de
                              mots aléatoires
                            </li>
                            <li>
                              Plusieurs variations de Lorem Ipsum peuvent être
                              trouvées ici ou là, mais la majeure partie d'entre
                              elles a été altérée par l'addition d'humour ou de
                              mots aléatoires
                            </li>
                          </ul> */}
                          <div className="clearfix" />
                          <div className="row">
                            <div className="col-md-3 col-sm-4 col-xs-6">
                              <div className="gallery_box">
                                <div className="cpl_image cpl_new">
                                  <a
                                    href="images/wdd/2019/1.JPG"
                                    data-fancybox="images"
                                  >
                                    <img
                                      src="images/wdd/2019/1.JPG"
                                      className="img-responsive center-block image_size"
                                      alt=""
                                    />
                                    <div className="pro_plus">
                                      <img
                                        src="images/plus.png"
                                        className="img-responsive"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-6">
                              <div className="gallery_box">
                                <div className="cpl_image cpl_new">
                                  <a
                                    href="images/wdd/2019/2.JPG"
                                    data-fancybox="images"
                                  >
                                    <img
                                      src="images/wdd/2019/2.JPG"
                                      className="img-responsive center-block image_size"
                                      alt=""
                                    />
                                    <div className="pro_plus">
                                      <img
                                        src="images/plus.png"
                                        className="img-responsive"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-6">
                              <div className="gallery_box">
                                <div className="cpl_image cpl_new">
                                  <a
                                    href="images/wdd/2019/3.JPG"
                                    data-fancybox="images"
                                  >
                                    <img
                                      src="images/wdd/2019/3.JPG"
                                      className="img-responsive center-block image_size"
                                      alt=""
                                    />
                                    <div className="pro_plus">
                                      <img
                                        src="images/plus.png"
                                        className="img-responsive"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-6">
                              <div className="gallery_box">
                                <div className="cpl_image cpl_new">
                                  <a
                                    href="images/wdd/2019/4.JPG"
                                    data-fancybox="images"
                                  >
                                    <img
                                      src="images/wdd/2019/4.JPG"
                                      className="img-responsive center-block image_size"
                                      alt=""
                                    />
                                    <div className="pro_plus">
                                      <img
                                        src="images/plus.png"
                                        className="img-responsive"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "flex-end",
                                      marginTop: "10px",
                                    }}
                                  >
                                    {" "}
                                    <Link
                                      //   href="/imagegallery/2019"
                                      href="/imagegallery/[year]"
                                      as="/imagegallery/2023"
                                      className="btn btn_new2"
                                    >
                                      View All
                                    </Link>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="clearfix" />
                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="timeline-inverted">
                    <div className="timeline-badge danger">2021</div>
                    <div className="timeline-panel">
                      <div className="panel panel-default">
                        <div className="panel-heading n_head">
                          <h3>WDD Conference 2021</h3>
                        </div>
                        <div className="clearfix" />
                        <div className="panel-body n_body">
                          {/* <p>
                            On sait depuis longtemps que travailler avec du
                            texte lisible et contenant du sens est source de
                            distractions, et empêche de se concentrer sur la
                            mise en page elle-même. L'avantage du Lorem Ipsum
                            sur un texte générique comme.
                          </p>
                          <ul>
                            <li>
                              Plusieurs variations de Lorem Ipsum peuvent être
                              trouvées ici ou là, mais la majeure partie d'entre
                              elles a été altérée par l'addition d'humour ou de
                              mots aléatoires
                            </li>
                            <li>
                              Plusieurs variations de Lorem Ipsum peuvent être
                              trouvées ici ou là, mais la majeure partie d'entre
                              elles a été altérée par l'addition d'humour ou de
                              mots aléatoires
                            </li>
                          </ul> */}
                          <div className="clearfix" />
                          <div className="row">
                            <div className="col-md-3 col-sm-4 col-xs-6">
                              <div className="gallery_box">
                                <div className="cpl_image cpl_new">
                                  <a
                                    href="images/wdd/2021/1.JPG"
                                    data-fancybox="images"
                                  >
                                    <img
                                      src="images/wdd/2021/1.JPG"
                                      className="img-responsive center-block image_size"
                                      alt=""
                                    />
                                    <div className="pro_plus">
                                      <img
                                        src="images/plus.png"
                                        className="img-responsive"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-6">
                              <div className="gallery_box">
                                <div className="cpl_image cpl_new">
                                  <a
                                    href="images/wdd/2021/2.JPG"
                                    data-fancybox="images"
                                  >
                                    <img
                                      src="images/wdd/2021/2.JPG"
                                      className="img-responsive center-block image_size"
                                      alt=""
                                    />
                                    <div className="pro_plus">
                                      <img
                                        src="images/plus.png"
                                        className="img-responsive"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-6">
                              <div className="gallery_box">
                                <div className="cpl_image cpl_new">
                                  <a
                                    href="images/wdd/2021/3.JPG"
                                    data-fancybox="images"
                                  >
                                    <img
                                      src="images/wdd/2021/3.JPG"
                                      className="img-responsive center-block image_size"
                                      alt=""
                                    />
                                    <div className="pro_plus">
                                      <img
                                        src="images/plus.png"
                                        className="img-responsive"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-6">
                              <div className="gallery_box">
                                <div className="cpl_image cpl_new">
                                  <a
                                    href="images/wdd/2021/4.JPG"
                                    data-fancybox="images"
                                  >
                                    <img
                                      src="images/wdd/2021/4.JPG"
                                      className="img-responsive center-block image_size"
                                      alt=""
                                    />
                                    <div className="pro_plus">
                                      <img
                                        src="images/plus.png"
                                        className="img-responsive"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "flex-end",
                                      marginTop: "10px",
                                    }}
                                  >
                                    {" "}
                                    <Link
                                      //   href="/imagegallery/2019"
                                      href="/imagegallery/[year]"
                                      as="/imagegallery/2021"
                                      className="btn btn_new2"
                                    >
                                      View All
                                    </Link>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="clearfix" />
                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="timeline-inverted">
                    <div className="timeline-badge danger">2019</div>
                    <div className="timeline-panel">
                      <div className="panel panel-default">
                        <div className="panel-heading n_head">
                          <h3>WDD Conference 2019</h3>
                        </div>
                        <div className="clearfix" />
                        <div className="panel-body n_body">
                          {/* <p>
                            On sait depuis longtemps que travailler avec du
                            texte lisible et contenant du sens est source de
                            distractions, et empêche de se concentrer sur la
                            mise en page elle-même. L'avantage du Lorem Ipsum
                            sur un texte générique comme.
                          </p>
                          <ul>
                            <li>
                              Plusieurs variations de Lorem Ipsum peuvent être
                              trouvées ici ou là, mais la majeure partie d'entre
                              elles a été altérée par l'addition d'humour ou de
                              mots aléatoires
                            </li>
                            <li>
                              Plusieurs variations de Lorem Ipsum peuvent être
                              trouvées ici ou là, mais la majeure partie d'entre
                              elles a été altérée par l'addition d'humour ou de
                              mots aléatoires
                            </li>
                          </ul> */}
                          <div className="clearfix" />
                          <div className="row">
                            <div className="col-md-3 col-sm-4 col-xs-6">
                              <div className="gallery_box">
                                <div className="cpl_image cpl_new">
                                  <a
                                    href="images/wdd/2019/1.JPG"
                                    data-fancybox="images"
                                  >
                                    <img
                                      src="images/wdd/2019/1.JPG"
                                      className="img-responsive center-block image_size"
                                      alt=""
                                    />
                                    <div className="pro_plus">
                                      <img
                                        src="images/plus.png"
                                        className="img-responsive"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-6">
                              <div className="gallery_box">
                                <div className="cpl_image cpl_new">
                                  <a
                                    href="images/wdd/2019/2.JPG"
                                    data-fancybox="images"
                                  >
                                    <img
                                      src="images/wdd/2019/2.JPG"
                                      className="img-responsive center-block image_size"
                                      alt=""
                                    />
                                    <div className="pro_plus">
                                      <img
                                        src="images/plus.png"
                                        className="img-responsive"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-6">
                              <div className="gallery_box">
                                <div className="cpl_image cpl_new">
                                  <a
                                    href="images/wdd/2019/3.JPG"
                                    data-fancybox="images"
                                  >
                                    <img
                                      src="images/wdd/2019/3.JPG"
                                      className="img-responsive center-block image_size"
                                      alt=""
                                    />
                                    <div className="pro_plus">
                                      <img
                                        src="images/plus.png"
                                        className="img-responsive"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-6">
                              <div className="gallery_box">
                                <div className="cpl_image cpl_new">
                                  <a
                                    href="images/wdd/2019/4.JPG"
                                    data-fancybox="images"
                                  >
                                    <img
                                      src="images/wdd/2019/4.JPG"
                                      className="img-responsive center-block image_size"
                                      alt=""
                                    />
                                    <div className="pro_plus">
                                      <img
                                        src="images/plus.png"
                                        className="img-responsive"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "flex-end",
                                      marginTop: "10px",
                                    }}
                                  >
                                    {" "}
                                    <Link
                                      //   href="/imagegallery/2019"
                                      href="/imagegallery/[year]"
                                      as="/imagegallery/2019"
                                      className="btn btn_new2"
                                    >
                                      View All
                                    </Link>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="clearfix" />
                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="timeline-inverted">
                    <div className="timeline-badge danger">2017</div>
                    <div className="timeline-panel">
                      <div className="panel panel-default">
                        <div className="panel-heading n_head">
                          <h3>WDD Conference 2017</h3>
                        </div>
                        <div className="clearfix" />
                        <div className="panel-body n_body">
                          {/* <p>
                            On sait depuis longtemps que travailler avec du
                            texte lisible et contenant du sens est source de
                            distractions, et empêche de se concentrer sur la
                            mise en page elle-même. L'avantage du Lorem Ipsum
                            sur un texte générique comme.
                          </p>
                          <ul>
                            <li>
                              Plusieurs variations de Lorem Ipsum peuvent être
                              trouvées ici ou là, mais la majeure partie d'entre
                              elles a été altérée par l'addition d'humour ou de
                              mots aléatoires
                            </li>
                            <li>
                              Plusieurs variations de Lorem Ipsum peuvent être
                              trouvées ici ou là, mais la majeure partie d'entre
                              elles a été altérée par l'addition d'humour ou de
                              mots aléatoires
                            </li>
                          </ul> */}
                          <div className="clearfix" />
                          <div className="row">
                            <div className="col-md-3 col-sm-4 col-xs-6">
                              <div className="gallery_box">
                                <div className="cpl_image cpl_new">
                                  <a
                                    href="images/wdd/2017/DSC_9367.JPG"
                                    data-fancybox="images"
                                  >
                                    <img
                                      src="images/wdd/2017/DSC_9367.JPG"
                                      className="img-responsive center-block image_size"
                                      alt=""
                                    />
                                    <div className="pro_plus">
                                      <img
                                        src="images/plus.png"
                                        className="img-responsive"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-6">
                              <div className="gallery_box">
                                <div className="cpl_image cpl_new">
                                  <a
                                    href="images/wdd/2017/DSC_9371.JPG"
                                    data-fancybox="images"
                                  >
                                    <img
                                      src="images/wdd/2017/DSC_9371.JPG"
                                      className="img-responsive center-block image_size"
                                      alt=""
                                    />
                                    <div className="pro_plus">
                                      <img
                                        src="images/plus.png"
                                        className="img-responsive"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-6">
                              <div className="gallery_box">
                                <div className="cpl_image cpl_new">
                                  <a
                                    href="images/wdd/2017/DSC_9373.JPG"
                                    data-fancybox="images"
                                  >
                                    <img
                                      src="images/wdd/2017/DSC_9373.JPG"
                                      className="img-responsive center-block image_size"
                                      alt=""
                                    />
                                    <div className="pro_plus">
                                      <img
                                        src="images/plus.png"
                                        className="img-responsive"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-6">
                              <div className="gallery_box">
                                <div className="cpl_image cpl_new">
                                  <a
                                    href="images/wdd/2019/DSC_9374.JPG"
                                    data-fancybox="images"
                                  >
                                    <img
                                      src="images/wdd/2017/DSC_9374.JPG"
                                      className="img-responsive center-block image_size"
                                      alt=""
                                    />
                                    <div className="pro_plus">
                                      <img
                                        src="images/plus.png"
                                        className="img-responsive"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "flex-end",
                                      marginTop: "10px",
                                    }}
                                  >
                                    {" "}
                                    <Link
                                      //   href="/imagegallery/2019"
                                      href="/imagegallery/[year]"
                                      as="/imagegallery/2017"
                                      className="btn btn_new2"
                                    >
                                      View All
                                    </Link>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="clearfix" />
                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="timeline-inverted">
                    <div className="timeline-badge danger">2016</div>
                    <div className="timeline-panel">
                      <div className="panel panel-default">
                        <div className="panel-heading n_head">
                          <h3>WDD Conference 2016</h3>
                        </div>
                        <div className="clearfix" />
                        <div className="panel-body n_body">
                          {/* <p>
                            On sait depuis longtemps que travailler avec du
                            texte lisible et contenant du sens est source de
                            distractions, et empêche de se concentrer sur la
                            mise en page elle-même. L'avantage du Lorem Ipsum
                            sur un texte générique comme.
                          </p>
                          <ul>
                            <li>
                              Plusieurs variations de Lorem Ipsum peuvent être
                              trouvées ici ou là, mais la majeure partie d'entre
                              elles a été altérée par l'addition d'humour ou de
                              mots aléatoires
                            </li>
                            <li>
                              Plusieurs variations de Lorem Ipsum peuvent être
                              trouvées ici ou là, mais la majeure partie d'entre
                              elles a été altérée par l'addition d'humour ou de
                              mots aléatoires
                            </li>
                          </ul> */}
                          <div className="clearfix" />
                          <div className="row">
                            <div className="col-md-3 col-sm-4 col-xs-6">
                              <div className="gallery_box">
                                <div className="cpl_image cpl_new">
                                  <a
                                    href="images/wdd/2016/1.jpg"
                                    data-fancybox="images"
                                  >
                                    <img
                                      src="images/wdd/2016/1.jpg"
                                      className="img-responsive center-block image_size"
                                      alt=""
                                    />
                                    <div className="pro_plus">
                                      <img
                                        src="images/plus.png"
                                        className="img-responsive"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-6">
                              <div className="gallery_box">
                                <div className="cpl_image cpl_new">
                                  <a
                                    href="images/wdd/2016/2.jpg"
                                    data-fancybox="images"
                                  >
                                    <img
                                      src="images/wdd/2016/2.jpg"
                                      className="img-responsive center-block image_size"
                                      alt=""
                                    />
                                    <div className="pro_plus">
                                      <img
                                        src="images/plus.png"
                                        className="img-responsive"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-6">
                              <div className="gallery_box">
                                <div className="cpl_image cpl_new">
                                  <a
                                    href="images/wdd/2016/3.jpg"
                                    data-fancybox="images"
                                  >
                                    <img
                                      src="images/wdd/2016/3.jpg"
                                      className="img-responsive center-block image_size"
                                      alt=""
                                    />
                                    <div className="pro_plus">
                                      <img
                                        src="images/plus.png"
                                        className="img-responsive"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-6">
                              <div className="gallery_box">
                                <div className="cpl_image cpl_new">
                                  <a
                                    href="images/wdd/2016/4.jpg"
                                    data-fancybox="images"
                                  >
                                    <img
                                      src="images/wdd/2016/4.jpg"
                                      className="img-responsive center-block image_size"
                                      alt=""
                                    />
                                    <div className="pro_plus">
                                      <img
                                        src="images/plus.png"
                                        className="img-responsive"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "flex-end",
                                      marginTop: "10px",
                                    }}
                                  >
                                    {" "}
                                    <Link
                                      href="/imagegallery/[year]"
                                      as="/imagegallery/2016"
                                      className="btn btn_new2"
                                    >
                                      View All
                                    </Link>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="clearfix" />
                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="timeline-inverted">
                    <div className="timeline-badge danger">2013</div>
                    <div className="timeline-panel">
                      <div className="panel panel-default">
                        <div className="panel-heading n_head">
                          <h3>WDD Conference 2013</h3>
                        </div>
                        <div className="clearfix" />
                        <div className="panel-body n_body">
                          {/* <p>
                            On sait depuis longtemps que travailler avec du
                            texte lisible et contenant du sens est source de
                            distractions, et empêche de se concentrer sur la
                            mise en page elle-même. L'avantage du Lorem Ipsum
                            sur un texte générique comme.
                          </p>
                          <ul>
                            <li>
                              Plusieurs variations de Lorem Ipsum peuvent être
                              trouvées ici ou là, mais la majeure partie d'entre
                              elles a été altérée par l'addition d'humour ou de
                              mots aléatoires
                            </li>
                            <li>
                              Plusieurs variations de Lorem Ipsum peuvent être
                              trouvées ici ou là, mais la majeure partie d'entre
                              elles a été altérée par l'addition d'humour ou de
                              mots aléatoires
                            </li>
                          </ul> */}
                          <div className="clearfix" />
                          <div className="row">
                            <div className="col-md-3 col-sm-4 col-xs-6">
                              <div className="gallery_box">
                                <div className="cpl_image cpl_new">
                                  <a
                                    href="images/wdd/2013/1.jpg"
                                    data-fancybox="images"
                                  >
                                    <img
                                      src="images/wdd/2013/1.jpg"
                                      className="img-responsive center-block image_size"
                                      alt=""
                                    />
                                    <div className="pro_plus">
                                      <img
                                        src="images/plus.png"
                                        className="img-responsive"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-6">
                              <div className="gallery_box">
                                <div className="cpl_image cpl_new">
                                  <a
                                    href="images/wdd/2013/2.jpg"
                                    data-fancybox="images"
                                  >
                                    <img
                                      src="images/wdd/2013/2.jpg"
                                      className="img-responsive center-block image_size"
                                      alt=""
                                    />
                                    <div className="pro_plus">
                                      <img
                                        src="images/plus.png"
                                        className="img-responsive"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-6">
                              <div className="gallery_box">
                                <div className="cpl_image cpl_new">
                                  <a
                                    href="images/wdd/2013/3.jpg"
                                    data-fancybox="images"
                                  >
                                    <img
                                      src="images/wdd/2013/3.jpg"
                                      className="img-responsive center-block image_size"
                                      alt=""
                                    />
                                    <div className="pro_plus">
                                      <img
                                        src="images/plus.png"
                                        className="img-responsive"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-6">
                              <div className="gallery_box">
                                <div className="cpl_image cpl_new">
                                  <a
                                    href="images/wdd/2013/4.jpg"
                                    data-fancybox="images"
                                  >
                                    <img
                                      src="images/wdd/2013/4.jpg"
                                      className="img-responsive center-block image_size"
                                      alt=""
                                    />
                                    <div className="pro_plus">
                                      <img
                                        src="images/plus.png"
                                        className="img-responsive"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "flex-end",
                                      marginTop: "10px",
                                    }}
                                  >
                                    {" "}
                                    <Link
                                      //   href="/imagegallery/2013"
                                      href="/imagegallery/[year]"
                                      as="/imagegallery/2013"
                                      className="btn btn_new2"
                                    >
                                      View All
                                    </Link>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="clearfix" />
                          </div>
                          <div className="clearfix" />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container">
          <div className="row">
            <div className="col-md-12 service_heading">
              <h2>Chapters</h2>
              <p>
                Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou
                là, mais la majeure partie d'entre elles a été altérée par
                l'addition d'humour ou de mots aléatoires qui ne ressemblent pas
                une seconde à du texte standard. Si vous voulez utiliser un
                passage du Lorem Ipsum, vous devez être sûr qu'il n'y a rien
                d'embarrassant caché dans le texte. Plusieurs variations de
                Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure
                partie d'entre elles a été altérée par l'addition d'humour ou de
                mots aléatoires qui ne ressemblent pas une seconde à du texte
                standard. Si vous voulez utiliser un passage du Lorem Ipsum,
                vous devez être sûr qu'il n'y a rien d'embarrassant caché dans
                le texte.
              </p>
            </div>
            <div className="col-md-12">
              <div className="info_bottom2">
                <ul className="nav nav-tabs">
                  <li className="active">
                    <a data-toggle="tab" href="#home">
                      Sydney Chapter
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#menu1">
                      Perth Chapter
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#menu2">
                      Adelaide Chapter
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#menu3">
                      Melbourne Chapter
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#menu4">
                      Canberra Chapter
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#menu5">
                      NewCastle Chapter
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div id="home" className="tab-pane fade in active">
                    <div className="blue_box">
                      <p>
                        On sait depuis longtemps que travailler avec du texte
                        lisible et contenant du sens est source de distractions,
                        et empêche de se concentrer sur la mise en page
                        elle-même. L'avantage du Lorem Ipsum sur un texte
                        générique comme.On sait depuis longtemps que travailler
                        avec du texte lisible et contenant du sens est source de
                        distractions, et empêche de se concentrer sur la mise en
                        page elle-même. L'avantage du Lorem Ipsum sur un texte
                        générique comme.
                      </p>
                      <ul>
                        <li>
                          <i className="las la-check" />
                          <span>
                            Plusieurs variations de Lorem Ipsum peuvent être
                            trouvées ici ou là, mais la majeure partie d'entre
                            elles a été altérée par l'addition d'humour ou de
                            mots aléatoires
                          </span>
                        </li>
                        <li>
                          <i className="las la-check" />
                          <span>
                            Plusieurs variations de Lorem Ipsum peuvent être
                            trouvées ici ou là, mais la majeure partie d'entre
                            elles a été altérée par l'addition d'humour ou de
                            mots aléatoires
                          </span>
                        </li>
                        <li>
                          <i className="las la-check" />
                          <span>
                            Plusieurs variations de Lorem Ipsum peuvent être
                            trouvées ici ou là, mais la majeure partie d'entre
                            elles a été altérée par l'addition d'humour ou de
                            mots aléatoires
                          </span>
                        </li>
                        <li>
                          <i className="las la-check" />
                          <span>
                            Plusieurs variations de Lorem Ipsum peuvent être
                            trouvées ici ou là, mais la majeure partie d'entre
                            elles a été altérée par l'addition d'humour ou de
                            mots aléatoires
                          </span>
                        </li>
                      </ul>
                      <div className="clearfix" />
                      <div className="row">
                        <div className="col-md-3 col-sm-4 col-xs-6">
                          <div className="gallery_box">
                            <div className="cpl_image cpl_new">
                              <a href="images/tab1.jpg" data-fancybox="images">
                                <img
                                  src="images/tab1.jpg"
                                  className="img-responsive center-block image_size"
                                  alt=""
                                />
                                <div className="pro_plus">
                                  <img
                                    src="images/plus.png"
                                    className="img-responsive"
                                    alt=""
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-4 col-xs-6">
                          <div className="gallery_box">
                            <div className="cpl_image cpl_new">
                              <a href="images/pic3.jpg" data-fancybox="images">
                                <img
                                  src="images/pic3.jpg"
                                  className="img-responsive center-block image_size"
                                  alt=""
                                />
                                <div className="pro_plus">
                                  <img
                                    src="images/plus.png"
                                    className="img-responsive"
                                    alt=""
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-4 col-xs-6">
                          <div className="gallery_box">
                            <div className="cpl_image cpl_new">
                              <a href="images/pic1.jpg" data-fancybox="images">
                                <img
                                  src="images/pic1.jpg"
                                  className="img-responsive center-block image_size"
                                  alt=""
                                />
                                <div className="pro_plus">
                                  <img
                                    src="images/plus.png"
                                    className="img-responsive"
                                    alt=""
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-4 col-xs-6">
                          <div className="gallery_box">
                            <div className="cpl_image cpl_new">
                              <a href="images/pic2.jpg" data-fancybox="images">
                                <img
                                  src="images/pic2.jpg"
                                  className="img-responsive center-block image_size"
                                  alt=""
                                />
                                <div className="pro_plus">
                                  <img
                                    src="images/plus.png"
                                    className="img-responsive"
                                    alt=""
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="clearfix" />
                      </div>
                      <div className="clearfix" />
                      <div className="clearfix" />
                    </div>
                    <div className="clearfix" />
                  </div>
                  <div id="menu1" className="tab-pane fade">
                    <div className="blue_box">
                      <h4>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </h4>
                      <p>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book. It has survived not only five centuries, but also
                        the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                      </p>
                    </div>
                  </div>
                  <div id="menu2" className="tab-pane fade">
                    <div className="blue_box">
                      <h4>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </h4>
                      <p>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book. It has survived not only five centuries, but also
                        the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                      </p>
                    </div>
                  </div>
                  <div id="menu3" className="tab-pane fade">
                    <div className="blue_box">
                      <h4>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </h4>
                      <p>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book. It has survived not only five centuries, but also
                        the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                      </p>
                    </div>
                  </div>
                  <div id="menu4" className="tab-pane fade">
                    <div className="blue_box">
                      <h4>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </h4>
                      <p>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book. It has survived not only five centuries, but also
                        the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                      </p>
                    </div>
                  </div>
                  <div id="menu5" className="tab-pane fade">
                    <div className="blue_box">
                      <h4>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </h4>
                      <p>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book. It has survived not only five centuries, but also
                        the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="video_gallery_Wdd">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 style={{ textAlign: "center" }}>
                  GLOBAL ACADEMY OF DOCTORATES SESSION
                </h2>
                <div className="gallery_outer2">
                  <div id="" className="text-center">
                    <GdaVideoSession />
                  </div>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="clearfix" />
          </div>
        </div>

        {/* <div className="advantage_div adv_wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="service_heading2 wow fadeInUp">
                  <h2>Why Choose Us</h2>
                  <p>
                    On sait depuis longtemps que travailler avec du texte
                    lisible et contenant du sens est source de distractions, et
                    empêche de se concentrer sur la mise en page elle-même.
                    L'avantage du Lorem Ipsum sur un texte générique comme 'Du
                    texte. Du texte. Du texte.' est qu'il possède une
                    distribution de lettres plus ou moins normale, et en tout
                    cas comparable avec celle du français standard. On sait
                    depuis longtemps que travailler avec du texte lisible et
                    contenant du sens est source de distractions, et empêche de
                    se concentrer sur la mise en page elle-même. L'avantage du
                    Lorem Ipsum sur un texte générique comme 'Du texte.
                  </p>
                </div>
              </div>
            </div>
            <div className="row margin2">
              <div className="col-md-7 covid2 wow slideInLeft">
                <img
                  src="images/whychooseus.jpg"
                  className="img-responsive center-block"
                  alt=""
                />
              </div>
              <div className="col-md-5 m_v_div wow slideInRight">
                <div className="v_block">
                  <div className="v_block_left">
                    <img
                      src="images/mv2.png"
                      className="img-responsive center-block"
                      alt=""
                    />
                  </div>
                  <div className="v_block_right">
                    <h5>
                      <span>Our Mission</span>
                    </h5>
                    <p>
                      To create a dynamic pool of academicians with
                      trans-disciplinary vision in problem solving.{" "}
                    </p>
                  </div>
                  <div className="clearfix" />
                </div>
                <div className="v_block">
                  <div className="v_block_left">
                    <img
                      src="images/mv3.png"
                      className="img-responsive center-block"
                      alt=""
                    />
                  </div>
                  <div className="v_block_right">
                    <h5>
                      <span>Our Vision</span>
                    </h5>
                    <p>
                      To recognize academic talents and create a global network
                      and offer them ample opportunities for interaction with
                      Industry, Academia and the Government in contributing
                      towards socio-economic developments.
                    </p>
                    <p>
                      On sait depuis longtemps que travailler avec du texte
                      lisible et contenant du sens est source de distractions,
                      et empêche de se concentrer sur la mise en page elle-même.
                      L'avantage du Lorem Ipsum sur un texte générique comme 'Du
                      texte. Du texte. Du texte.' est qu'il possède une
                      distribution de lettres plus ou moins normale, et en tout
                      cas comparable avec celle du français standard.
                    </p>
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
              <div className="clearfix" />
            </div>
          </div>
        </div> */}
        {/* <div className="container instructor_wrap">
          <div className="row">
            <div className="col-md-12 ins_top">
              <h2>OUR FOUNDING MEMBERS</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </p>
            </div>
            <div className="clearfix" />
            <div className="col-md-4">
              <div className="instruct_box">
                <img
                  src="images/t1.jpg"
                  className="img-responsive center-block"
                  alt=""
                />
                <h3>Deborah Holmes</h3>
                <h6>Managing Director</h6>
                <p>
                  Duis aute irure dolor in velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat voluptas.
                </p>
                <a href="#" className="btn btn_new2">
                  View Profile
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="instruct_box">
                <img
                  src="images/t2.jpg"
                  className="img-responsive center-block"
                  alt=""
                />
                <h3>Bruce Stevens</h3>
                <h6>Marketing Head</h6>
                <p>
                  Duis aute irure dolor in velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat voluptas.
                </p>
                <a href="#" className="btn btn_new2">
                  View Profile
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="instruct_box">
                <img
                  src="images/t3.jpg"
                  className="img-responsive center-block"
                  alt=""
                />
                <h3>Michelle Baker</h3>
                <h6>Sales Head</h6>
                <p>
                  Duis aute irure dolor in velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat voluptas.
                </p>
                <a href="#" className="btn btn_new2">
                  View Profile
                </a>
              </div>
            </div>
            <div className="clearfix" />
          </div>
          <div className="clearfix" />
        </div> */}
        <div className="join_com">
          <div className="container">
            <div className="row">
              {/* <div className="col-md-12">
                <h2>Join Our Community</h2>
                <p>
                  Enter your email address to register to our newsletter
                  subscription delivered on regular basis!
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
                      />
                    </div>
                  </div>
                  <div className="clearfix" />
                  <button className="btn btn_new1">SUBSCRIBE</button>
                </div>
                <div className="clearfix" />
                <div className="clearfix" />
              </div> */}
              <div className="clearfix" />
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
