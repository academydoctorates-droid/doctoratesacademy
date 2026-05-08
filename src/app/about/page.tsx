"use server";

import React from "react";
import Header from "../components/header";
import { Footer } from "../components/Footer";
import CustomHeader from "../components/mobileHeader";
import Link from "next/link";
import OurGoverningBody from "../components/OurGoverningBody";
import AboutUsContent from "../components/AboutUsContent";
import OurMission from "../components/OurMission";
import WoodenFrame from "../components/WoodenFrame";
import WoodenFrame2 from "../components/WoodenFrame2";

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
              src="images/about-us-header.jpg"
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
                          <span>About Us</span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="advantage_div adv_wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="service_heading2 wow fadeInUp">
                  <h2>Why Choose Us</h2>
                
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
                      To bring together a dynamic pool of academicians with
                      transdisciplinary approach in problem solving and helping
                      mankind.
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
                  <div className="v_block_right ">
                    <h5>
                      <span>Our Vision</span>
                    </h5>
                    <p>
                      To recognize academic talents and create a global network
                      and offer them ample opportunities for interaction with
                      Industry, academia, and the Government in contributing
                      towards socio-economic developments.
                    </p>
                  
                  </div>
                  <div className="clearfix" />
                </div>
              </div>
              <div className="clearfix" />
            </div>
          </div>
        </div> */}

        {/* <OurMission/> */}

        <WoodenFrame />
        <br />
        <WoodenFrame2 />

        <div className="history_wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-12 service_heading">
                <h2>ABOUT US</h2>
                <AboutUsContent />
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
              {/* <div className="col-md-12">
                <ul className="timeline">
                  <li className="timeline-inverted">
                    <div className="timeline-badge danger">2023</div>
                    <div className="timeline-panel">
                      <div className="panel panel-default">
                        <div className="panel-heading n_head">
                          <h3>Inauguration Of New Academy</h3>
                        </div>
                        <div className="clearfix" />
                        <div className="panel-body n_body">
                          <p>
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
                          </ul>
                          <div className="clearfix" />
                          <div className="row">
                            <div className="col-md-3 col-sm-4 col-xs-6">
                              <div className="gallery_box">
                                <div className="cpl_image cpl_new">
                                  <a
                                    href="images/GAD_IMAGE_2023/GAD_3_23.JPG"
                                    data-fancybox="images"
                                  >
                                    <img
                                      src="images/GAD_IMAGE_2023/GAD_3_23.JPG"
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
                                    href="images/GAD_IMAGE_2023/GAD_8_23.JPG"
                                    data-fancybox="images"
                                  >
                                    <img
                                      src="images/GAD_IMAGE_2023/GAD_8_23.JPG"
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
                                    href="images/GAD_IMAGE_2023/GAD_10_23.JPG"
                                    data-fancybox="images"
                                  >
                                    <img
                                      src="images/GAD_IMAGE_2023/GAD_10_23.JPG"
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
                                    href="images/GAD_IMAGE_2023/GAD_6_23.JPG"
                                    data-fancybox="images"
                                  >
                                    <img
                                      src="images/GAD_IMAGE_2023/GAD_6_23.JPG"
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
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-badge danger">2019</div>
                    <div className="timeline-panel">
                      <div className="panel panel-default">
                        <div className="panel-heading n_head">
                          <h3>Installation of a new Science Lab</h3>
                        </div>
                        <div className="clearfix" />
                        <div className="panel-body n_body">
                          <p>
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
                          </ul>
                          <div className="clearfix" />
                          <div className="row">
                            <div className="col-md-3 col-sm-4 col-xs-6">
                              <div className="gallery_box">
                                <div className="cpl_image cpl_new">
                                  <a
                                    href="images/wdd/2019/5.JPG"
                                    data-fancybox="images"
                                  >
                                    <img
                                      src="images/wdd/2019/5.JPG"
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
                                    href="images/wdd/2019/8.JPG"
                                    data-fancybox="images"
                                  >
                                    <img
                                      src="images/wdd/2019/8.JPG"
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
                                    href="images/wdd/2019/7.JPG"
                                    data-fancybox="images"
                                  >
                                    <img
                                      src="images/wdd/2019/7.JPG"
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
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div> */}
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

        {/* <div className="container instructor_wrap">
          <div className="row">
            <div className="col-md-12 ins_top">
              <h2>Leadership</h2>
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

        <div className="container instructor_wrap">
          <div className="row">
            <div className="col-md-12 Governing_top">
              <h2>
                Governing Body of the Global Academy of Doctorates
                {/* <br />
                <span style={{fontSize:20,fontWeight:'normal',textTransform:"lowercase",color:"black"}}>of the</span>
                <br />
               <span style={{textTransform:"capitalize"}}>Global Academy of Doctorates</span> */}
              </h2>

              {/* <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled
              </p> */}
            </div>
            <div className="clearfix" />
            <OurGoverningBody />
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
