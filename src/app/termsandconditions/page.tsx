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
        <h2 style={{ textAlign: "center" }}>Terms of Services</h2>
        <div style={{ padding: "4rem", paddingTop: "2rem" }}>
          <div className="row">
            <div className="col-md-12" style={{ marginTop: 10 }}>
              <h3 style={{color:"#1f899d"}}>What We Do</h3>
              <p style={{ textAlign: "justify",fontSize:"18px" }}>
                Global Academy of Doctorates was established to help inform and
                educate individuals, professionals, and business owners. Our
                entire purpose is to help others to be better at what they do.
                To that end, we publish videos and articles along with chat
                sessions for members from WordPress experts with a passion for
                teaching others. Our platform is further supported by excellent
                and prompt customer service. Our site members regularly provide
                us with resoundingly good feedback, both solicited and
                unsolicited.
              </p>
           
              <h3 style={{ color:"#1f899d", marginTop: 20 }}>
              Refund Policy
              </h3>
              <p style={{ textAlign: "justify" ,fontSize:"18px"}}>
              All presentation materials are copyrighted by their respective owners unless otherwise noted. It is unlawful (and downright rude) to distribute materials without permission. Donâ€™t do that. You are, however, welcome to use and share stills, slides, and text to promote Global Academy of Doctorates, our Mentors, or what youâ€™ve learned â€“ provided that you include proper attribution (all in the spirit of open source).

              </p>
              <h3 style={{ color:"#1f899d", marginTop: 20 }}>
              Site Usage Terms
              </h3>
              <p style={{ textAlign: "justify" ,fontSize:"18px"}}>
              We reserve the right to refuse, cancel, or suspend service at our sole discretion. Should you violate the Terms of Service outlined within, your account will be cancelled without a chance of a refund.

              </p>
              <h3 style={{ color:"#1f899d", marginTop: 20 }}>
              Limitation of Liability
              </h3>
             <p style={{ textAlign: "justify" ,fontSize:"18px"}}>
             Violations of these policies should be referred to <br/> academyofdoctorates@gmail.com. <br/>All complaints will be investigated promptly. Failure to follow any term or condition will be grounds for immediate account deactivation.

             </p>
              <h3 style={{ color:"#1f899d", marginTop: 20 }}>
              Disclaimer

              </h3>
              <p style={{ textAlign: "justify" ,fontSize:"18px"}}>
              By purchasing materials from Global Academy of Doctorates, you agree to the above policies and disclaimer. <br/>Global Academy of Doctorates reserves the right to amend any or all of the above policies, guidelines, and disclaimers without notification. We also retain the right to adjust any pricing and make changes to our product without any formal notifications.

              </p>
              <p style={{ textAlign: "justify" ,fontSize:"18px",marginTop:20}}>
              We hope this TOS is helpful in clarifying the obligations of Internet users, including Global Academy of Doctorates and its subscribers, as responsible members of the Internet. Any complaints about a subscriberâ€™s violation of this TOS should be sent to academyofdoctorates@gmail.com

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
