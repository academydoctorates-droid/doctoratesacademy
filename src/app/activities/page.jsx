/* eslint-disable react/jsx-key */
"use server";

import React from "react";
import Header from "../components/header";
import { Footer } from "../components/Footer";
import axios from "axios";
import { BASE_ASSET_URL } from "../utils";
import CustomHeader from "../components/mobileHeader";

const getActivitiesData = async () => {
  const res = await axios.get(`${BASE_ASSET_URL}/activities`);
  return res.data||[];
};

const page = async () => {
  //const activitiesData = await getActivitiesData();
  const heading =[
    "Celebrations on the 2nd Foundation Day of Global Academy of Doctorates at different Institutions on July 20, 2024.",
    "12th International Conference on Issues and Challenges in Doctoral Research (ICICDR-2024) and World Doctorates Day"
  ]
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
        <div className="top_banner margin_adjust2">
          <div className="top_banner_pic">
            <img
              src="images/abt_bg1.jpg"
              className="img-responsive center-block mob_hidden"
              alt=""
            />
            <img
              src="images/abt_bg1.jpg"
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
                          <span>Activities</span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="history_wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-12 service_heading">
                <h2>ACTIVITES</h2>
                <p>
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
              <div className="col-md-12" style={{ marginTop: "1.5rem" }}>
                <ul className="">
                  {[].map((item,index) => (
                    <li
                      className="timeline-inverted"
                      style={{ listStyle: "none" }}
                    >
                      <div className="timeline-panel">
                        <div className="panel panel-default">
                          <div className="panel-heading n_head">
                            <h3>{heading[index]}</h3>
                          </div>
                          <div className="clearfix" />
                          <div className="panel-body n_body">
                            {/* <p>{item.description}</p> */}
                            {/* <ul>
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
                              {item.images.map((image) => (
                                <div className="col-md-3 col-sm-4 col-xs-6">
                                  <div className="gallery_box">
                                    <div className="cpl_image cpl_new">
                                      <a
                                        href={`${BASE_ASSET_URL}/${image.filename}`}
                                        data-fancybox="images"
                                      >
                                        <img
                                          src={`${BASE_ASSET_URL}/${image.filename}`}
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
                              ))}

                              <div className="clearfix" />
                            </div>
                            <div className="clearfix" />
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
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
      </div>
      <Footer />
    </>
  );
};

export default page;
