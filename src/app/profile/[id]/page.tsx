"use client";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PublishIcon from "@mui/icons-material/Publish";
import ImageUploader from "../../components/imageUploaderProfile";
import Header from "../../components/header";
import CustomHeader from "../../components/mobileHeader";
// import { BASE_ASSET_URL } from "../utils";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  InputLabel,
  TextField,
  Typography,
  Grid,
} from "@mui/material";

import { Padding, Password } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import axios from "axios";
import { BASE_ASSET_URL } from "../../utils";
import Link from "next/link";

const ourMembersData = [
  {
    id: 1,
    name: "Prof. Dr. Kamal Kant Dwivedi",
    image: "images/founding members/1.png",
    profession: "President",
    location: "Noida, Delhi NCR",
    designation:
      "Senior Vice President RBEF, Amity University Former Vice Chancellor of three Indian Universities",
    role: "President",
    Bio: "Prof. Dr. Kamal Kant Dwivedi, is presently the Senior Vice-President RBEF, Amity Group of Universities, and the President of Global Academy of Doctorates. He is a Scientist, Researcher, Teacher, Educator, Administrator, Diplomat, Science Communicator and has served both in India and abroad in different capacities for over 50 years. Prof. Dwivedi specializes in the fields of Chemical, Nuclear and Environmental Science, Science and Technology Cooperation, Science Administration and Communication. He has pursued research in truly interdisciplinary areas with over 200 research publications. He is the founder President of the 'Global Academy of Doctorates' and its network having about 5900 members from 55 countries and held the prestigious position of President of the International Nuclear Track Society representing more than 40 countries. Prof. Dwivedi represented India as the Head of the Indian Delegation for SAARC S&T Committee Summit in Islamabad in the year 2009, is a member of Board and Advisor of Smart University Foundation, USA since 2019 and is the recipient of 10 national and international fellowships, the prestigious “India 2000 Millennium Award in 1999, the Saraswati Centenary Award”, Science Glory Award (2017) and was elected as the Fellow of the International Academy of Physical Sciences in 2011 and President of the Chemical Sciences for the Centenary year of the Indian Science Congress. ",
  },
  {
    id: 2,
    name: "Prof. Dr. Yogesh Chandra Goswami",
    image: "images/founding members/2.png",
    profession: "Member",
    location: "Gwalior",
    designation: "FRSC, Professor of Physics,ITM University, Gwalior",
    role: "Founding Member",
    Bio: "Prof. Dr. Yogesh C. Goswami, FRSC, with a rich background spanning over 24 years in academia, research, and leadership. Currently serves as the Dean of the School of Sciences at ITM University, Gwalior, Notable roles include Dean of Student Welfare, Dean of Research and Development and Dean of International Cooperation and Projects. Recognized for his academic excellence, he received the AICTE Young Teacher Career Award in 2010.Prof. Goswami's global engagement includes serving as an academic visitor at Manchester University (2012-13) and leading the DST ASEAN trilateral project between India, Indonesia, and Myanmar (2019-22). A member of esteemed editorial boards and professional societies, such as ACS, Elsevier, and the Royal Society of Chemistry, he actively contributes to advancing scientific knowledge.As an institution builder, Prof. Goswami founded the P C Ray Centre for Interdisciplinary Research Facilities at ITM University, a hub for cutting-edge interdisciplinary research. Under his guidance, a Nano research group excels in the synthesis and characterization of materials for optoelectronics and sensor applications, achieving milestones and publishing extensively.His research endeavours encompass completing five projects and leading an international trilateral ASEAN DST project, mobilizing around 8 million rupees in grants. His continued participation as an invited speaker at conferences underscores his impactful presence in the scientific community. Prof. Goswami's contributions include over 100 published papers, co-authored book chapters, supervised doctoral work and conducted international /National Conferences and Faculty development programs.",
  },
  {
    id: 3,
    name: "Dr. Rosaline Mishra",
    image: "images/founding members/3.png",
    profession: "Member",
    location: "Mumbai",
    designation:
      "Senior Scientist Bhabha Atomic Research Center, Trombay, Mumbai",
    role: "Founding Member",
    Bio: "Dr. Rosaline Mishra is currently working as Senior Scientific Officer in Bhabha Atomic Research Centre, Mumbai. She is also affiliated to Homi Bhabha National Institute as Associate Professor in Physics discipline and a member of Ph.D. evaluation committee. She is an ICTP-TRIL fellow, Ph.D Physics from North Eastern Hill University, Shillong and Masters in Physics from Utkal University, Bhubaneswar.Through her research experience spanning over a period of 20 years, she has contributed in the field of Radiation instrumentation and detection in Environment. She was awarded with DAE Group-achievement award in 2014. She has 150 research publications in peer reviewed international journals, co-authored book chapters, supervised doctoral work, initiated international and national collaborations on radon research. She is a member of Indian Women Scientists Association (IWSA), Executive member of Asia-Oceania Radon Association (AORA), Secretary Indian Radon Network (RADNET).",
  },
  {
    id: 4,
    name: "Dr. P.N. Pandey",
    image: "images/founding members/4.png",
    profession: "Treasure",
    location: "New Delhi",
    designation: "Founder and Managing Director Penam Laboratories Ltd",
    role: "Hon. Vice President",
    Bio: "Dr. Paras Nath Pandey is widely known as father of antibiotics manufacturing in India. He is an authority on Beta-Lactum class of antibiotics of semisynthetic penicillin & Cephalosporin, most of the major antibiotics manufactured in India for which India is having a leadership stage and exporting almost globally, he has been involved directly and indirectly with the technology transfers. Dr. Pandey is not only recognised as a scientist in India but recognised globally as scientist, attending delivering lectures in international conferences.Dr. P. N. Pandey got his higher studies from Banaras Hindu University, Varanasi. He earned his Ph.D. in Chemistry from Indian Institute of Technology at Kanpur under the guidance of world-renowned Academician Prof. Goverdhan Mehta. He has several research publications in international journals and associated with a few leading universities as advisor and Professor Emeritus. He held an Academic Position in Chemistry Department of North-Eastern Hill University, Shillong. He served as Manager R&D with Ranbaxy Laboratories Ltd. New Delhi and Director Technical - Cepham Laboratories Ltd., New Delhi. He has been associated with Central University Hyderabad as Visiting Professor. Dr. Pandey has donated Rs. 20 million endowments to University of Hyderabad for establishing two professorial chairs in the name of his guide Prof. Goverdhan Mehta.Dr. Pandey is the Founder and Managing Director of Penam Laboratories Ltd., New Delhi. Penam Laboratories Ltd. established 1989 as bulk drug manufacturing facility, involved in project, designing, commissioning, and running of the Company as technical expert.",
  },
  {
    id: 5,
    name: "Dr. S.K. Agnihotri, IAS",
    image: "images/founding members/5.png",
    profession: "Vice-President",
    location: "Lucknow",
    designation:
      "Indian Administrative Service (Retd.) Former Secretary, NFCH, Govt. of India and Chief Secretary, Arunachal Pradesh, India",
    role: "Vice President",
    Bio: "Dr. S.K. Agnihotri is a renowned administrator specialized in conflict resolution; controlling situations involving law and order on account of insurgency, communal trouble including on ethnic and sectarian considerations; and relief and rehabilitation measures arising out of such situations.He served as Special Rapporteur to National Human Rights Commission Undertook extensive study on the Juvenile Justice system in few states viz. Andhra Pradesh, Tamilnadu, Punjab, Haryana and UT of Chandigarh. (2007-2008). As the Secretary, National Foundation for Communal Harmony set up by the Ministry of Home Affairs, Government of India. Also helped in providing inputs to the National Integration Council. (2000 – 2007). During his tenure as the Chief Secretary to the Government of Arunachal Pradesh, he resolve several pending border issues with China, Myanmar and Bhutan which involved approx. 125 different tribes.Dr. Agnihotri is popularly known as Agni (Fire) for his strong administration while serving as Deputy Commissioner and District Magistrate, Dibrugarh, Assam (1972-1975). Joint Secretary to the Government of Meghalaya, Home and Political Departments during the Bangladesh Liberation Movement and the way he looked after matters relating to heavy influx of refugees from Bangladesh in a tribal area and assisting in framing policies to avoid tribal-non-tribal conflict and organizing relief and rehabilitation measures.",
  },
  {
    id: 6,
    name: "Prof. Dr. Manju Kaushik",
    image: "images/founding members/6.png",
    profession: "Secretary",
    location: "Jaipur",
    designation:
      "Professor  Amity Institute of Information Technology (AIIT), Deputy Director-Amity Innovation Incubator Centre, President-Institution’s Innovation Council (IIC),Amity University Rajasthan ",
    role: "Secretary",
    Bio: "Prof. Dr. Manju Kaushik is Professor in Amity Institute of Information Technology (AIIT), Deputy Director-Amity Innovation Incubator Centre, President-Institution’s Innovation Council (IIC), Amity University Rajasthan, Branch Counsellor IEEE & ACM student Branches and Coordinator Technical Clubs –Amity University Rajasthan. She has more than 18 years of experience in the field of teaching and research. She was awarded Ph.D. from the Mohan Lal Sukhadia University, Udaipur, India.Her research papers have been published in various journals and conferences of National and International repute like IEEE, springer, Elsevier and other SCI, Scopus indexed. She is working as Associate Researcher in CENTER OF ICT/ICE, CURID, Covenant University, Nigeria. She has organized 04 International conferences and more than 145 academic events, FDPs and other awareness programs. She is one of the popular research guides in the University for quality work. She has successfully guided more than 100 dissertations at M.Tech. and Ph.D. levels.Presently, she is the executive member at Rajasthan sub-section of IEEE & Member of ACM, life member of ISTE and CSI. Guest Editor in “Innovations in Systems and Software Engineering”, NASA peer-reviewed scientific journal of computer science. She is in Editorial review board of a few International Journasl of Human Capital and Information Technology Professionals (IJHCITP), Indexed in INSPEC, SCOPUS, Web of Science Emerging Sources Citation Index (ESCI). Editor of “Software Engineering Approaches to Enable Digital Transformation Technologies” book CRC Press, Taylor & Francis group. Editor of “Futuristic technology perspective on entrepreneurship and sustainable Innovation” book IGI Global. She has published 2 Patents and edited 6 Books.",
  },
  {
    id: 7,
    name: "Dr. Shyam P. Tripathy",
    image: "images/founding members/7.png",
    profession: "Member",
    location: "Mumbai",
    designation:
      "Senior Scientist Bhabha Atomic Research Center, Trombay, Mumbai",
    role: "Founding Member",
    Bio: "Dr. S.P. Tripathy is the Senior Scientific Officer, Bhabha Atomic Research Centre, Mumbai, India and Asst. Professor, Homi Bhabha National Institute, Mumbai, India. He received Masters and M.Phil from Utkal University, Orissa, India and Ph.D. from North-Eastern Hill University, Shillong, India. He received a prestigious PDF from International Centre for Theoretical Physics (ICTP), Italy during 2001-2006.Dr. Tripathy's research spans various facets of neutron spectrometry and dosimetry, including neutron spectrometer design, microwave etching techniques for track detectors, quantification of high-energy neutron detection, LET spectrometry for neutron dosimetry, aircrew dosimetry, spectral deconvolution using mathematical methods, and application of spectrophotometric techniques for neutron dosimetry in intense fluence/dose environments. ",
  },
  {
    id: 8,
    name: "Prof. Dr. Vandana Upadhyay",
    image: "images/founding members/8.png",
    profession: "Joint Secretary",
    location: "Itanagar",
    designation:
      "Professor, Department of Economics Rajiv Gandhi University, Itanagar, Arunachal Pradesh",
    role: "Joint Secretary",
    Bio: "Prof. Vandana Upadhyay is a Professor of Economics at Rajiv Gandhi University, Itanagar, Arunachal Pradesh.  Currently she is also the Coordinator of the Centre for Development Studies, (CDS). Her research focuses on gender, labour and employment, human development, migration, rural livelihoods in mountain economies and the informal sector. She was a Commonwealth Visiting Fellow, attached to the Department of International Development, Queen Elizabeth House, University of Oxford, Oxford, UK. She has several research  publications to her credit such as authored and edited  books and  articles in prestigious journals of national and International repute. She has co-authored The Unfolding Crisis in Assam's Tea Plantations: Employment and Occupational Mobility (Routledge, 2012) and co-edited the book “Rethinking economic Development in North East India: The Emerging Dynamics (Rutledge, London/New Delhi, 2017).  She has also contributed to the Arunachal Pradesh Human Development Report (2005), co-authored the Situational Analysis of Women and Girls in Arunachal Pradesh (NCW Report, 2005), Arunachal Pradesh State Development Report (2010), Assam Human Development Report (2016) and the NCW Gender Report on Social, Economic and Political Empowerment of Women in North East India (2017). Currently she is working as a principal investigator in a National Commission for Women (NCW) study on the Women migrant workers in Arunachal Pradesh: Issues and Challenges.",
  },
  {
    id: 9,
    name: "Prof. Dr. Dipak Sinha",
    image: "images/founding members/9.png",
    profession: "Joint Secretary",
    location: "Kohima",
    designation: "Professor Department of Chemistry Nagaland University India",
    role: "Founding Member",
    Bio: "Prof. Dr. Dipak Sinha has been a Professor in Nagaland University, since 2014 and has been serving in different senior positions of the University. He has served as the Head of the Department of Chemistry (for two terms); Director IQAC (Internal Quality Assurance Cell) for two terms; Dean of Students Welfare; is the Nodal Officer for NEP-2020, Nagaland University, since 2022 and the NIRF coordinator for the University. He is presently the Chief Vigilance Officer of Nagaland University.He has made notable advancements in the field of Environmental Sciences. In recent years, he has conducted research focusing on various areas such as the development of novel carbon materials through surface modification; development of bio-based adsorbents for wastewater treatment; carbon-metal oxide nanocomposites for photocatalytic degradation of organic pollutants; application of Density Functional Theory to understand the adsorption mechanism as well as understanding the significance of the different functional groups on carbon surfaces. Recently, his lab has started working on 2D materials such as graphene, transition metal dichalcogenides for developing next generation of supercapacitor electrodes.",
  },
  {
    id: 10,
    name: "Prof. Dr. Swati Gupta",
    image: "images/founding members/10.png",
    profession: "Member",
    location: "Faridabad Now in USA",
    designation:
      "M.Pharm, Ph.D, Post-Doc (USA), Research Scientist, Healios Labs LLC Skillman, New Jersey, USA",
    role: "Founding Member",
    Bio: "Dr. Swati Gupta earned her Ph. D. in the year 2009 and is presently working as Research and Development Scientist at Healios Labs LLC, Skillman, New Jersey, United States. She has nearly nineteen years of research/teaching experience. Dr Gupta has over fifty publications to her credit published in international journals of high scientific impact and has contributed several chapters in many outstanding reference books. She is also the author of 5 books. Dr. Gupta has presented several research papers in international/national conferences and received several best paper awards as first as well as corresponding author. Dr Gupta also serves as the reviewer and editorial board member of several international journals. She is also the recipient of prestigious BOYSCAST fellowship of Department of Science & Technology, New Delhi (2010-11) for postdoctoral research in USA, Bio-CARe Women Scientist award Department of Biotechnology, New Delhi and TARE fellow of SERB, New Delhi. She has guided about 26 dissertations at the post graduate level and 3 dissertations at the doctorate level as supervisor/cosupervisor. Her research interests include antibody/small molecule formulation development, drug delivery and targeting against intracellular infections and cancer",
  },

  {
    id: 11,
    name: "Prof. Dr. Mitali Talukdar",
    image: "images/founding members/12.jpg",
    profession: "Member",
    location: "Kolkata",
    designation: "Associate Professor Amity University, Kolkata,USA",
    role: "Founding Member",
    Bio: "Prof. Dr. Mitali Talukdar a senior Faculty Member in the Institute of Management at Amity University, Kolkata. She has worked as a Professor of General Management and Human Resource Management in various University and Institutes including Symbiosis, Dr D.Y. Patil, Indian Studies of Business & Media. She was successfully associated with various institutional developmental work including NAAC and NBA. Dr Mitali has authored, coauthored, published, and presented several international research papers in Conferences, Conference proceedings and journals including IIT Roorkee (along with Sheffield Halem and Waikato University, UK) and IIM Indore. She has been editor of IGI Global Publishing House. She is 'Sangeet Visharad' in classical vocal music and possessed master's degree in electric guitar; has participated/ organized many cultural programs in Kolkata, Delhi, and Pune. She is an avid traveller across India and various parts of (US), and thus understands and manages the diversified cultural team at organizational leadership position",
  },

  {
    id: 12,
    name: "Ajanta Sharma",
    image: "images/founding members/13.jpg",
    profession: "Member",
    location: "Delhi, NCR",
    designation: "Vice President (Finance) PMI north India Chapter Delhi, NCR",
    role: "Founding Member",
    Bio: "Ajanta Sharma is a distinguished Project & Program Management professional with an impressive 24-year track record in various IT organizations. Ajanta holds the prestigious PMP® certification and boasts over 25 professional certifications, showcasing her commitment to continuous learning and development. As a certified mentor, she dedicates extensive time and effort to guiding and mentoring IT professionals, both within and outside her professional responsibilities. With a longstanding association with the PMI since 2005, Ajanta currently serves as the Vice President Finance in PMI North India Chapter, contributing to the chapter's strategic direction and financial management. In addition to her professional achievements, Ajanta is also a Ph.D. research scholar in Management. Beyond the confines of her professional pursuits, Ajanta is a talented poet, singer, and painter, finding creative expression and inspiration in various artistic endeavours.",
  },

  {
    id: 13,
    name: "Dr. Nidhi Kesari",
    image: "images/founding members/14.png",
    profession: "Member",
    location: "Delhi",
    designation: "Associate professor",
    role: "Treasurer",
    Bio: "Dr. Nidhi Kesari is a teacher and researcher with fourteen years of experience. She has authored 12 research papers. She headed Department of Financial Studies and is presently heading the Department of Management Studies.She was a Founder Director in the company ‘SSCBS Innovation and Incubation Foundation’ (SIIF), an incubation company and the CEO of SIIF.She was a member of Governing Body and was Founder Warden (Girls Hostel) of Shaheed Sukhdev College of Business Studies. She was invited as an international panelist and presenter in the 3rd USA India Business Summit 2012 in Atlanta (USA). She was invited to deliver a lecture in Academy for Education and Development on ‘Leadership in Higher Education Programme: A Practical Approach’ during June 2015 in Oxford, UK. Dr. Kesari has been awarded Ph.D. degree entitled ‘Decision Making Patterns and Organizational Effectiveness’ from University of Lucknow. She secured first position and obtained gold medals in M.Com and B.Com degrees. She secured 7th position in the state level Intermediate Board examination.",
  },

  {
    id: 14,
    name: "Prof. Dr. Mohinder P. Mahajan",
    image: "images/founding members/15.jpg",
    profession: "Member",
    location: "Utca 2030 Erd, Hungary",
    designation: "Professor Emeritus",
    role: "Hon. Vice President",
    Bio: "Prof. Dr. Mohinder Pal Mahajan is internationally known as an Indian chemistry professor and researcher. His achievements include research in Synthetic and Mechanistic Organic Chemistry, Pharmaceutical Chemistry, Development of Novel Strategies in synthesis of biologically important Heterocyclics, Cycloaddition Reactions of Heterodienes; research in Recent Advances in Synthetic Applications of Azadienes, Tetrahedron Report. He is the Fellow of prestigeous National Academy of Sciences India.He worked as Post doctoral fellow at Indian Institute of Technology, Kanpur, India, during 1974, Humboldt fellow Ludwig Maxmillian University, Munich, in 1977. Lecturer North-Eastern Hill University, Shillong, since 1979, reader, since 1981, research assistant, since 1988, professor, since 1991.He was awarded a Common Wealth Academic Staff fellowship at Glasgow University, Glasgow, Scotland, since 1988. Professor Guru Nanak Dev University, Amritsar, India, since 1996. Visiting professor Tokyo University of Science, since 2003.He was nominated as Member of syndicate and senate Guru Nanak Dev University, Amritsar, Punjab, India, 2002—2005, chairman department of applied chemistry, since 2002, dean faculty of applied sciences, since 2002, coordinator industrial linkage program, since 2002, chairman department pharmaceutical science, since 1996. He supervised large number Master of Science and Doctor of Philosophy students.Prof. Mohinder Pal Mahajan has been listed as a noteworthy chemistry professor, researcher by Marquis Who's Who.",
  },

  {
    id: 15,
    name: "Dr. Rekha Dwivedi",
    image: "images/founding members/16.jpg",
    profession: "Member",
    location: "New Delhi",
    designation: "Former Director, National Foundation for Communal Harmony",
    role: "Founding Member",
    Bio: "Dr. Rekha Dwivedi is an author, poet, teacher and served as  Director in the National Foundation for Communal Harmony, an autonomous organization of the Home Ministry since 2002. She obtained her University education from Kanpur University, North-Eastern Hill University and Osmania University. She earned her Ph.D. in Hindi from Gauhati University in 1997. Dr. Rekha Dwivedi has been associated deeply with education for more than 20 years at all levels. She wrote extensively in print and audio-visual media on various social issues. She served as faculty member and Head of the Department of Hindi at Arunachal University, Itanagar. Dr. Dwivedi taught M.A. Courses and guided Ph.D. research. She published 24 research articles and 25 books from topics ranging from women studies to communal harmony. She published two books with collection of her poetry. She Produced and anchored popular literary radio program “Vividha” for the NER station of the All India Radio.For her outstanding academic and literary work Dr. Rekha Dwivedi received several awards including Saraswati Sahitya Samman for poetic expression in Hindi, Vishwa Sahastrabdi Hindi Sammelan Award for her research in poetic expression of the environment. She held various positions in academic bodies and social organizations. She extensively travelled in Europe, Australia and America and lived in Germany and USA for over six years.",
  },
];

const page = ({ params }: { params: any }) => {
  const { id } = params;
  console.log("this is Id--->" + id);
  const router = useRouter();
  const [userId, setUserId] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    profileImage: null,
    firstName: "",
    middleName: "",
    // lastName: "",
    familyName: "",
    address: "",
    address_corresponding: "",
    membershipType: "",
    Official_email: "",
    password: "",
    Personal_email: "",
    Contact_phone: "",
    WhatsappNo: "",
    Contact_residence: "",
    twitter: "",
    DateofBirth: "",
    city: "",
    Country: "",
    qualification: "",
    Yearofcompletion: "",
    Institution: "",
    BroadSpecializations: "",
    SpecificSpecialization: "",
    research_keyword: "",
    MemberofSocieties: "",
    Publications: "",
    Books: "",
    Patents: "",
    Technology_Transferred: "",
    Awards: "",
    NameOfSpouse: "",
    number_of_children: "",
    children: "",
    UniqueNationalId: "",
    supervised_phds: "",
    noOfPhdSupervised: "",
    stillSupervised: "",
    lookForPhd: "",
    advertiseFellowship: "",
    curriculum_vitae: null,
    termsAccepted: false,
  });

  const selectedMember = ourMembersData.find(
    (member) => member.id === Number(id)
  );
  console.log("selected member---->" + selectedMember?.name);
  return (
    <div>
      {/* <Header/> */}
      {/* <CustomHeader/> */}
      <div className="header-container">
        <Header />
      </div>
      <div className="mobile-header-container">
        <CustomHeader />
      </div>

      <div
        className="editProfile"
        // style={{
        //   backgroundColor: "#257991",
        //   width: "100%",
        //   height: "250px",
        //   marginTop: "14rem",

        // }}
      >
        <div
          // style={{
          //   display: "flex",
          //   justifyContent: "space-between",
          //   marginLeft: "auto",
          //   marginRight: "auto",
          //   maxWidth: "900px",

          // }}
          className="profileImageHeader"
        >
          <div className="mobileProfile">
            <ImageUploader
              formData={ourMembersData}
              setFormData={selectedMember?.image}
              profileimage={selectedMember?.image}
              editForm={false}
              sx={{ maxWidth: "100%" }}
            />
            {/* <img
              style={{
                height: "250px",
                width: "220",
              }}
              src={"/" + selectedMember?.image}
              alt=""
            /> */}
          </div>
          <div style={{ margin: "auto" }}>
            <h1 style={{ color: "#ffff" }} className="firstName">
              {selectedMember?.name}
              <br /> ({selectedMember?.role})
            </h1>

            {/* <button onClick={()=>router.push(`/pleadge'){"}"}>pleadge</button> */}
            <h4 style={{ color: "#ffff" }}>{selectedMember?.designation}</h4>
          </div>
        </div>
      </div>

      <Stack
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#eff7f9",
          padding: 5,
          //   marginTop:50
        }}
      >
        <Card
          elevation={2}
          sx={{
            width: "100%",
            maxWidth: "900px",
            marginX: "auto",
          }}
        >
          <CardContent>
            <h2
              style={{
                textAlign: "justify",
                fontSize: "16px",
                lineHeight: 2,
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              {selectedMember?.Bio}
            </h2>

            <Stack spacing={2}></Stack>
          </CardContent>
        </Card>
      </Stack>
    </div>
  );
};

export default page;
