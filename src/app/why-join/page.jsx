/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Footer } from "../components/Footer";
import Header from "../components/header";
import WhyjoinData from "./whyjoinData";
import Advantages from "./advantages"
import Corporate from "./CorporatesToPartner"
import CustomHeader from "../components/mobileHeader";

const page = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="header-container">
        <Header />
      </div>
      <div className="mobile-header-container">
        <CustomHeader />
      </div>
      {/* &lt;&gt; */}
      <div className="top_banner margin_adjust2">
        <div className="top_banner_pic">
          <img
            src="images/whyjoin.JPG"
            className="img-responsive center-block mob_hidden"
            alt=""
          />
          {/* <img
            src="images/objectives-header.jpg"
            className="img-responsive center-block mob_pic1"
            alt=""
          /> */}
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="fos_outer">
                  <div className="fos_text">
                    <div className="fos_padding">
                      <h1>
                        <span>Why Join Us</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="benefits">
        <div className="container">
          <div className="row">
            <div className="col-md-12 core mt-2" id="first">
              <div className="heading2 wow zoomIn">
                <h2 style={{fontWeight:'bolder'}}>
                    Why should Scholars join Global Academy of Doctorates as
                    Life Members ?
                 
                </h2>
              </div>
              <p style={{ fontSize: "20px" }}>
                Joining the Global Academy of Doctorates as a Life Member offers
                a multitude of benefits and opportunities that make it a
                compelling choice for aspiring and established scholars alike.
                Below are some of the key reasons why one should consider
                becoming a Life Member of the Global Academy of Doctorates:
              </p>
            </div>
            <div className="clearfix" />
            <WhyjoinData />
            
            {/*             
            <div className="col-md-3 benefits_wrap wow zoomIn">
              <div className="b_icon">
                <i className="las la-trophy" />
              </div>
              <div>
                <h3>
                  <span>Achievement</span>
                </h3>
                <p>
                  Plusieurs variations de Lorem Ipsum peuvent être trouvées ici
                  ou là, mais la majeure partie d'entre elles a été altérée par
                  l'addition d'humour ou de mots aléatoires qui ne ressemblent
                  pas une seconde à du texte standard.
                </p>
              </div>
            </div>
            <div className="col-md-3 benefits_wrap wow zoomIn">
              <div className="b_icon">
                <i className="las la-lightbulb" />
              </div>
              <div>
                <h3>
                  <span>Growth Mindset</span>
                </h3>
                <p>
                  Plusieurs variations de Lorem Ipsum peuvent être trouvées ici
                  ou là, mais la majeure partie d'entre elles a été altérée par
                  l'addition d'humour ou de mots aléatoires qui ne ressemblent
                  pas une seconde à du texte standard.
                </p>
              </div>
            </div>
            <div className="col-md-3 benefits_wrap wow zoomIn">
              <div className="b_icon">
                <i className="las la-handshake" />
              </div>
              <div>
                <h3>
                  <span>Trust</span>
                </h3>
                <p>
                  Plusieurs variations de Lorem Ipsum peuvent être trouvées ici
                  ou là, mais la majeure partie d'entre elles a été altérée par
                  l'addition d'humour ou de mots aléatoires qui ne ressemblent
                  pas une seconde à du texte standard.
                </p>
              </div>
            </div>
            <div className="col-md-3 benefits_wrap wow zoomIn">
              <div className="b_icon">
                <i className="las la-running" />
              </div>
              <div>
                <h3>
                  <span>Activities</span>
                </h3>
                <p>
                  Plusieurs variations de Lorem Ipsum peuvent être trouvées ici
                  ou là, mais la majeure partie d'entre elles a été altérée par
                  l'addition d'humour ou de mots aléatoires qui ne ressemblent
                  pas une seconde à du texte standard.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
       
       <div id="second">
      <Advantages/>
      </div>

      <div id="third">
      <Corporate/>
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
      <Footer />
    </>
  );
};

export default page;
