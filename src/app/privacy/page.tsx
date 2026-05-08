import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Header from "../components/header";
import CustomHeader from "../components/mobileHeader";
import { Footer } from "../components/Footer";

const headingStyle = {
  fontWeight: "bold",
  color: "#000",
};

const page = () => {
  return (
    <>
      <div className="header-container">
        <Header />
      </div>
      <div className="mobile-header-container">
        <CustomHeader />
      </div>

      <Container>
        <h2 style={{ textAlign: "center" }}>Privacy Policy</h2>
        <div style={{ padding: "4rem", paddingTop: "2rem" }}>
          <div className="row">
            <div className="col-md-12" style={{ marginTop: 10 }}>
              <h3 style={{color:"#1f899d"}}>Our No-Bull Privacy Policy</h3>
              <p style={{ textAlign: "justify",fontSize:"18px" }}>
              Just like you, we are passionate about our right to privacy â€“ and we give others the same respect we desire from them. Therefore, under no circumstances will we ever share without your consent any of your information with anybody else. <strong>Period!</strong>
              </p>
           
              <h3 style={{ color:"#1f899d", marginTop: 20 }}>
              What information do we collect, and how is it protected?
              </h3>
              <p style={{ textAlign: "justify" ,fontSize:"18px"}}>
              We collect contact and your profile as member when you register, which we keep on file in order to quickly and efficiently help you through any questions or concerns about your order(s). However, the payment information you provide during checkout is NEVER stored on our server.
              <br/>
              Your payment is processed securely through our 256-bit encrypted payment gateway. The payment gateway provider will use this secure connection to verify your payment information with your financial institution. At no point in this process is the information accessible to us. This allows us to protect you and your information completely.
              <br/>
              When ordering on our site, as appropriate, you may be asked to enter: your name, email address, mailing address, or credit card information. You may, however, visit our site anonymously.
              </p>
              <h3 style={{ color:"#1f899d", marginTop: 20 }}>
              How is your information used?
              </h3>
              <p style={{ textAlign: "justify" ,fontSize:"18px"}}>
              Any of the information we collect from you will only be used in one of the following ways:

              </p>
              <ol>
                <li style={{ textAlign: "justify" ,fontSize:"18px"}}>To process transactions <br/>
                Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased products or services requested.
                </li>
                <li style={{ textAlign: "justify" ,fontSize:"18px"}}> To send periodic emails <br/>
                The email address you provide for order processing may be used to send you information and updates pertaining to your order, as well as occasional news, updates, related product or service information, etc.
                </li>
              </ol>
              <h3 style={{ color:"#1f899d", marginTop: 20 }}>
              Do we use cookies?
              </h3>
             <p style={{ textAlign: "justify" ,fontSize:"18px"}}>
             Yes. We use cookies to assist with our e-commerce processes, user authentication, and Googleâ€™s Ad-words and Analytics programs.

             </p>
              <h3 style={{ color:"#1f899d", marginTop: 20 }}>
              Do we disclose any information to outside parties?

              </h3>
              <p style={{ textAlign: "justify" ,fontSize:"18px"}}>
              No. We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential and not reuse it for any other purposes. We may also release your information if release is required to comply with the law, enforce our site policies, or protect our or othersâ€™ rights, property, or safety.


              </p>

              <h3 style={{ color:"#1f899d", marginTop: 20 }}>
              Children Online Privacy Protection Act Compliance

              </h3>
              <p style={{ textAlign: "justify" ,fontSize:"18px"}}>
              By using our site, you consent to this websiteâ€™s privacy policy.

              </p>

              <h3 style={{ color:"#1f899d", marginTop: 20 }}>
              Changes to our Privacy Policy

              </h3>
              <p style={{ textAlign: "justify" ,fontSize:"18px"}}>
              If any changes are required to our privacy policy, we will post those changes on this page.  

              </p>


              <h3 style={{ color:"#1f899d", marginTop: 20 }}>
              Cancellation & Refund

              </h3>
              <p style={{ textAlign: "justify" ,fontSize:"18px"}}>
              Global Academy of Doctorates is a unique organization that offers a platform for academicians and doctorates to improve quality of doctoral research and higher education, and they can get access to a large network of top academicians.
              </p>
              
              <p style={{ textAlign: "justify" ,fontSize:"18px",marginTop: 15 }}>
              At Global Academy of Doctorates, we understand the importance of transparency and fairness in our work. Therefore, we have a no cancellation and no refund policy once the registration of membership process is completed, and the activity is started.
              </p>

              <p style={{ textAlign: "justify" ,fontSize:"18px",marginTop: 15 }}>
              It is important to understand the nature of voluntary activities and services that we offer, which makes it difficult for us to provide refunds. Our members work as freelancers, and we collect only membership and donations. Therefore, once a member registers for the Academy the funds collected are utilized for several activities planned in each year. 
              </p>

              < p style={{ textAlign: "justify" ,fontSize:"18px",marginTop: 15 }}>
              We strongly advise our members to read all terms and conditions of the membership before joining. We also encourage members to join and be part of the various activities of the Academy.
              </p>

              < p style={{ textAlign: "justify" ,fontSize:"18px",marginTop: 15 }}>
              At Global Academy of Doctorates, we understand that mistakes can happen during various programs launched by the academy. These mistakes can be rectified and there will not be any monetary losses which are liable for refund.
              </p>
             
             
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default page;
