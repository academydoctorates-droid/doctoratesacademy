/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Divider from '@mui/material/Divider';
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PublishIcon from "@mui/icons-material/Publish";
import ImageUploader from "@/app/components/ImageUploader";
import Header from "@/app/components/header";
import CustomHeader from "@/app/components/mobileHeader";


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
import { BASE_ASSET_URL } from "@/app/utils";
import Link from "next/link";
import MandatoryForLogin from "@/app/components/MandatoryForLogin";

const membershipTypes = [
  "Life Member (Indian) Fee @ INR-10,500",
  "Life Member (International) Fee @ USD-525",
  "Annual Member (Indian) Fee @ INR-2500",
  "Annual Member (International) Fee @ USD-125",
  "Institutional Member (Indian) Fee @ INR-51000",
  "Institutional Member (International) Fee @ USD-2100",
  "Corporate Member (Indian) Fee @ INR-51000",
  "Corporate Member (International) Fee @ USD-2100",
  "Honorary Member (only by invitation)",
  "Founding Member (only by invitation)",
];

const page = ({ params }) => {
  const {id} =  params ;
  console.log("memberid--->" + id);
  const router = useRouter();
  const [userId, setUserId] = useState(id);


  const [tokenId,setTokentId] = useState("")
  const [openModal, setOpenModal] = useState(true);

  const [curriculum_vitae, setCurriculum_vitae] = useState("");
  const [profileimage, setProfileImage] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    profileImage: null,
    firstName: "",
    middleName: "",
    lastName: "",
    familyName: "",
    address: "",
    address_corresponding: "",
    membershipType: "",
    Official_email: "",
    // password: "",
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
    designation:"",
    adminExperienece:"",
    corporateExperience:"",
    researchExperience:"",
    teachingExperience:"",
    curriculum_vitae: null,
    termsAccepted: false,
  });


  const membershipType = formData.membershipType.split(" Fee ")[0];

  const calculateAge = (dateOfBirth) => {
    if (!dateOfBirth) return null;

    const dob = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    if (
      today.getMonth() < dob.getMonth() ||
      (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
    ) {
      age--;
    }
    return age;
  };



  const handleInputChange = (fieldName) => (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: event.target.value,
    }));
  };

  
const handleCloseModal = () => {
  setOpenModal(false);
  
  router.push('/').catch((error) => {
    console.error('Error navigating to home page:', error);
  });
};


  const handleSubmit = async () => {
    const formdata = new FormData();
    // formData.append("profileImage",profileimage )
    for (let key of Object.keys(formData)) {
      formdata.append(key, formData[key]);
    }

    if (formData.profileImage.originalname) {
      formdata.delete("profileImage");
    }

    if (formData.curriculum_vitae.originalname) {
      formdata.delete("curriculum_vitae");
    }

    try {
      const res = await axios.patch(
        `${BASE_ASSET_URL}/members/${userId}`,
        formdata
      );
    
      router.replace("/");
    } catch (err) {
      userId;
    
    }
  };

  useEffect(() => {
    // async function getLoginUser(){
    //   const user = await
    // }
    const userId = localStorage.getItem("userId");

    const token = localStorage.getItem("token");


  setTokentId(token)

    const getLoginUserDetails = async () => {
      const res = await axios.get(`${BASE_ASSET_URL}/members/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("editProfile details-->", res.data);
      setCurriculum_vitae(res.data.curriculum_vitae);
      setProfileImage(res.data.profileImage.filename);

      const userData = Object.keys(res.data);

      userData.forEach((item) => {
        if (item !== "password" && item !== "_id" && item !== "__v") {
          setFormData((prev) => ({
            ...prev,
            [item]: res.data[item],
          }));
        }
      });
      //   setfirstName(res.data.firstName);
      //   setfamilyName(res.data.familyName);
      //   setmembershipType(res.data.membershipType);
      //   setProfileImage(res.data.profileImage.filename)
      //   console.log("profileImage--->",res.data.profileImage.filename)
    };

    if (userId) {
      getLoginUserDetails(userId, token);
    }

    setUserId(userId);
  }, []);

  // console.log("userData----->", formData);

  console.log("ContactNumber----->", formData.Contact_phone);
   
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

     {
      tokenId ? <>
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
              formData={formData}
              setFormData={setFormData}
              profileimage={profileimage}
              editForm={true}
              sx={{ maxWidth: "100%" }}
            />
          </div>
          <div className="memberShipType" style={{ margin: "auto" }}>
            <h1 style={{ color: "#ffff" }} className="firstName">
            {formData.title}  {formData.firstName} {formData.middleName} {formData.familyName}
            </h1>
            <h1 style={{ color: "#ffff" }} className="firstName">
            {formData.designation}
            </h1>
            {/* <a
              className="btn btn_new1"
              onClick={() =>
                window.open(
                  `${window.location.origin}/pleadge?name=${formData.firstName}%20${formData.familyName}&address=${formData.address}&designation=${formData.qualification}&email=${formData.Official_email}&mobileNo=${formData.Contact_phone}'`
                )
              }
            >
              View Pledge
            </a> */}
            {/* <button onClick={()=>router.push(`/pleadge')}>pleadge</button> */}
            <h4 style={{ color: "#ffff" }}>
             {membershipType}
            </h4>
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
          fontSize:16
          //   marginTop:50
        }}
      >
        <Card
          elevation={2}
          sx={{
            width: "100%",
            maxWidth: "900px",
            marginX: "auto",
            fontSize:16
          }}
        >
          <CardContent>
            {/* <h2 style={{textAlign: 'center'}}>Edit Profile</h2> */}

            <Grid item xs={12} sm={6}>
  {formData.firstName && (
    <div>
      <Typography variant="h5" color="textSecondary" sx={{lineHeight:2.43}}>
        <span style={{ fontWeight: 'bold' }}>Name: </span>{formData.title} {formData.firstName} {formData.middleName} {formData.familyName}
      </Typography>
      <Divider />
    </div>
  )}
</Grid>

{/* <Grid item xs={12} sm={6}>
  {formData.middleName && (
    <div>
      <Typography variant="body2" color="textSecondary">
        <span style={{ fontWeight: 'bold' }}>Middle Name:</span> {formData.middleName} 
      </Typography>
      <Divider />
    </div>
  )}
</Grid>

<Grid item xs={12} sm={6}>
  {formData.lastName && (
    <div>
      <Typography variant="body2" color="textSecondary">
        <span style={{ fontWeight: 'bold' }}>Last Name:</span> {formData.lastName}
      </Typography>
      <Divider />
    </div>
  )}
</Grid>

<Grid item xs={12} sm={6}>
    {formData.familyName && (
      <div>
        <Typography variant="body2" color="textSecondary">
          <span style={{ fontWeight: 'bold' }}>Family Name:</span> {formData.familyName}
        </Typography>
        <Divider />
      </div>
    )}
  </Grid> */}

  <Grid item xs={12} sm={6}>
    {formData.address && (
      <div>
        <Typography variant="h5" color="textSecondary" sx={{lineHeight:2.43}}>
          <span style={{ fontWeight: 'bold' }}>Address(official)*:</span> {formData.address}
        </Typography>
        <Divider />
      </div>
    )}
  </Grid>

  <Grid item xs={12} sm={6}>
    {formData.Official_email && (
      <div>
        <Typography variant="h5" color="textSecondary" sx={{lineHeight:2.43}}>
          <span style={{ fontWeight: 'bold' }}>E-mail*:</span> {formData.Official_email || ""}
        </Typography>
        <Divider />
      </div>
    )}
  </Grid>


  

  {/* <Grid item xs={12} sm={6}>
    <Typography variant="body2" color="textSecondary">
      Address(corresponding)*: {formData.address_corresponding || ""}
    </Typography>
  </Grid> */}
{/* 
  <Grid item xs={12} sm={6}>
    <Typography variant="body2" color="textSecondary">
      E-mail(personal): {formData.Personal_email || ""}
    </Typography>
  </Grid> */}

{/* <Grid item xs={12} sm={6}>
  {formData.Contact_phone && (
    <div>
      <Typography variant="body2" color="textSecondary">
        <span style={{ fontWeight: 'bold' }}>Contact Phone:</span> {formData.Contact_phone || ""}
      </Typography>
      <Divider />
    </div>
  )}
</Grid> */}

<Grid item xs={12} sm={6}>
  {formData.city && (
    <div>
      <Typography variant="h5" color="textSecondary" sx={{lineHeight:2.43}}>
        <span style={{ fontWeight: 'bold' }}>City:</span> {formData.city || ""}
      </Typography>
      <Divider />
    </div>
  )}
</Grid>

<Grid item xs={12} sm={6}>
  {formData.Country && (
    <div>
      <Typography variant="h5" color="textSecondary" sx={{lineHeight:2.43}}>
        <span style={{ fontWeight: 'bold' }}>Country:</span> {formData.Country || ""}
      </Typography>
      <Divider />
    </div>
  )}
</Grid>

<Grid item xs={12} sm={6}>
  {formData.DateofBirth && (
    <div>
      <Typography variant="h5" color="textSecondary" sx={{lineHeight:2.43}}>
        <span style={{ fontWeight: 'bold' }}>Age:</span> {calculateAge(formData.DateofBirth)}
      </Typography>
      <Divider />
    </div>
  )}
</Grid>
              {/* Third Step */}
              <Grid item xs={12} sm={6}>
  {formData.qualification && (
    <div>
      <Typography variant="h5" color="textSecondary" sx={{lineHeight:2.43}}>
        <span style={{ fontWeight: 'bold' }}>Highest degree/qualification*:</span> {formData.qualification || ""}
      </Typography>
      <Divider />
    </div>
  )}
</Grid>

<Grid item xs={12} sm={6}>
  {formData.Yearofcompletion && (
    <div>
      <Typography variant="h5" color="textSecondary" sx={{lineHeight:2.43}}>
        <span style={{ fontWeight: 'bold' }}>Year of completion*:</span> {formData.Yearofcompletion || ""}
      </Typography>
      <Divider />
    </div>
  )}
</Grid>

<Grid item xs={12} sm={6}>
  {formData.Institution && (
    <div>
      <Typography variant="h5" color="textSecondary" sx={{lineHeight:2.43}}>
        <span style={{ fontWeight: 'bold' }}>Name of the University/Institution*:</span> {formData.Institution || ""}
      </Typography>
      <Divider />
    </div>
  )}
</Grid>

<Grid item xs={12} sm={6}>
  {formData.BroadSpecializations && (
    <div>
      <Typography variant="h5" color="textSecondary" sx={{lineHeight:2.43}}>
        <span style={{ fontWeight: 'bold' }}>Broad Specializations (Major Subjects)*:</span> {formData.BroadSpecializations || ""}
      </Typography>
      <Divider />
    </div>
  )}
</Grid>

  <Grid item xs={12} sm={6}>
  {formData.SpecificSpecialization && (
        <div>
    <Typography variant="h5" color="textSecondary" sx={{lineHeight:2.43}}>
     <span style={{fontWeight:'bold'}}>  Specific Specializations(Core Subjects)*:</span> {formData.SpecificSpecialization || ""}
    </Typography>
    <Divider/>
    </div>

    )}
  </Grid>


  <Grid item xs={12} sm={6}>
  {formData.adminExperienece && (
        <div>
    <Typography variant="h5" color="textSecondary" sx={{lineHeight:2.43}}>
     <span style={{fontWeight:'bold'}}>   Admin Experienece*:</span> {formData.adminExperienece || ""}
    </Typography>
    <Divider/>
    </div>

    )}
  </Grid>


  <Grid item xs={12} sm={6}>
  {formData.corporateExperience && (
        <div>
    <Typography variant="h5" color="textSecondary" sx={{lineHeight:2.43}}>
     <span style={{fontWeight:'bold'}}>   Corporate Experience*:</span> {formData.corporateExperience || ""}
    </Typography>
    <Divider/>
    </div>

    )}
  </Grid>

  <Grid item xs={12} sm={6}>
  {formData.researchExperience && (
        <div>
    <Typography variant="h5" color="textSecondary" sx={{lineHeight:2.43}}>
     <span style={{fontWeight:'bold'}}>   Research Experience*:</span> {formData.researchExperience || ""}
    </Typography>
    <Divider/>
    </div>

    )}
  </Grid>

  {/* teachingExperience:"", */}

  
  <Grid item xs={12} sm={6}>
  {formData.teachingExperience && (
        <div>
    <Typography variant="h5" color="textSecondary" sx={{lineHeight:2.43}}>
     <span style={{fontWeight:'bold'}}>   Teaching Experience*:</span> {formData.teachingExperience || ""}
    </Typography>
    <Divider/>
    </div>

    )}
  </Grid>


  {/* <Grid item xs={12} sm={6}>
  {formData.curriculum_vitae.name && (
    <div>
      <Typography variant="body2" color="textSecondary">
        <span style={{ fontWeight: 'bold' }}>Attach your Curriculum Vitae:</span> {formData.curriculum_vitae ? formData.curriculum_vitae.name : ""}
      </Typography>
      <Divider />
    </div>
  )}
</Grid> */}

<Grid item xs={12} sm={6}>
  {formData.MemberofSocieties && (
    <div>
      <Typography variant="h5" color="textSecondary" sx={{lineHeight:2.43}}>
        <span style={{ fontWeight: 'bold' }}>Membership of other Societies*:</span> {formData.MemberofSocieties || ""}
      </Typography>
      <Divider />
    </div>
  )}
</Grid>

<Grid item xs={12} sm={6}>
  {formData.Publications && (
    <div>
     <Typography variant="h5" color="textSecondary" sx={{lineHeight:2.43}}>
        <span style={{ fontWeight: 'bold' }}>Publications*(number):</span> {formData.Publications || ""}
      </Typography>
      <Divider />
    </div>
  )}
</Grid>

<Grid item xs={12} sm={6}>
  {formData.Books && (
    <div>
      <Typography variant="h5" color="textSecondary" sx={{lineHeight:2.43}}>
        <span style={{ fontWeight: 'bold' }}>Books*(number):</span> {formData.Books || ""}
      </Typography>
      <Divider />
    </div>
  )}
</Grid>

<Grid item xs={12} sm={6}>
  {formData.Patents && (
    <div>
      <Typography variant="h5" color="textSecondary" sx={{lineHeight:2.43}}>
        <span style={{ fontWeight: 'bold' }}>Patents* (Awarded number)*:</span> {formData.Patents || ""}
      </Typography>
      <Divider />
    </div>
  )}
</Grid>

<Grid item xs={12} sm={6}>
  {formData.Technology_Transferred && (
    <div>
      <Typography variant="h5" color="textSecondary" sx={{lineHeight:2.43}}>
        <span style={{ fontWeight: 'bold' }}>Technology Transferred* (details):</span> {formData.Technology_Transferred || ""}
      </Typography>
      <Divider />
    </div>
  )}
</Grid>

<Grid item xs={12} sm={6}>

  {/* {formData.Awards && (
    <div>
      <Typography variant="body2" color="textSecondary">
        <span style={{ fontWeight: 'bold' }}>Awards*:</span> {formData.Awards || ""}
      </Typography>
      <Divider />
    </div>
  )} */}
</Grid>

  {/* ... repeat for other fields ... */}

  <Grid item xs={12} sm={6}>
  {formData.NameOfSpouse && (
    <div>
      <Typography variant="h5" color="textSecondary" sx={{lineHeight:2.43}}>
        <span style={{ fontWeight: 'bold' }}>Name of the spouse:</span> {formData.NameOfSpouse || ""}
      </Typography>
      <Divider />
    </div>
  )}
</Grid>

<Grid item xs={12} sm={6}>
  {formData.number_of_children && (
    <div>
      <Typography variant="h5" color="textSecondary" sx={{lineHeight:2.43}}>
        <span style={{ fontWeight: 'bold' }}>Children (no.):</span> {formData.number_of_children || ""}
      </Typography>
      <Divider />
    </div>
  )}
</Grid>

<Grid item xs={12} sm={6}>
  {formData.children && (
    <div>
      <Typography variant="h5" color="textSecondary" sx={{lineHeight:2.43}}>
        <span style={{ fontWeight: 'bold' }}>Names Of Children:</span> {formData.children || ""}
      </Typography>
      <Divider />
    </div>
  )}
</Grid>

<Grid item xs={12} sm={6}>
  {formData.UniqueNationalId && (
    <div>
      <Typography variant="h5" color="textSecondary" sx={{lineHeight:2.43}}>
        <span style={{ fontWeight: 'bold' }}>Unique National ID:</span> {formData.UniqueNationalId || ""}
      </Typography>
      <Divider />
    </div>
  )}
</Grid>

<Grid item xs={12} sm={6}>
  {formData.supervised_phds && (
    <div>
      <Typography variant="h5" color="textSecondary" sx={{lineHeight:2.43}}>
        <span style={{ fontWeight: 'bold' }}>Supervised Ph.Ds.:</span> {formData.supervised_phds || ""}
      </Typography>
      <Divider />
    </div>
  )}
</Grid>

<Grid item xs={12} sm={6}>
  {formData.lookForPhd && (
    <div>
     <Typography variant="h5" color="textSecondary" sx={{lineHeight:2.43}}>
        <span style={{ fontWeight: 'bold' }}>Looking for Ph.Ds.:</span> {formData.lookForPhd || ""}
      </Typography>
      <Divider />
    </div>
  )}
</Grid>
          </CardContent>
        </Card>
      </Stack>
      </>
      : <MandatoryForLogin open={openModal} onClose={handleCloseModal}/>
     }
    </div>
  );
};

export default page;
