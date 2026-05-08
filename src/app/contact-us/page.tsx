import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Header from "../components/header";
import CustomHeader from "../components/mobileHeader";
import { Footer } from "../components/Footer";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";

const headingStyle = {
  fontWeight: "bold",
  color: "#1f899d",
  textAlign: "center",
  marginTop: "2rem",
};

const sectionStyle = {
  padding: "2rem 1rem",
  textAlign: "center",
  color: "#333",
};

const contactInfoStyle = {
  textAlign: "center",
  fontSize: "18px",
  lineHeight: "1.6",
  color: "#333",
  marginTop: "1.5rem",
};

const page = () => {
  return (
    <>
      {/* Header Section */}
      <div className="header-container">
        <Header />
      </div>
      <div className="mobile-header-container">
        <CustomHeader />
      </div>

      {/* Main Container */}
      <Container>
        {/* Page Title */}
        <Typography
          variant="h2"
          style={{ textAlign: "center", marginTop: "2rem" }}
        >
          Contact Us
        </Typography>

        {/* Introduction Section */}
        <Box style={sectionStyle}>
          <Typography variant="body1" style={{ fontSize: "18px" }}>
            Welcome to the Global Academy of Doctorates! We are dedicated to
            fostering academic excellence and supporting researchers, scholars,
            and professionals across the globe. Whether you have questions,
            feedback, or are interested in our programs, we are here to assist
            you.
          </Typography>
        </Box>

        <Divider />

        {/* Contact Information */}
        <Box style={{ padding: "3rem 1rem" }}>
          <Typography variant="h4" style={headingStyle}>
            Prof. Dr. Kamal Kant Dwivedi
          </Typography>
          <Typography
            variant="h6"
            style={{ textAlign: "center", color: "#666" }}
          >
            President, Global Academy of Doctorates
          </Typography>
          <Typography style={contactInfoStyle}>
           13 Tower 12, Flat 005, Lotus Panache, Sector 110, Noida-201304, UP, India
          </Typography>
          <Typography style={contactInfoStyle}>
            Phone:{" "}
            <Link href="tel:++919958543884" style={{ color: "#1f899d" }}>
              +91 9958543884
            </Link>
          </Typography>
          <Typography style={contactInfoStyle}>
            Email:{" "}
            <Link
              href="mailto:academyofdoctorates@gmail.com"
              style={{ color: "#1f899d" }}
            >
              academyofdoctorates@gmail.com
            </Link>
            ,{" "}
            <Link
              href="mailto:kkdwivedi@yahoo.com"
              style={{ color: "#1f899d" }}
            >
              kkdwivedi@yahoo.com
            </Link>
          </Typography>
        </Box>

        <Divider />

        {/* Mission Statement Section */}
        {/* <Box style={sectionStyle}>
          <Typography variant="h4" style={headingStyle}>
            Our Mission
          </Typography>
          <Typography
            variant="body1"
            style={{ fontSize: "18px", marginTop: "1rem" }}
          >
            At the Global Academy of Doctorates, our mission is to empower
            professionals, scholars, and leaders with the knowledge and skills
            required to excel in their fields. We are committed to promoting
            academic research and excellence.
          </Typography>
        </Box> */}

        <Divider />

        {/* Operating Hours Section */}
        {/* <Box style={sectionStyle}>
          <Typography variant="h4" style={headingStyle}>
            Operating Hours
          </Typography>
          <Paper
            elevation={3}
            style={{
              margin: "1.5rem auto",
              padding: "1.5rem",
              maxWidth: "500px",
            }}
          >
            <Typography
              variant="body1"
              style={{ fontSize: "18px", lineHeight: "2" }}
            >
              Monday - Friday: 9:00 AM - 6:00 PM
              <br />
              Saturday: 10:00 AM - 2:00 PM
              <br />
              Sunday: Closed
            </Typography>
          </Paper>
        </Box> */}

        <Divider />

        {/* Location Map */}
        <Box style={sectionStyle}>
          <Typography variant="h4" style={headingStyle}>
            Our Location
          </Typography>
          <div style={{ marginTop: "1.5rem" }}>
            <iframe
              src="https://www.google.com/maps?q=005/12,+Lotus+Panache,+Sector+110,+Noida-201304,+India&output=embed"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

        </Box>
      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default page;
