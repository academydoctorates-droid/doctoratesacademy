
import axios from "axios";
import Header from "../components/header";
import { API_PATHS, BASE_ASSET_URL } from "../utils";

import FaqComponent from "../components/FaqComponent"
import { Footer } from "../components/Footer";



const faqData = async () => {
    const response = await axios.get(API_PATHS.ADD_Faq);
    const data = response.data;
    // console.log(data);
    return data;
};


const page = async () => {
  const data = await faqData()

  return (
    <>
      {/* Hello world */}
      <Header />
      <div>
        <div className="top_banner margin_adjust2">
          <div className="top_banner_pic">
            <img
              src="images/wdd/2019/5.JPG"
              className="img-responsive center-block mob_hidden"
              alt=""
            />
            <img
              src="images/wdd/1.JPG"
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
                          <span>FAQ</span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div className="container">
          <div className="container-fluid">
           <FaqComponent faqData={data}/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default page;
