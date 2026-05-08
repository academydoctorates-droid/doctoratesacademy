import React from "react";
import { Footer } from "../components/Footer";
import Header from "../components/header";
import ObjectivesList from "./objectiveData"
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
            src="images/objectives-header.jpg"
            className="img-responsive center-block mob_hidden"
            alt=""
          />
          <img
            src="images/objectives-header.jpg"
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
                        <span>Objectives</span>
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
            <div className="col-md-12 core mt-2">
              <div className="heading2 wow zoomIn">
                <h2 style={{fontWeight:'bold', fontSize:30}}>
                
                    Our Core Objectives
                
                </h2>
              </div>
              <p style={{fontSize:"16px"}}>
                The main objective of launching this academy is to share a major
                responsibility of generation and dissemination of knowledge and
                to steer our knowledge society towards prosperity and high
                quality of life. The members are also committed to ensure very
                high standards of Ph.D. Degrees across the disciplines. The
                Academy will be associated with performing following activities:
              </p>
            </div>
            <div className="clearfix" />
            <ObjectivesList/>
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
