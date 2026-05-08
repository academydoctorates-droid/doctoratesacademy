"use client";
import * as React from "react";
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
import SnackBar from "../components/SnackBar";
import { CircularProgress } from "@mui/material";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";

import { useState } from "react";
import { Padding, Visibility, VisibilityOff } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import axios from "axios";
import { BASE_ASSET_URL } from "../utils";
import Link from "next/link";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
    ...(ownerState.active && {
      color: "#784af4",
    }),
    "& .QontoStepIcon-completedIcon": {
      color: "#784af4",
      zIndex: 1,
      fontSize: 18,
    },
    "& .QontoStepIcon-circle": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "currentColor",
    },
  })
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
    // 4: <EmojiEventsIcon />,
    // 5: <PublishIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = [
  "Select campaign settings",
  "Create an ad group",
  // "Create an ad",
  // "Create awards",
  "Final Submission",
];

const membershipTypes = [
  "Back office Support",
  "Event Management",
  "It Support",
  "Data Analysis",
  "Creative Writing",
  "Blogging",
  "Membership Drive Individual/Institution/Corporates",
  "Finance & Accounting",
  "Maintenance of Website",
  "Designs and Graphics",
  "Press Connect",
];

const pro = [
  { value: "Prof. Dr.", name: "ProfessorDoctor" },
  { value: "Prof.", name: "Professor" },
  { value: "Dr.", name: "Doctor" },
  { value: "Mr.", name: "Mr" },
  { value: "Ms.", name: "Ms" },
];

export default function Form() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackBarSeverity, setSnackBarSeverity] = useState<
    "success" | "error" | "warning"
  >("success");

  const OpenSnackBar = (
    message: string,
    severity: "success" | "error" | "warning"
  ) => {
    setSnackBarMessage(message);
    setSnackBarSeverity(severity);
    setSnackBarOpen(true);
  };

  const handleClose = () => {
    setSnackBarOpen(false);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [selectedVolunteerSupport, setSelectedVolunteerSupport] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    profileImage: null,
    firstName: "",
    middleName: "",
    lastName: "",
    familyName: "",
    designation: "",
    affilation: "",
    address: "",
    address_corresponding: "",
    volunteerSupport: "",
    Official_email: "",
    otherSupport: "",
    Personal_email: "",
    Contact_phone: "",
    WhatsappNo: "",
    DateofBirth: "",
    city: "",
    Country: "",
    qualification: "",
    biodata: null as File | null,
    termsAccepted: false,
    password: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    profileImage: null,
    firstName: "",
    middleName: "",
    lastName: "",
    familyName: "",
    designation: "",
    affilation: "",
    address: "",
    address_corresponding: "",
    volunteerSupport: "",
    Official_email: "",
    Personal_email: "",
    Contact_phone: "",
    WhatsappNo: "",
    DateofBirth: "",
    city: "",
    Country: "",
    qualification: "",
    biodata: null,
    termsAccepted: false,
    password: "",
    confirmPassword: "",
  });

  const handleInputChange =
    (fieldName: string) => (event: { target: { value: any } }) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [fieldName]: event.target.value,
      }));
    };

  const handleMultiInputChange = (event) => {
    setSelectedVolunteerSupport(event.target.value);
  };

  const handleSubmit = async () => {
    const newErrors = {};

    if (!formData.title) {
      newErrors.title = "Title is required";
    }
    if (!formData.firstName) {
      newErrors.firstName = "First Name is required";
    }

    if (!formData.city) {
      newErrors.city = "City Name is required";
    }
    if (!formData.Country) {
      newErrors.Country = "Country Name is required";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last Name is required";
    }
    if (!formData.designation) {
      newErrors.designation = "Designation is required";
    }
    if (!formData.affilation) {
      newErrors.affilation = "affilation is required";
    }

    if (!formData.address) {
      newErrors.address = "address is required";
    }
    if (!formData.Official_email) {
      newErrors.Official_email = "Official_email is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    }

    if (formData.password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length === 0) {
      setErrors({});

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      setErrors(newErrors);
      return;
    }

    const formdata = new FormData();
    for (let key of Object.keys(formData)) {
      formdata.append(key, formData[key]);
    }
    setLoading(true);
    try {
      const res = await axios.post(`${BASE_ASSET_URL}/volunteers`, formdata);
      OpenSnackBar("Form Submitted Successfully!", "success");
      setTimeout(() => {
        router.replace("/"); // Redirect after Snackbar duration
      }, 5000);
    } catch (err) {
      if (err?.message == "Network Error") {
        OpenSnackBar("CV file size must be less than 2MB", "warning");
      } else {
        OpenSnackBar("Form submission failed! please try again.", "error");
      }
    } finally {
      setLoading(false);
    }
  };
  const handleDownload = () => {
    const downloadUrl = URL.createObjectURL(formData.curriculum_vitae);
    window.open(downloadUrl);
  };
  return (
    <>
      {/* {renderForm()} */}
      <Stack
        sx={{
          width: "100%",

          // height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Card
          elevation={10}
          sx={{ width: "100%", height: "100vh", backgroundColor: "#eff7f9" }}
        >
          <CardContent style={{ padding: 0 }}>
            <Stack
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                height: "100vh",
              }}
              spacing={1}
            >
              {/* Left Half */}
              <Stack
                sx={{
                  flex: "1",
                  backgroundColor: "#ffffff",
                  padding: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                {/* Your logo goes here */}
                <Link href={"/"}>
                  <img
                    src="../images/GAD_Logo_footar.png"
                    alt="Logo"
                    style={{
                      width: "100%",
                      objectFit: "contain",
                    }}
                    className="img-responsive"
                  />
                </Link>

                {/* Text */}
                <div style={{ textAlign: "center" }}>
                  <h3
                    className="header-title"
                    style={{ fontFamily: "arial Narrow" }}
                  >
                    Global Academy of Doctorates
                  </h3>
                  <p>"Empowering Scholars with Boundless Opportunities”</p>
                </div>
              </Stack>

              {/* Right Half */}
              <Stack
                sx={{
                  flex: "0.6",
                  padding: 2,
                  height: "100vh",
                  overflow: "auto",
                  paddingBottom: 20,
                }}
              >
                <Button
                  variant="contained"
                  className="btn btn_new4"
                  size="small"
                  onClick={() => router.push("/")}
                  sx={{ fontSize: 12, alignSelf: "flex-start", mb: 2 }}
                >
                  Home
                </Button>
                <h2
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    fontWeight: 200,
                  }}
                >
                  Volunteer Registration Form
                </h2>

                <ImageUploader
                  uploadText="Upload your photo"
                  formData={formData}
                  setFormData={setFormData}
                  editForm={undefined}
                  profileimage={undefined}
                />

                <Stack spacing={2}>
                  {/* <TextField
                    value={formData.title || ""}
                    onChange={handleInputChange("title")}
                    fullWidth
                    error={!!errors.title}
                    helperText={
                      errors.title ? (
                        <span style={{ fontSize: "1.2rem" }}>
                          {errors.title}
                        </span>
                      ) : null
                    }
                    select
                    InputLabelProps={{
                      style: {
                        fontSize: 12, 
                      },
                    }}
                    InputProps={{
                      style: { fontSize: 12 },
                    }}
                    SelectProps={{ native: true }}
                  >
                    <InputLabel sx={{ mb: 1 }}>Title</InputLabel>
                    <option value="" disabled>
                      Select Title
                    </option>

                    <option value="Mr">Mr.</option>
                    <option value="Ms">Ms.</option>
                    <option value="Mr">Mrs.</option>

                    <option value="Mr">Dr.</option>
                    <option value="Ms">Er.</option>
                    <option value="Mr">Ar.</option>
                    
                  </TextField> */}

                  <Select
                    value={formData.title || 1}
                    onChange={handleInputChange("title")}
                    fullWidth
                    error={!!errors.title}
                  >
                    <MenuItem value={1} disabled>
                      <span style={{ fontSize: "16px" }}>Title</span>{" "}
                      <span style={{ color: "red", fontSize: "16px" }}>*</span>
                    </MenuItem>
                    {pro.map((type, index) => (
                      <MenuItem key={index} value={type.value}>
                        {type.value}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.title ? (
                    <span style={{ color: "red", marginLeft: "10px" }}>
                      {errors.title}
                    </span>
                  ) : null}

                  <TextField
                    // label="First Name*"
                    label={
                      <span style={{ fontSize: "16px" }}>
                        First Name<span style={{ color: "red" }}>*</span>
                      </span>
                    }
                    value={formData.firstName}
                    onChange={handleInputChange("firstName")}
                    fullWidth
                    error={!!errors.firstName}
                    helperText={
                      errors.firstName ? (
                        <span style={{ fontSize: "1.2rem" }}>
                          {errors.firstName}
                        </span>
                      ) : null
                    }
                    InputLabelProps={{
                      style: {
                        fontSize: 12, // Adjust the label font size as needed
                      },
                    }}
                    InputProps={{
                      style: { fontSize: 12 },
                    }}
                  />
                  <TextField
                    // label="Middle Name"
                    label={
                      <span style={{ fontSize: "16px" }}>
                        Middle Name<span style={{ color: "red" }}>*</span>
                      </span>
                    }
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
                  <TextField
                    // label="Last Name*"

                    label={
                      <span style={{ fontSize: "16px" }}>
                        Last Name<span style={{ color: "red" }}>*</span>
                      </span>
                    }
                    value={formData.lastName}
                    onChange={handleInputChange("lastName")}
                    fullWidth
                    error={!!errors.lastName}
                    helperText={
                      errors.lastName ? (
                        <span style={{ fontSize: "1.2rem" }}>
                          {errors.lastName}
                        </span>
                      ) : null
                    }
                    InputLabelProps={{
                      style: {
                        fontSize: 12, // Adjust the label font size as needed
                      },
                    }}
                    InputProps={{
                      style: { fontSize: 12 },
                    }}
                  />
                  <TextField
                    // label="Present Position/Designation*"
                    label={
                      <span style={{ fontSize: "16px" }}>
                        Present Position/Designation
                        <span style={{ color: "red" }}>*</span>
                      </span>
                    }
                    value={formData.designation}
                    onChange={handleInputChange("designation")}
                    fullWidth
                    error={!!errors.designation}
                    helperText={
                      errors.designation ? (
                        <span style={{ fontSize: "1.2rem" }}>
                          {errors.designation}
                        </span>
                      ) : null
                    }
                    InputLabelProps={{
                      style: {
                        fontSize: 12, // Adjust the label font size as needed
                      },
                    }}
                    InputProps={{
                      style: { fontSize: 12 },
                    }}
                  />
                  <TextField
                    // label="Affilation*"
                    label={
                      <span style={{ fontSize: "16px" }}>
                        Affilation <span style={{ color: "red" }}>*</span>
                      </span>
                    }
                    value={formData.affilation}
                    onChange={handleInputChange("affilation")}
                    fullWidth
                    error={!!errors.affilation}
                    helperText={
                      errors.affilation ? (
                        <span style={{ fontSize: "1.2rem" }}>
                          {errors.affilation}
                        </span>
                      ) : null
                    }
                    InputLabelProps={{
                      style: {
                        fontSize: 12, // Adjust the label font size as needed
                      },
                    }}
                    InputProps={{
                      style: { fontSize: 12 },
                    }}
                  />

                  <TextField
                    // label="Address(official)*"

                    label={
                      <span style={{ fontSize: "16px" }}>
                        Address(official){" "}
                        <span style={{ color: "red" }}>*</span>
                      </span>
                    }
                    value={formData.address}
                    onChange={handleInputChange("address")}
                    fullWidth
                    error={!!errors.address}
                    helperText={
                      errors.address ? (
                        <span style={{ fontSize: "1.2rem" }}>
                          {errors.address}
                        </span>
                      ) : null
                    }
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

                  <TextField
                    // label="City*"

                    label={
                      <span style={{ fontSize: "16px" }}>
                        City <span style={{ color: "red" }}>*</span>
                      </span>
                    }
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
                    error={!!errors.city}
                    helperText={
                      errors.city ? (
                        <span style={{ fontSize: "1.2rem" }}>
                          {errors.city}
                        </span>
                      ) : null
                    }
                  />

                  <TextField
                    // label="Country*"

                    label={
                      <span style={{ fontSize: "16px" }}>
                        Country <span style={{ color: "red" }}>*</span>
                      </span>
                    }
                    value={formData.Country || ""}
                    onChange={handleInputChange("Country")}
                    fullWidth
                    error={!!errors.Country}
                    helperText={
                      errors.Country ? (
                        <span style={{ fontSize: "1.2rem" }}>
                          {errors.Country}
                        </span>
                      ) : null
                    }
                    InputLabelProps={{
                      style: {
                        fontSize: 12, // Adjust the label font size as needed
                      },
                    }}
                    InputProps={{
                      style: { fontSize: 12 },
                    }}
                  />
                  <TextField
                    // label="Email*"

                    label={
                      <span style={{ fontSize: "16px" }}>
                        Email <span style={{ color: "red" }}>*</span>
                      </span>
                    }
                    value={formData.Official_email}
                    onChange={handleInputChange("Official_email")}
                    fullWidth
                    error={!!errors.Official_email}
                    helperText={
                      errors.Official_email ? (
                        <span style={{ fontSize: "1.2rem" }}>
                          {errors.Official_email}
                        </span>
                      ) : null
                    }
                    InputLabelProps={{
                      style: {
                        fontSize: 12, // Adjust the label font size as needed
                      },
                    }}
                    InputProps={{
                      style: { fontSize: 12 },
                    }}
                  />

                  <TextField
                    // label="Create Password*"

                    label={
                      <span style={{ fontSize: "16px" }}>
                        Create Password <span style={{ color: "red" }}>*</span>
                      </span>
                    }
                    value={formData.password || ""}
                    onChange={handleInputChange("password")}
                    error={!!errors.password}
                    helperText={
                      errors.password ? (
                        <span style={{ fontSize: "1.2rem" }}>
                          {errors.password}
                        </span>
                      ) : null
                    }
                    fullWidth
                    type={showPassword ? "text" : "password"}
                    InputLabelProps={{
                      style: {
                        fontSize: 12, // Adjust the label font size as needed
                      },
                    }}
                    InputProps={{
                      style: { fontSize: 12 },
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleTogglePasswordVisibility}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  {/* <p style={{ color: "red" }}>Minimum 5 characters required!</p> */}

                  <TextField
                    // label="Confirm Password*"

                    label={
                      <span style={{ fontSize: "16px" }}>
                        Confirm Password <span style={{ color: "red" }}>*</span>
                      </span>
                    }
                    value={confirmPassword || ""}
                    type="password"
                    error={!!errors.confirmPassword}
                    helperText={
                      errors.confirmPassword ? (
                        <span style={{ fontSize: "1.2rem" }}>
                          {errors.confirmPassword}
                        </span>
                      ) : null
                    }
                    onChange={(e) => setConfirmPassword(e.target.value)}
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

                  <PhoneInput
                    value={formData.Contact_phone || ""}
                    onChange={(phone) =>
                      setFormData((prev) => ({
                        ...prev,
                        Contact_phone: phone,
                      }))
                    }
                    placeholder="Enter phone number*"
                    country="in"
                  />

                  <>
                    <InputLabel
                      style={{ fontSize: 12, marginBottom: 0, color: "black" }}
                      id="volunteer-support-label"
                    >
                      {/* Please select Volunteer Support Offered* */}
                      <span style={{ fontSize: "16px" }}>
                        Please select Volunteer Support Offered
                      </span>{" "}
                      <span style={{ color: "red", fontSize: "16px" }}>*</span>
                    </InputLabel>
                    <Select
                      multiple
                      labelId="volunteer-support-label"
                      value={selectedVolunteerSupport}
                      onChange={handleMultiInputChange}
                      fullWidth
                      renderValue={(selected) => selected.join(", ")}
                      placeholder="Please Select*"
                    >
                      <MenuItem disabled value="">
                        {/* <em>Please select Volunteer Support Offered*</em> */}
                      </MenuItem>
                      {membershipTypes.map((type) => (
                        <MenuItem key={type} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </Select>
                  </>

                  <TextField
                    // label="Any other support? Please specify"
                    label={
                      <span style={{ fontSize: "16px" }}>
                        Any other support? Please specify{" "}
                        <span style={{ color: "red" }}>*</span>
                      </span>
                    }
                    value={formData.otherSupport}
                    onChange={handleInputChange("otherSupport")}
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

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ fontSize: 12 }}>
                      Attach your Bio data*
                      {formData.biodata && (
                        <p>
                          <a href="#" onClick={handleDownload}>
                            {formData.biodata.name}
                          </a>
                        </p>
                      )}
                    </Typography>
                    <Button
                      variant="contained"
                      component="label"
                      sx={{
                        marginLeft: "40%",
                        width: "19%",
                        textWrap: "nowrap",
                        background: "#1f899d",
                      }}
                    >
                      Upload File
                      <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            biodata: e.target.files ? e.target.files[0] : null,
                          }))
                        }
                      />
                    </Button>
                  </div>
                  <hr />
                  <div style={{ textAlign: "left", marginTop: 5 }}>
                    {/* <Link href={"/login"}>Already Registered?</Link> */}
                  </div>
                  <Button
                    variant="contained"
                    className="btn btn_new2"
                    onClick={handleSubmit}
                    sx={{
                      fontSize: 12,
                      position: "relative",
                      width: "100%",
                      height: "40px",
                    }} // Adjust width and height as needed
                    disabled={loading}
                  >
                    {loading && (
                      <CircularProgress
                        size={24}
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          marginTop: "-12px",
                          marginLeft: "-12px",
                          color: "white",
                        }}
                      />
                    )}
                    {!loading && "Submit"}
                  </Button>
                </Stack>
              </Stack>
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
    </>
  );
}
