import { Footer } from "../components/Footer";
import Header from "../components/header";
import CustomHeader from "../components/mobileHeader";
import VideoCarousel from "../components/videoCarousel";
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
            src="images/gal_bg.jpg"
            className="img-responsive center-block mob_hidden"
            alt=""
          />
          <img
            src="images/gal_bg.jpg"
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
                        <span>Gallery</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="gda_gallery gallery_top">
              <div className="row">
                <div className="col-xs-12">
                  <h2>GAD Gallery</h2>
                </div>
                <div className="clearfix" />
              </div>
              <div className="clearfix" />
              <div className="gallery_outer">
                <div id="" className="text-center">
                  <ImageGalleryCarousel />
                </div>
                
              </div>
            </div>

            
          </div>
          <div className="clearfix" />
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="gda_gallery gallery_top">
              <div className="row">
                <div className="col-xs-12">
                  <h2>WORLD DOCTORATES DAY</h2>
                </div>
                <div className="clearfix" />
              </div>
              <div className="clearfix" />
              <div className="gallery_outer">
                <div id="" className="text-center">
                  <WorldDoctorsDayGalleryCarousel />
                </div>
          
              </div>
            </div>

            
          </div>
          <div className="clearfix" />
        </div>
       
        <div className="row">
          <div className="col-md-12">
            <div className="gda_gallery gallery_top">
              <div className="row">
                <div className="col-xs-12">
                  <h2>ICCR</h2>
                </div>
                <div className="clearfix" />
              </div>
              <div className="clearfix" />
              <div className="gallery_outer">
                <div id="" className="text-center">
                  <IccrGalleryCarousel/>
                </div>
               
              </div>
            </div>

            
          </div>
          <div className="clearfix" />
        </div>

        <div className="clearfix" />
      </div> */}

<div className="history_wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-12 service_heading">
                <h2>GALLERY</h2>
               </div>
              <div className="col-md-12">
                <ul className="timeline">
                  <li className="timeline-inverted">
                    <div className="timeline-badge danger">2023</div>
                    <div className="timeline-panel">
                      <div className="panel panel-default">
                        <div className="panel-heading n_head">
                          {/* <h3>Inauguration Of New Academy</h3> */}
                        </div>
                        <div className="clearfix" />
                        <div className="panel-body n_body">
               
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
              </div> 
            </div>
          </div>
        </div>
      


     

      <div className="video_gallery">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Video Gallery</h2>
              <div className="gallery_outer2">
                <div id="" className="text-center">
                  <VideoCarousel />
                </div>
              </div>
            </div>
            <div className="clearfix" />
          </div>
          <div className="clearfix" />
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
