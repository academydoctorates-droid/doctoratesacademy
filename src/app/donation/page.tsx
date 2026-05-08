"use server";

import React from "react";
import Header from "../components/header";
import { Footer } from "../components/Footer";
import CustomHeader from "../components/mobileHeader";
import Link from "next/link";
import OurGoverningBody from "../components/OurGoverningBody";
import AboutUsContent from "../components/AboutUsContent";
import OurMission from "../components/OurMission";
import DonationFrom from "../components/DonationForm";

const page = () => {
  return (
    <>
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
                          <span>Donation</span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="history_wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-12 service_heading">
                <h2>ABOUT US</h2>
                <p>
                  The Global Academy of Doctorates solicits generous donations
                  from all stakeholders, individual scholars, institutions,
                  corporate units (CSR funds), and charitable or philanthropic
                  organizations to support fellowships and programs of the
                  Academy for the common good of the society. All donors will
                  have access to the rich database of the Academy and other
                  privileges announced from time to time.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="container instructor_wrap">
          <div className="row">
            <div className="col-md-12 Governing_top ">
              <h2>
                Why to make liberal donations for Global Academy of Doctorates
              </h2>
              <p>
                Donating to the Global Academy of Doctorates (GAD) or any
                similar institution can support various noble causes. Here are
                some reasons why liberal donations to such organizations are
                valuable: The Governing Body of the Global Academy of Doctorates
                urge upon all individuals, Philanthropists, Associations,
                Institutions, Industries to support the Academy by their liberal
                donations. Corporate units may utilize their CSR funds for
                donations.
              </p>
              <ul>
                <li>
                  <strong>Advancing Education:</strong> GAD likely contributes
                  to the advancement of education, particularly in the field of
                  doctoral studies. By supporting such institutions, you're
                  investing in the future generation of scholars, researchers,
                  and professionals.
                </li>
                <li>
                  <strong>Promoting Research:</strong> Donations to GAD can
                  facilitate research initiatives, which can lead to discoveries
                  and innovations in various fields, ranging from medicine to
                  technology to social sciences.
                </li>
                <li>
                  <strong>Fostering Global Collaboration:</strong> Institutions
                  like GAD often foster collaboration among scholars and
                  researchers from around the world. By supporting them, you're
                  promoting international cooperation and knowledge exchange,
                  which can lead to diverse perspectives and solutions to global
                  challenges.
                </li>
                <li>
                  <strong>Supporting Diversity and Inclusion:</strong> GAD might
                  prioritize diversity and inclusion in its programs, ensuring
                  equal opportunities for scholars from different backgrounds.
                  Your donations can help support initiatives aimed at promoting
                  diversity and equity in academia.
                </li>
                <li>
                  <strong>Addressing Global Challenges:</strong> Many global
                  challenges, such as climate change, poverty, and health
                  disparities, require interdisciplinary approaches and
                  innovative solutions. By donating to institutions like GAD,
                  you're supporting efforts to address these challenges through
                  research and education.
                </li>
                <li>
                  <strong>Investing in the Future:</strong> Supporting education
                  and research institutions is an investment in the future of
                  society. The knowledge and skills developed through programs
                  supported by your donations can have long-term benefits for
                  individuals and communities worldwide.
                </li>
                <li>
                  <strong>Encouraging Lifelong Learning:</strong> Donations to
                  GAD can contribute to the development of lifelong learning
                  opportunities for scholars and professionals. Continued
                  education and skill development are essential in today's
                  rapidly changing world, and your support can help make these
                  opportunities accessible to more people.
                </li>
              </ul>
              <p>
                Ultimately, liberal donations to the Global Academy of
                Doctorates or similar organizations can have far-reaching
                impacts, ranging from advancing knowledge and research to
                fostering global cooperation and addressing pressing societal
                issues.
              </p>
              <p>
                Kindly remit the donation amount by any of the following modes:
              </p>
              <ul>
                <li>
                  <strong>Using UPI via QR code:</strong>
                </li>
                <img src="/images/qr.jpg" alt="" className="qr-image" />
                <li>
                  <strong>
                    Using Netbanking. The details are given below:
                  </strong>
                  <ul>
                  <li>
                  Name of account holder 	: GLOBAL ACADEMY OF DOCTORATES
                    </li>
                    <li>
                      Bank: State Bank of India Kendriya Vihar-II, Sector 82, Noida 201301
                    </li>
                    <li>Account No.: 43733857474</li>
                    <li>IFSC: SBIN0010079</li>           
                  </ul>
                </li>
              </ul>
            </div>
            <div className="clearfix" />

            <div className="clearfix" />
          </div>
          <div className="clearfix" />
        </div>

        <DonationFrom/>

        <div className="join_com">
          <div className="container">
            <div className="row">
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
