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
import ImageUploader from "../components/ImageUploader";
import Header from "../components/header";
import CustomHeader from "../components/mobileHeader";
// import { BASE_ASSET_URL } from "../utils";
import SnackBar from "../components/SnackBar";

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
  FormControl,
  Select,
} from "@mui/material";

import { Padding, Password } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import axios from "axios";
import { BASE_ASSET_URL } from "../utils";
import Link from "next/link";

const membershipTypes = [
  "Life Member (Indian) Fee @ INR-10,500",
  "Life Member (International) Fee @ USD-525",
  "Associate Member (Indian) Fee @ INR-5500",
  "Associate Member (International) Fee @ USD-275",
  "Annual Member (Indian) Fee @ INR-2500",
  "Annual Member (International) Fee @ USD-125",
  "Institutional Member (Indian) Fee @ INR-51000",
  "Institutional Member (International) Fee @ USD-2100",
  "Corporate Member (Indian) Fee @ INR-51000",
  "Corporate Member (International) Fee @ USD-2100",
  "Honorary Member (only by invitation)",
  "Founding Member (only by invitation)",
];

const page = () => {
  const router = useRouter();
  const [userId, setUserId] = useState("");
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [snackBarSeverity, setSnackBarSeverity] = useState("");

  const [curriculum_vitae, setCurriculum_vitae] = useState("");
  const [profileimage, setProfileImage] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    profileImage: null,
    firstName: "",
    middleName: "",
    // lastName: "",
    familyName: "",
    designation: "",
    address: "",
    address_corresponding: "",
    membershipType: "",
    Official_email: "",
    // password: "",
    Personal_email: "",
    Contact_phone: "",
    // WhatsappNo: "",
    // Contact_residence: "",
    // twitter: "",
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

    teachingExperience: "",
    researchExperience: "",
    adminExperienece: "",
    corporateExperience: "",
  });

  const OpenSnackBar = (message, severity) => {
    setSnackBarMessage(message);
    setSnackBarSeverity(severity);
    setSnackBarOpen(true);
  };

  const handleClose = () => {
    setSnackBarOpen(false);
  };

  const handleInputChange = (fieldName) => (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: event.target.value,
    }));
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
      OpenSnackBar("Profile updated successfully!", "success");
      router.replace("/");
    } catch (err) {
      userId;
      OpenSnackBar("Form submission failed! please try again.", "error");
    }
  };

  useEffect(() => {
    // async function getLoginUser(){
    //   const user = await
    // }
    const userId = localStorage.getItem("userId");

    const token = localStorage.getItem("token");

    const getLoginUserDetails = async () => {
      const res = await axios.get(`${BASE_ASSET_URL}/members/${userId}`, {
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

  // console.log("profileimage----->", profileimage);

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
              formData={formData}
              setFormData={setFormData}
              profileimage={profileimage}
              editForm={true}
              sx={{ maxWidth: "100%" }}
            />
          </div>
          <div style={{ margin: "auto" }}>
            <h1 style={{ color: "#ffff" }} className="firstName">
              {formData.title} {formData.firstName} {formData.familyName}
            </h1>
            <a
              className="btn btn_new1"
              onClick={() =>
                window.open(
                 `${window.location.origin}/pleadge?name=${formData.title}%20${formData.firstName}%20${formData.middleName}%20${formData.familyName}&address=${formData.address}&designation=${formData.qualification}&email=${formData.Official_email}&mobileNo=${formData.Contact_phone}'`
                )
              }
            >
              View Pledge
            </a>
            {/* <button onClick={()=>router.push(`/pleadge')}>pleadge</button> */}
            <h4 className="memberShipType" style={{ color: "#ffff" }}>
              {formData.membershipType}
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

          padding: {
            md: 5,
          },
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
            {/* <h2 style={{textAlign: 'center'}}>Edit Profile</h2> */}

            <Grid container spacing={2}>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  value={formData.membershipType || ""}
                  onChange={handleInputChange("membershipType")}
                  fullWidth
                  select
                  SelectProps={{ native: true }}
                  InputLabelProps={{
                    style: {
                      fontSize: 12, // Adjust the label font size as needed
                    },
                  }}
                  InputProps={{
                    style: { fontSize: 12 },
                  }}
                >
                  <option value="">Select Membership Type</option>
                  {membershipTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
          
                </TextField>
              </Grid> */}
              <Grid item xs={12} sm={6}>
                <TextField
                  value={formData.title || ""}
                  onChange={handleInputChange("title")}
                  fullWidth
                  select
                  InputLabelProps={{
                    style: {
                      fontSize: 12, // Adjust the label font size as needed
                    },
                  }}
                  InputProps={{
                    style: { fontSize: 12 },
                  }}
                  SelectProps={{ native: true }}
                >
                  <InputLabel sx={{ mb: 1 }}>Title</InputLabel>
                  <option value="">Select Title</option>
                  <option value="Prof. Dr.">Prof. Dr.</option>
                  <option value="Prof.">Prof.</option>
                  <option value="Dr.">Dr.</option>
                  <option value="Mr.">Mr.</option>
                  <option value="Ms.">Ms.</option>
                  {/* Add more membership types as needed */}
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange("firstName")}
                  fullWidth
                  InputLabelProps={{
                    style: {
                      fontSize: 12, // Adjust the label font size as needed
                    },
                  }}
                  InputProps={{
                    style: { fontSize: 12 },
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Middle Name"
                  value={formData.middleName}
                  onChange={handleInputChange("middleName")}
                  fullWidth
                  InputLabelProps={{
                    style: {
                      fontSize: 12, // Adjust the label font size as needed
                    },
                  }}
                  InputProps={{
                    style: { fontSize: 12 },
                  }}
                />
              </Grid>

              {/* <TextField
                    label="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange("lastName")}
                    fullWidth
                    InputLabelProps={{
                      style: {
                        fontSize: 12, // Adjust the label font size as needed
                      },
                    }}
                    InputProps={{
                      style: { fontSize: 12 },
                    }}
                  /> */}

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Family Name"
                  value={formData.familyName}
                  onChange={handleInputChange("familyName")}
                  fullWidth
                  InputLabelProps={{
                    style: {
                      fontSize: 12, // Adjust the label font size as needed
                    },
                  }}
                  InputProps={{
                    style: { fontSize: 12 },
                  }}
                />
              </Grid>

              <Grid item sx={12} sm={6}>
                <TextField
                  label="Present Position/Designation*"
                  value={formData.designation}
                  onChange={handleInputChange("designation")}
                  fullWidth
                  InputLabelProps={{
                    style: {
                      fontSize: 12, // Adjust the label font size as needed
                    },
                  }}
                  InputProps={{
                    style: { fontSize: 12 },
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Address(official)*"
                  value={formData.address}
                  onChange={handleInputChange("address")}
                  fullWidth
                  multiline
                  rows={4}
                  InputLabelProps={{
                    style: {
                      fontSize: 12, // Adjust the label font size as needed
                    },
                  }}
                  InputProps={{
                    style: { fontSize: 12 },
                  }}
                />
              </Grid>

              {/*  Next field */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="E-mail*"
                  value={formData.Official_email || ""}
                  onChange={handleInputChange("Official_email")}
                  fullWidth
                  InputLabelProps={{
                    style: {
                      fontSize: 12, // Adjust the label font size as needed
                    },
                  }}
                  InputProps={{
                    style: { fontSize: 12 },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Address(corresponding)*"
                  value={formData.address_corresponding || ""}
                  onChange={handleInputChange("address_corresponding")}
                  fullWidth
                  InputLabelProps={{
                    style: {
                      fontSize: 12, // Adjust the label font size as needed
                    },
                  }}
                  InputProps={{
                    style: { fontSize: 12 },
                  }}
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="E-mail(personal)"
                  value={formData.Personal_email || ""}
                  onChange={handleInputChange("Personal_email")}
                  fullWidth
                  InputLabelProps={{
                    style: {
                      fontSize: 12, // Adjust the label font size as needed
                    },
                  }}
                  InputProps={{
                    style: { fontSize: 12 },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <PhoneInput
                  value={formData.Contact_phone || ""}
                  onChange={(phone) =>
                    setFormData((prev) => ({
                      ...prev,
                      Contact_phone: phone,
                    }))
                  }
                  placeholder="Enter phone number"
                  country="in"
                />
              </Grid>

              {/* <TextField
                    label="Contact Phone(Official)*"
                    value={formData.Contact_phone || ""}
                    onChange={handleInputChange("Contact_phone")}
                    fullWidth
                    InputLabelProps={{
                      style: {
                        fontSize: 12, // Adjust the label font size as needed
                      },
                    }}
                    InputProps={{
                      style: { fontSize: 12 },
                    }}
                  /> */}
              {/* <TextField
                    label="Contact Phone(residence)"
                    value={formData.Contact_residence || ""}
                    onChange={handleInputChange("Contact_residence")}
                    fullWidth
                    InputLabelProps={{
                      style: {
                        fontSize: 12, // Adjust the label font size as needed
                      },
                    }}
                    InputProps={{
                      style: { fontSize: 12 },
                    }}
                  /> */}
              {/* <TextField
                    label="Twitter"
                    value={formData.twitter || ""}
                    onChange={handleInputChange("twitter")}
                    fullWidth
                    InputLabelProps={{
                      style: {
                        fontSize: 12, // Adjust the label font size as needed
                      },
                    }}
                    InputProps={{
                      style: { fontSize: 12 },
                    }}
                  /> */}
              <Grid item xs={12} sm={6}>
                {/* <TextField
                  value={formData.city || ""}
                  onChange={handleInputChange("city")}
                  fullWidth
                  select
                  SelectProps={{ native: true }}
                  InputLabelProps={{
                    style: {
                      fontSize: 12, // Adjust the label font size as needed
                    },
                  }}
                  InputProps={{
                    style: { fontSize: 12 },
                  }}
                >
                  <InputLabel sx={{ mb: 1 }}>City</InputLabel>
                  <option value="">Select City</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Noida">Noida</option>
                  <option value="Patna">Patna</option>
                  <option value="Bhopal">Bhopal</option>
                </TextField> */}

                <TextField
                  label="City"
                  value={formData.city || ""}
                  onChange={handleInputChange("city")}
                  fullWidth
                  InputLabelProps={{
                    style: {
                      fontSize: 12, // Adjust the label font size as needed
                    },
                  }}
                  InputProps={{
                    style: { fontSize: 12 },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                {/* <TextField
                  value={formData.Country || ""}
                  onChange={handleInputChange("Country")}
                  fullWidth
                  select
                  SelectProps={{ native: true }}
                  InputLabelProps={{
                    style: {
                      fontSize: 12, // Adjust the label font size as needed
                    },
                  }}
                  InputProps={{
                    style: { fontSize: 12 },
                  }}
                >
                  <InputLabel sx={{ mb: 1 }}>Country</InputLabel>
                  <option value="">Select Country</option>
                  <option value="India">India</option>
                  <option value="America">America</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Nepal">Nepal</option>
                </TextField> */}

                <TextField
                  label="Country*"
                  value={formData.Country || ""}
                  onChange={handleInputChange("Country")}
                  fullWidth
                  InputLabelProps={{
                    style: {
                      fontSize: 12, // Adjust the label font size as needed
                    },
                  }}
                  InputProps={{
                    style: { fontSize: 12 },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  // label="DOB*"
                  label="Date of Birth"
                  value={formData.DateofBirth || ""}
                  type="date"
                  onChange={handleInputChange("DateofBirth")}
                  fullWidth
                  InputLabelProps={{
                    style: {
                      fontSize: 12,
                    },
                  }}
                  InputLabelProps={{
                    shrink: true,
                    style: {
                      fontSize: 12,
                    },
                  }}
                  InputProps={{
                    style: { fontSize: 12 },
                    placeholder: "Select Date of Birth",
                  }}
                />
              </Grid>
              {/* Third Step */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Highest degree/qualification*"
                  value={formData.qualification || ""}
                  onChange={handleInputChange("qualification")}
                  fullWidth
                  InputLabelProps={{
                    style: {
                      fontSize: 12, // Adjust the label font size as needed
                    },
                  }}
                  InputProps={{
                    style: { fontSize: 12 },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Year of completion*"
                  value={formData.Yearofcompletion || ""}
                  onChange={handleInputChange("Yearofcompletion")}
                  fullWidth
                  type="number"
                  InputLabelProps={{
                    style: {
                      fontSize: 12, // Adjust the label font size as needed
                    },
                  }}
                  InputProps={{
                    style: { fontSize: 12 },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name of the University/Institution*"
                  value={formData.Institution || ""}
                  onChange={handleInputChange("Institution")}
                  fullWidth
                  InputLabelProps={{
                    style: {
                      fontSize: 12, // Adjust the label font size as needed
                    },
                  }}
                  InputProps={{
                    style: { fontSize: 12 },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Broad Specializations (Major Subjects)*"
                  value={formData.BroadSpecializations || ""}
                  onChange={handleInputChange("BroadSpecializations")}
                  fullWidth
                  InputLabelProps={{
                    style: {
                      fontSize: 12, // Adjust the label font size as needed
                    },
                  }}
                  InputProps={{
                    style: { fontSize: 12 },
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Specific Specializations(Core Subjects)*"
                  value={formData.SpecificSpecialization || ""}
                  onChange={handleInputChange("SpecificSpecialization")}
                  fullWidth
                  InputLabelProps={{
                    style: {
                      fontSize: 12, // Adjust the label font size as needed
                    },
                  }}
                  InputProps={{
                    style: { fontSize: 12 },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  placeholder="Type Below upto 10 keywords separated with commas(,) and related to you research and special skills for the purpose of search and consultancy to industry, organizations, and Government*"
                  value={formData.research_keyword || ""}
                  onChange={handleInputChange("research_keyword")}
                  multiline
                  rows={4}
                  fullWidth
                  InputLabelProps={{
                    style: {
                      whiteSpace: "wrap", // Allow the label to wrap
                      width: "100%",
                      fontSize: 12, // Set the label width to 100% of the TextField
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontSize: 12 }}>
                    Attach your Curriculum Vitae
                  </Typography>
                  <Button
                    variant="contained"
                    component="label"
                    sx={{
                      marginLeft: "40%",
                      width: "19%",
                      textWrap: "nowrap",
                      background: "#1f899d",
                      color: "white",
                    }}
                  >
                    Attach
                    <input
                      type="file"
                      style={{ display: "none" }} // Completely hide the input from view
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          curriculum_vitae: e.target.files[0], // Set file to state
                        }))
                      }
                    />
                  </Button>
                </div>
              </Grid>
              {formData.MemberofSocieties && (
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Membership of other societies"
                    value={formData.MemberofSocieties || ""}
                    onChange={handleInputChange("MemberofSocieties")}
                    multiline
                    rows={5}
                    fullWidth
                    InputLabelProps={{
                      style: {
                        fontSize: 12, // Adjust the label font size as needed
                      },
                    }}
                    InputProps={{
                      style: { fontSize: 12 },
                    }}
                  />
                </Grid>
              )}

              {formData.Publications && (
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Publications*(number)"
                    value={formData.Publications || ""}
                    onChange={handleInputChange("Publications")}
                    fullWidth
                    type="number"
                    InputLabelProps={{
                      style: {
                        fontSize: 12, // Adjust the label font size as needed
                      },
                    }}
                    InputProps={{
                      style: { fontSize: 12 },
                    }}
                  />
                </Grid>
              )}

              {formData.Books && (
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Books*(number)"
                    value={formData.Books || ""}
                    onChange={handleInputChange("Books")}
                    fullWidth
                    type="number"
                    InputLabelProps={{
                      style: {
                        fontSize: 12, // Adjust the label font size as needed
                      },
                    }}
                    InputProps={{
                      style: { fontSize: 12 },
                    }}
                  />
                </Grid>
              )}
              {formData.Patents && (
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Patents* (Awarded number)*"
                    value={formData.Patents || ""}
                    onChange={handleInputChange("Patents")}
                    fullWidth
                    type="number"
                    InputLabelProps={{
                      style: {
                        fontSize: 12, // Adjust the label font size as needed
                      },
                    }}
                    InputProps={{
                      style: { fontSize: 12 },
                    }}
                  />
                </Grid>
              )}

              {formData.Technology_Transferred && (
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Technology Transferred* (details)"
                    value={formData.Technology_Transferred || ""}
                    onChange={handleInputChange("Technology_Transferred")}
                    fullWidth
                    multiline
                    rows={4}
                    InputLabelProps={{
                      style: {
                        fontSize: 12, // Adjust the label font size as needed
                      },
                    }}
                    InputProps={{
                      style: { fontSize: 12 },
                    }}
                  />
                </Grid>
              )}

              {formData.Publications && (
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Awards*"
                    value={formData.Awards || ""}
                    onChange={handleInputChange("Awards")}
                    fullWidth
                    multiline
                    rows={4}
                    InputLabelProps={{
                      style: {
                        fontSize: 12, // Adjust the label font size as needed
                      },
                    }}
                    InputProps={{
                      style: { fontSize: 12 },
                    }}
                  />
                </Grid>
              )}
              {formData.teachingExperience && (
                <Grid item sx={12} sm={6}>
                  <TextField
                    label="Teaching Experience*"
                    value={formData.teachingExperience || ""}
                    type="number"
                    onChange={handleInputChange("teachingExperience")}
                    fullWidth
                    InputLabelProps={{
                      style: {
                        fontSize: 12, // Adjust the label font size as needed
                      },
                    }}
                    InputProps={{
                      style: { fontSize: 12 },
                    }}
                  />
                </Grid>
              )}

              {formData.researchExperience && (
                <Grid item sx={12} sm={6}>
                  <TextField
                    label="Research Experience*"
                    value={formData.researchExperience || ""}
                    type="number"
                    onChange={handleInputChange("researchExperience")}
                    fullWidth
                    InputLabelProps={{
                      style: {
                        fontSize: 12, // Adjust the label font size as needed
                      },
                    }}
                    InputProps={{
                      style: { fontSize: 12 },
                    }}
                  />
                </Grid>
              )}

              {formData.adminExperienece && (
                <Grid item sx={12} sm={6}>
                  <TextField
                    label="Admin Experience*"
                    value={formData.adminExperienece || ""}
                    type="number"
                    onChange={handleInputChange("adminExperienece")}
                    fullWidth
                    InputLabelProps={{
                      style: {
                        fontSize: 12, // Adjust the label font size as needed
                      },
                    }}
                    InputProps={{
                      style: { fontSize: 12 },
                    }}
                  />
                </Grid>
              )}
              {formData.corporateExperience && (
                <Grid item sx={12} sm={6}>
                  <TextField
                    label="Corporate Experience*"
                    value={formData.corporateExperience || ""}
                    type="number"
                    onChange={handleInputChange("corporateExperience")}
                    fullWidth
                    InputLabelProps={{
                      style: {
                        fontSize: 12, // Adjust the label font size as needed
                      },
                    }}
                    InputProps={{
                      style: { fontSize: 12 },
                    }}
                  />
                </Grid>
              )}
              {/* <InputLabel
                sx={{ fontWeight: "bold", color: "#000000", fontSize: 12 }}
              >
                Family Details (optional){" "}
              </InputLabel> */}
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  label="Name of the spouse"
                  value={formData.NameOfSpouse || ""}
                  onChange={handleInputChange("NameOfSpouse")}
                  fullWidth
                  InputLabelProps={{
                    style: {
                      fontSize: 12, 
                    },
                  }}
                  InputProps={{
                    style: { fontSize: 12 },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Children (no.)"
                  value={formData.number_of_children || ""}
                  onChange={handleInputChange("number_of_children")}
                  type="number"
                  fullWidth
                  InputLabelProps={{
                    style: {
                      fontSize: 12, 
                    },
                  }}
                  InputProps={{
                    style: { fontSize: 12 },
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Names Of Children"
                  value={formData.children || ""}
                  onChange={handleInputChange("children")}
                  fullWidth
                  InputLabelProps={{
                    style: {
                      fontSize: 12, 
                    },
                  }}
                  InputProps={{
                    style: { fontSize: 12 },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Unique National ID"
                  value={formData.UniqueNationalId || ""}
                  onChange={handleInputChange("UniqueNationalId")}
                  fullWidth
                />
              </Grid> */}

              {/* <Grid item xs={12} sm={6}>
                <TextField
                  value={formData.supervised_phds || ""}
                  onChange={handleInputChange("supervised_phds")}
                  fullWidth
                  select
                  SelectProps={{ native: true }}
                >
                  <InputLabel sx={{ mb: 1 }}>
                    Have you supervised Ph.Ds.?
                  </InputLabel>
                  <option value="">Have you supervised Ph.Ds.?</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </TextField>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  value={formData.lookForPhd || ""}
                  onChange={handleInputChange("lookForPhd")}
                  fullWidth
                  select
                  SelectProps={{ native: true }}
                >
                  <InputLabel sx={{ mb: 1 }}>
                    Have you supervised Ph.Ds.?
                  </InputLabel>
                  <option value="">Have you supervised Ph.Ds.?</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </TextField>
              </Grid> */}

              {/* <Grid item xs={12} sm={6}>
  <FormControl fullWidth>
    <InputLabel htmlFor="phd-supervision" style={{fontSize:"12px"}}>Have you supervised Ph.Ds.?</InputLabel>
    <Select
      value={formData.lookForPhd || ""}
      onChange={handleInputChange("lookForPhd")}
      fullWidth
      native
      inputProps={{
        id: 'phd-supervision',
      }}
    >
      <option value=""></option>
      <option value="basic">Yes</option>
      <option value="premium">No</option>
    </Select>
  </FormControl>
</Grid> */}
            </Grid>

            <Stack spacing={2}>
              <Button
                variant="contained"
                style={{
                  background: "#1f899d",
                  borderRadius: "16px",
                  marginTop: "10px",
                }}
                // disabled={formData.termsAccepted ? false : true}
                onClick={handleSubmit}
                // sx={{ fontSize: 12 }}
                sx={{
                  fontSize: 12,
                  padding: { xs: "8px 16px", md: "10px 20px" },
                }}
              >
                Update
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
      <SnackBar
        open={snackBarOpen}
        onClose={handleClose}
        message={snackBarMessage}
        severity={snackBarSeverity}
      />
    </div>
  );
};

export default page;

// "use client";
// import React, { useState, useEffect } from "react";
// import { styled } from "@mui/material/styles";
// import Stack from "@mui/material/Stack";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import Check from "@mui/icons-material/Check";
// import SettingsIcon from "@mui/icons-material/Settings";
// import GroupAddIcon from "@mui/icons-material/GroupAdd";
// import VideoLabelIcon from "@mui/icons-material/VideoLabel";
// import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
// import PublishIcon from "@mui/icons-material/Publish";
// import ImageUploader from "../components/ImageUploader";
// import Header from "../components/header";
// import CustomHeader from '../components/mobileHeader'

// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

// import {
//   Box,
//   Button,
//   ButtonGroup,
//   Card,
//   CardContent,
//   Checkbox,
//   FormControlLabel,
//   InputLabel,
//   TextField,
//   Typography,
//   Grid,
// } from "@mui/material";

// import { Padding, Password } from "@mui/icons-material";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { BASE_ASSET_URL } from "../utils";
// import Link from "next/link";

// const membershipTypes = [
//   "Life Member (Indian) Fee @ INR-10,500",
//   "Life Member (International) Fee @ USD-525",
//   "Annual Member (Indian) Fee @ INR-2500",
//   "Annual Member (International) Fee @ USD-125",
//   "Institutional Member (Indian) Fee @ INR-51000",
//   "Institutional Member (International) Fee @ USD-2100",
//   "Corporate Member (Indian) Fee @ INR-51000",
//   "Corporate Member (International) Fee @ USD-2100",
//   "Honorary Member (only by invitation)",
//   "Founding Member (only by invitation)",
// ];

// const page = () => {
//   const router = useRouter();
//   const [userId, setUserId] = useState("");

//   const [curriculum_vitae, setCurriculum_vitae] = useState("");
//   const [profileimage, setProfileImage] = useState("");
//   const [formData, setFormData] = useState({
//     title: "",
//     profileImage: null,
//     firstName: "",
//     middleName: "",
//     // lastName: "",
//     familyName: "",
//     address: "",
//     address_corresponding: "",
//     membershipType: "",
//     Official_email: "",
//     // password: "",
//     Personal_email: "",
//     Contact_phone: "",
//     // WhatsappNo: "",
//     // Contact_residence: "",
//     // twitter: "",
//     DateofBirth: "",
//     city: "",
//     Country: "",
//     qualification: "",
//     Yearofcompletion: "",
//     Institution: "",
//     BroadSpecializations: "",
//     SpecificSpecialization: "",
//     research_keyword: "",
//     MemberofSocieties: "",
//     Publications: "",
//     Books: "",
//     Patents: "",
//     Technology_Transferred: "",
//     Awards: "",
//     NameOfSpouse: "",
//     number_of_children: "",
//     children: "",
//     UniqueNationalId: "",
//     supervised_phds: "",
//     noOfPhdSupervised: "",
//     stillSupervised: "",
//     lookForPhd: "",
//     advertiseFellowship: "",
//     curriculum_vitae: null,
//     termsAccepted: false,
//   });

//   const handleInputChange = (fieldName) => (event) => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [fieldName]: event.target.value,
//     }));
//   };

//   const handleSubmit = async () => {
//     const formdata = new FormData();
//     // formData.append("profileImage",profileimage )
//     for (let key of Object.keys(formData)) {
//       formdata.append(key, formData[key]);
//     }

//     if (formData.profileImage.originalname) {
//       formdata.delete("profileImage");
//     }

//     if (formData.curriculum_vitae.originalname) {
//       formdata.delete("curriculum_vitae");
//     }

//     try {
//       const res = await axios.patch(
//         `${BASE_ASSET_URL}/members/${userId}`,
//         formdata
//       );
//       alert("Form Updated Successfully!");
//       router.replace("/");
//     } catch (err) {
//       alert("Form submission failed! please try again.");
//     }
//   };

//   useEffect(() => {
//     // async function getLoginUser(){
//     //   const user = await
//     // }
//     const userId = localStorage.getItem("userId");

//     const token = localStorage.getItem("token");

//     const getLoginUserDetails = async () => {
//       const res = await axios.get(`${BASE_ASSET_URL}/members/${userId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       console.log("editProfile details-->", res.data);
//       setCurriculum_vitae(res.data.curriculum_vitae);
//       setProfileImage(res.data.profileImage.filename);

//       const userData = Object.keys(res.data);

//       userData.forEach((item) => {
//         if (item !== "password" && item !== "_id" && item !== "__v") {
//           setFormData((prev) => ({
//             ...prev,
//             [item]: res.data[item],
//           }));
//         }
//       });
//       //   setfirstName(res.data.firstName);
//       //   setfamilyName(res.data.familyName);
//       //   setmembershipType(res.data.membershipType);
//       //   setProfileImage(res.data.profileImage.filename)
//       //   console.log("profileImage--->",res.data.profileImage.filename)
//     };

//     if (userId) {
//       getLoginUserDetails(userId, token);
//     }

//     setUserId(userId);
//   }, []);

//   // console.log("userData----->", formData);

//   // console.log("profileimage----->", profileimage);

//   return (
//     <div>
//       {/* <Header/> */}
//       {/* <CustomHeader/> */}
//       <div className="header-container">
//         <Header />
//       </div>
//       <div className="mobile-header-container">
//         <CustomHeader />
//       </div>

//       <div className="editProfile"
//         // style={{
//         //   backgroundColor: "#257991",
//         //   width: "100%",
//         //   height: "250px",
//         //   marginTop: "14rem",

//         // }}
//       >
//         <div
//           // style={{
//           //   display: "flex",
//           //   justifyContent: "space-between",
//           //   marginLeft: "auto",
//           //   marginRight: "auto",
//           //   maxWidth: "900px",

//           // }}
//           className="profileImageHeader"
//         >
//           <div className="mobileProfile">
//             <ImageUploader
//               formData={formData}
//               setFormData={setFormData}
//               profileimage={profileimage}
//               editForm={true}
//               sx={{ maxWidth: "100%" }}
//             />
//           </div>

//           <div style={{ margin: "auto" }}>
//             <h1 style={{ color: "#ffff" }} className="firstName">
//               {formData.firstName} {formData.familyName}
//             </h1>
//             <h4 className="memberShipType" style={{ color: "#ffff" }}>{formData.membershipType}</h4>
//           </div>
//         </div>
//       </div>

//       <Stack
//         sx={{
//           width: "100%",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           backgroundColor: "#eff7f9",
//           padding: 5,
//           //   marginTop:50
//         }}
//       >
//         <Card
//           elevation={2}
//           sx={{
//             width: "100%",
//             maxWidth: "900px",
//             marginX: "auto",
//           }}
//         >
//           <CardContent>
//             {/* <h2 style={{textAlign: 'center'}}>Edit Profile</h2> */}

//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   value={formData.membershipType || ""}
//                   onChange={handleInputChange("membershipType")}
//                   fullWidth
//                   select
//                   SelectProps={{ native: true }}
//                   InputLabelProps={{
//                     style: {
//                       fontSize: 12, // Adjust the label font size as needed
//                     },
//                   }}
//                   InputProps={{
//                     style: { fontSize: 12 },
//                   }}
//                 >
//                   <option value="">Select Membership Type</option>
//                   {membershipTypes.map((type) => (
//                     <option key={type} value={type}>
//                       {type}
//                     </option>
//                   ))}
//                   {/* Add more membership types as needed */}
//                 </TextField>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   value={formData.title || ""}
//                   onChange={handleInputChange("title")}
//                   fullWidth
//                   select
//                   InputLabelProps={{
//                     style: {
//                       fontSize: 12, // Adjust the label font size as needed
//                     },
//                   }}
//                   InputProps={{
//                     style: { fontSize: 12 },
//                   }}
//                   SelectProps={{ native: true }}
//                 >
//                   <InputLabel sx={{ mb: 1 }}>Title</InputLabel>
//                   <option value="">Select Title</option>
//                   <option value="ProfessorDoctor">Prof. Dr.</option>
//                   <option value="Professor">Prof.</option>
//                   <option value="Doctor">Dr.</option>
//                   <option value="Mr">Mr.</option>
//                   <option value="Ms">Ms.</option>
//                   {/* Add more membership types as needed */}
//                 </TextField>
//               </Grid>

//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="First Name"
//                   value={formData.firstName}
//                   onChange={handleInputChange("firstName")}
//                   fullWidth
//                   InputLabelProps={{
//                     style: {
//                       fontSize: 12, // Adjust the label font size as needed
//                     },
//                   }}
//                   InputProps={{
//                     style: { fontSize: 12 },
//                   }}
//                 />
//               </Grid>

//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Middle Name"
//                   value={formData.middleName}
//                   onChange={handleInputChange("middleName")}
//                   fullWidth
//                   InputLabelProps={{
//                     style: {
//                       fontSize: 12, // Adjust the label font size as needed
//                     },
//                   }}
//                   InputProps={{
//                     style: { fontSize: 12 },
//                   }}
//                 />
//               </Grid>

//               {/* <TextField
//                     label="Last Name"
//                     value={formData.lastName}
//                     onChange={handleInputChange("lastName")}
//                     fullWidth
//                     InputLabelProps={{
//                       style: {
//                         fontSize: 12, // Adjust the label font size as needed
//                       },
//                     }}
//                     InputProps={{
//                       style: { fontSize: 12 },
//                     }}
//                   /> */}

//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Family Name"
//                   value={formData.familyName}
//                   onChange={handleInputChange("familyName")}
//                   fullWidth
//                   InputLabelProps={{
//                     style: {
//                       fontSize: 12, // Adjust the label font size as needed
//                     },
//                   }}
//                   InputProps={{
//                     style: { fontSize: 12 },
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Address(official)*"
//                   value={formData.address}
//                   onChange={handleInputChange("address")}
//                   fullWidth
//                   multiline
//                   rows={4}
//                   InputLabelProps={{
//                     style: {
//                       fontSize: 12, // Adjust the label font size as needed
//                     },
//                   }}
//                   InputProps={{
//                     style: { fontSize: 12 },
//                   }}
//                 />
//               </Grid>

//               {/*  Next field */}
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="E-mail*"
//                   value={formData.Official_email || ""}
//                   onChange={handleInputChange("Official_email")}
//                   fullWidth
//                   InputLabelProps={{
//                     style: {
//                       fontSize: 12, // Adjust the label font size as needed
//                     },
//                   }}
//                   InputProps={{
//                     style: { fontSize: 12 },
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Address(corresponding)*"
//                   value={formData.address_corresponding || ""}
//                   onChange={handleInputChange("address_corresponding")}
//                   fullWidth
//                   InputLabelProps={{
//                     style: {
//                       fontSize: 12, // Adjust the label font size as needed
//                     },
//                   }}
//                   InputProps={{
//                     style: { fontSize: 12 },
//                   }}
//                   multiline
//                   rows={4}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="E-mail(personal)"
//                   value={formData.Personal_email || ""}
//                   onChange={handleInputChange("Personal_email")}
//                   fullWidth
//                   InputLabelProps={{
//                     style: {
//                       fontSize: 12, // Adjust the label font size as needed
//                     },
//                   }}
//                   InputProps={{
//                     style: { fontSize: 12 },
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <PhoneInput
//                   value={formData.Contact_phone || ""}
//                   onChange={(phone) =>
//                     setFormData((prev) => ({
//                       ...prev,
//                       Contact_phone: phone,
//                     }))
//                   }
//                   placeholder="Enter phone number"
//                   country="in"
//                 />
//               </Grid>

//               {/* <TextField
//                     label="Contact Phone(Official)*"
//                     value={formData.Contact_phone || ""}
//                     onChange={handleInputChange("Contact_phone")}
//                     fullWidth
//                     InputLabelProps={{
//                       style: {
//                         fontSize: 12, // Adjust the label font size as needed
//                       },
//                     }}
//                     InputProps={{
//                       style: { fontSize: 12 },
//                     }}
//                   /> */}
//               {/* <TextField
//                     label="Contact Phone(residence)"
//                     value={formData.Contact_residence || ""}
//                     onChange={handleInputChange("Contact_residence")}
//                     fullWidth
//                     InputLabelProps={{
//                       style: {
//                         fontSize: 12, // Adjust the label font size as needed
//                       },
//                     }}
//                     InputProps={{
//                       style: { fontSize: 12 },
//                     }}
//                   /> */}
//               {/* <TextField
//                     label="Twitter"
//                     value={formData.twitter || ""}
//                     onChange={handleInputChange("twitter")}
//                     fullWidth
//                     InputLabelProps={{
//                       style: {
//                         fontSize: 12, // Adjust the label font size as needed
//                       },
//                     }}
//                     InputProps={{
//                       style: { fontSize: 12 },
//                     }}
//                   /> */}
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   value={formData.city || ""}
//                   onChange={handleInputChange("city")}
//                   fullWidth
//                   select
//                   SelectProps={{ native: true }}
//                   InputLabelProps={{
//                     style: {
//                       fontSize: 12, // Adjust the label font size as needed
//                     },
//                   }}
//                   InputProps={{
//                     style: { fontSize: 12 },
//                   }}
//                 >
//                   <InputLabel sx={{ mb: 1 }}>City</InputLabel>
//                   <option value="">Select City</option>
//                   <option value="Delhi">Delhi</option>
//                   <option value="Noida">Noida</option>
//                   <option value="Patna">Patna</option>
//                   <option value="Bhopal">Bhopal</option>
//                 </TextField>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   value={formData.Country || ""}
//                   onChange={handleInputChange("Country")}
//                   fullWidth
//                   select
//                   SelectProps={{ native: true }}
//                   InputLabelProps={{
//                     style: {
//                       fontSize: 12, // Adjust the label font size as needed
//                     },
//                   }}
//                   InputProps={{
//                     style: { fontSize: 12 },
//                   }}
//                 >
//                   <InputLabel sx={{ mb: 1 }}>Country</InputLabel>
//                   <option value="">Select Country</option>
//                   <option value="India">India</option>
//                   <option value="America">America</option>
//                   <option value="Pakistan">Pakistan</option>
//                   <option value="Nepal">Nepal</option>
//                 </TextField>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   // label="DOB*"

//                   value={formData.DateofBirth || ""}
//                   type="date"
//                   onChange={handleInputChange("DateofBirth")}
//                   fullWidth
//                   InputLabelProps={{
//                     style: {
//                       fontSize: 12, // Adjust the label font size as needed
//                     },
//                   }}
//                   InputProps={{
//                     style: { fontSize: 12 },
//                   }}
//                 />
//               </Grid>
//               {/* Third Step */}
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Highest degree/qualification*"
//                   value={formData.qualification || ""}
//                   onChange={handleInputChange("qualification")}
//                   fullWidth
//                   InputLabelProps={{
//                     style: {
//                       fontSize: 12, // Adjust the label font size as needed
//                     },
//                   }}
//                   InputProps={{
//                     style: { fontSize: 12 },
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Year of completion*"
//                   value={formData.Yearofcompletion || ""}
//                   onChange={handleInputChange("Yearofcompletion")}
//                   fullWidth
//                   type="number"
//                   InputLabelProps={{
//                     style: {
//                       fontSize: 12, // Adjust the label font size as needed
//                     },
//                   }}
//                   InputProps={{
//                     style: { fontSize: 12 },
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Name of the University/Institution*"
//                   value={formData.Institution || ""}
//                   onChange={handleInputChange("Institution")}
//                   fullWidth
//                   InputLabelProps={{
//                     style: {
//                       fontSize: 12, // Adjust the label font size as needed
//                     },
//                   }}
//                   InputProps={{
//                     style: { fontSize: 12 },
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Broad Specializations (Major Subjects)*"
//                   value={formData.BroadSpecializations || ""}
//                   onChange={handleInputChange("BroadSpecializations")}
//                   fullWidth
//                   InputLabelProps={{
//                     style: {
//                       fontSize: 12, // Adjust the label font size as needed
//                     },
//                   }}
//                   InputProps={{
//                     style: { fontSize: 12 },
//                   }}
//                 />
//               </Grid>

//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Specific Specializations(Core Subjects)*"
//                   value={formData.SpecificSpecialization || ""}
//                   onChange={handleInputChange("SpecificSpecialization")}
//                   fullWidth
//                   InputLabelProps={{
//                     style: {
//                       fontSize: 12, // Adjust the label font size as needed
//                     },
//                   }}
//                   InputProps={{
//                     style: { fontSize: 12 },
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   placeholder="Type Below upto 10 keywords separated with commas(,) and related to you research and special skills for the purpose of search and consultancy to industry, organizations, and Government*"
//                   value={formData.research_keyword || ""}
//                   onChange={handleInputChange("research_keyword")}
//                   multiline
//                   rows={4}
//                   fullWidth
//                   InputLabelProps={{
//                     style: {
//                       whiteSpace: "wrap", // Allow the label to wrap
//                       width: "100%",
//                       fontSize: 12, // Set the label width to 100% of the TextField
//                     },
//                   }}
//                 />
//               </Grid>

//               <Grid item xs={12} sm={6}>
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                   }}
//                 >
//                   <Typography variant="subtitle1" sx={{ fontSize: 12 }}>
//                     Attach your Curriculum Vitae
//                   </Typography>
//                   <Button
//                     variant="contained"
//                     component="label"
//                     sx={{
//                       marginLeft: "40%",
//                       width: "19%",
//                       textWrap: "nowrap",
//                     }}
//                   >
//                     Upload File
//                     <input
//                       type="file"
//                       style={{ visibility: "hidden" }}
//                       onChange={(e) =>
//                         setFormData((prev) => ({
//                           ...prev,
//                           curriculum_vitae: e.target.files[0],
//                         }))
//                       }
//                     />
//                   </Button>
//                 </div>
//               </Grid>

//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Membership of other Societie*"
//                   value={formData.MemberofSocieties || ""}
//                   onChange={handleInputChange("MemberofSocieties")}
//                   multiline
//                   rows={5}
//                   fullWidth
//                   InputLabelProps={{
//                     style: {
//                       fontSize: 12, // Adjust the label font size as needed
//                     },
//                   }}
//                   InputProps={{
//                     style: { fontSize: 12 },
//                   }}
//                 />
//               </Grid>

//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Publications*(number)"
//                   value={formData.Publications || ""}
//                   onChange={handleInputChange("Publications")}
//                   fullWidth
//                   type="number"
//                   InputLabelProps={{
//                     style: {
//                       fontSize: 12, // Adjust the label font size as needed
//                     },
//                   }}
//                   InputProps={{
//                     style: { fontSize: 12 },
//                   }}
//                 />
//               </Grid>

//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Books*(number)"
//                   value={formData.Books || ""}
//                   onChange={handleInputChange("Books")}
//                   fullWidth
//                   type="number"
//                   InputLabelProps={{
//                     style: {
//                       fontSize: 12, // Adjust the label font size as needed
//                     },
//                   }}
//                   InputProps={{
//                     style: { fontSize: 12 },
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Patents* (Awarded number)*"
//                   value={formData.Patents || ""}
//                   onChange={handleInputChange("Patents")}
//                   fullWidth
//                   type="number"
//                   InputLabelProps={{
//                     style: {
//                       fontSize: 12, // Adjust the label font size as needed
//                     },
//                   }}
//                   InputProps={{
//                     style: { fontSize: 12 },
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Technology Transferred* (details)"
//                   value={formData.Technology_Transferred || ""}
//                   onChange={handleInputChange("Technology_Transferred")}
//                   fullWidth
//                   multiline
//                   rows={4}
//                   InputLabelProps={{
//                     style: {
//                       fontSize: 12, // Adjust the label font size as needed
//                     },
//                   }}
//                   InputProps={{
//                     style: { fontSize: 12 },
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Awards*"
//                   value={formData.Awards || ""}
//                   onChange={handleInputChange("Awards")}
//                   fullWidth
//                   multiline
//                   rows={4}
//                   InputLabelProps={{
//                     style: {
//                       fontSize: 12, // Adjust the label font size as needed
//                     },
//                   }}
//                   InputProps={{
//                     style: { fontSize: 12 },
//                   }}
//                 />
//               </Grid>

//               {/* <InputLabel
//                 sx={{ fontWeight: "bold", color: "#000000", fontSize: 12 }}
//               >
//                 Family Details (optional){" "}
//               </InputLabel> */}
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Name of the spouse"
//                   value={formData.NameOfSpouse || ""}
//                   onChange={handleInputChange("NameOfSpouse")}
//                   fullWidth
//                   InputLabelProps={{
//                     style: {
//                       fontSize: 12, // Adjust the label font size as needed
//                     },
//                   }}
//                   InputProps={{
//                     style: { fontSize: 12 },
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Children (no.)"
//                   value={formData.number_of_children || ""}
//                   onChange={handleInputChange("number_of_children")}
//                   type="number"
//                   fullWidth
//                   InputLabelProps={{
//                     style: {
//                       fontSize: 12, // Adjust the label font size as needed
//                     },
//                   }}
//                   InputProps={{
//                     style: { fontSize: 12 },
//                   }}
//                 />
//               </Grid>

//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Names Of Children"
//                   value={formData.children || ""}
//                   onChange={handleInputChange("children")}
//                   fullWidth
//                   InputLabelProps={{
//                     style: {
//                       fontSize: 12, // Adjust the label font size as needed
//                     },
//                   }}
//                   InputProps={{
//                     style: { fontSize: 12 },
//                   }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Unique National ID"
//                   value={formData.UniqueNationalId || ""}
//                   onChange={handleInputChange("UniqueNationalId")}
//                   fullWidth
//                 />
//               </Grid>

//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   value={formData.supervised_phds || ""}
//                   onChange={handleInputChange("supervised_phds")}
//                   fullWidth
//                   select
//                   SelectProps={{ native: true }}
//                 >
//                   <InputLabel sx={{ mb: 1 }}>
//                     Have you supervised Ph.Ds.?
//                   </InputLabel>
//                   <option value="">Select </option>
//                   <option value="basic">Yes</option>
//                   <option value="premium">No</option>
//                 </TextField>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   value={formData.lookForPhd || ""}
//                   onChange={handleInputChange("lookForPhd")}
//                   fullWidth
//                   select
//                   SelectProps={{ native: true }}
//                 >
//                   <InputLabel sx={{ mb: 1 }}>
//                     Have you supervised Ph.Ds.?
//                   </InputLabel>
//                   <option value="">Select </option>
//                   <option value="basic">Yes</option>
//                   <option value="premium">No</option>
//                 </TextField>
//               </Grid>
//             </Grid>
//             <Stack spacing={2}>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 style={{ marginTop: "10px" }}
//                 // disabled={formData.termsAccepted ? false : true}
//                 onClick={handleSubmit}
//                 // sx={{ fontSize: 12 }}
//                 sx={{
//                   fontSize: 12,
//                   padding: { xs: "8px 16px", md: "10px 20px" },
//                 }}
//               >
//                 Update
//               </Button>
//             </Stack>
//           </CardContent>
//         </Card>
//       </Stack>
//     </div>
//   );
// };

// export default page;
