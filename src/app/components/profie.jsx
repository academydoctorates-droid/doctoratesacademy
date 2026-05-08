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
import CustomHeader from '../components/mobileHeader'
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
import { BASE_ASSET_URL } from "../utils";
import Link from "next/link";


const page = () => {
  const router = useRouter();
  const [userId, setUserId] = useState("");

  

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

      <div className="editProfile"
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
              {formData.firstName} {formData.familyName}
            </h1>
            <a className="btn btn_new1" onClick={()=>window.open(
              `${window.location.origin}/pleadge?name=${formData.title}%20${formData.firstName}%20${formData.middleName}%20${formData.familyName}&address=${formData.address}&designation=${formData.qualification}&email=${formData.Official_email}&mobileNo=${formData.Contact_phone}'`
            )}>View Pledge</a>
            {/* <button onClick={()=>router.push(`/pleadge')}>pleadge</button> */}
            <h4 className="memberShipType" style={{ color: "#ffff" }}>{formData.membershipType}</h4>
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
            {/* <h2 style={{textAlign: 'center'}}>Edit Profile</h2> */}

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
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
                  {/* Add more membership types as needed */}
                </TextField>
              </Grid>
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
                  <option value="ProfessorDoctor">Prof. Dr.</option>
                  <option value="Professor">Prof.</option>
                  <option value="Doctor">Dr.</option>
                  <option value="Mr">Mr.</option>
                  <option value="Ms">Ms.</option>
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
                <TextField
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
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
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
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  // label="DOB*"

                  value={formData.DateofBirth || ""}
                  type="date"
                  onChange={handleInputChange("DateofBirth")}
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
                    }}
                  >
                    Upload File
                    <input
                      type="file"
                      style={{ visibility: "hidden" }}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          curriculum_vitae: e.target.files[0],
                        }))
                      }
                    />
                  </Button>
                </div>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Membership of other Societie*"
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

              {/* <InputLabel
                sx={{ fontWeight: "bold", color: "#000000", fontSize: 12 }}
              >
                Family Details (optional){" "}
              </InputLabel> */}
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name of the spouse"
                  value={formData.NameOfSpouse || ""}
                  onChange={handleInputChange("NameOfSpouse")}
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
                  label="Children (no.)"
                  value={formData.number_of_children || ""}
                  onChange={handleInputChange("number_of_children")}
                  type="number"
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
                  label="Names Of Children"
                  value={formData.children || ""}
                  onChange={handleInputChange("children")}
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
                  label="Unique National ID"
                  value={formData.UniqueNationalId || ""}
                  onChange={handleInputChange("UniqueNationalId")}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
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
                  <option value="">Select </option>
                  <option value="basic">Yes</option>
                  <option value="premium">No</option>
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
                  <option value="">Select </option>
                  <option value="basic">Yes</option>
                  <option value="premium">No</option>
                </TextField>
              </Grid>
            </Grid>
            <Stack spacing={2}>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: "10px" }}
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
    </div>
  );
};

export default page;





