/* eslint-disable @next/next/no-img-element */
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
import EventModalPayment from "../components/EventModalPayment";
import { useSearchParams } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import SnackBar from "../components/SnackBar";

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
  Radio,
  RadioGroup,
  CircularProgress
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

const EventPayment = [
  "Faculty, industry representative: Rs. 1500",
  "Research scholars, students : Rs. 1000",
  "Foreign participants: USD 50",
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
  const searchParams = useSearchParams();
  const eventId = searchParams.get("id");
  const eventName = searchParams.get("name");
  console.log("eventId-->", eventId);
  const [activeStep, setActiveStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [snackBarSeverity, setSnackBarSeverity] = useState<
    "success" | "error" | "warning"
  >("success");
  const [loading, setLoading] = useState(false);
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
  const [selectedPayment, setSelectedPayment] = useState("");
  const initialFormData = {
    firstName: "",
    middleName: "",
    familyName: "",
    designation: "",
    institute: "",
    address: "",
    email: "",
    phone: "",
    abstract: null as File | null,
    accommodationNeeded: "",
    modeOfParticipation: "",
    paymentOfRegistrationFee: "",
    travelGrantNeeded: "",
    eCertificate: ""
  };
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    familyName: "",
    designation: "",
    institute: "",
    address: "",
    email: "",
    phone: "",
    eventId: eventId,
    abstract: null as File | null,
    accommodationNeeded: "",
    modeOfParticipation: "",
    paymentOfRegistrationFee: 500,
    travelGrantNeeded: "",
    eCertificate: ""
  });

  console.log("formData-->", formData.paymentOfRegistrationFee);

  const [errors, setErrors] = useState({
    profileImage: null,
    firstName: "",
    middleName: "",
    lastName: "",
    familyName: "",
    designation: "",
    institute: "",
    address: "",
    email: "",
    paymentOfRegistrationFee: "",
    termsAccepted: false,
    eCertificate: false
  });

  const handleInputChange =
    (fieldName: string) => (event: { target: { value: any } }) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [fieldName]: event.target.value,
      }));
    };

  const handlePaymentChange = (event: any) => {
    setSelectedPayment(event.target.value);
  };



  const handleSubmit = async () => {
    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "First Name is required";
    }

    if (!formData.familyName) {
      newErrors.familyName = "Last Name is required";
    }
    if (!formData.designation) {
      newErrors.designation = "Designation is required";
    }
    if (!formData.institute) {
      newErrors.institute = "institute is required";
    }

    if (!formData.address) {
      newErrors.address = "address is required";
    }
    if (!formData.email) {
      newErrors.email = "email is required";
    }

    // if (!formData.paymentOfRegistrationFee) {
    //   newErrors.paymentOfRegistrationFee =
    //     "Payment of registration fee is required";
    // }

    // if (Object.keys(newErrors).length === 0) {
    //   setErrors({});

    //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // } else {
    //   setErrors(newErrors);
    //   return;
    // }

    setOpen(true);
    // const formdata = new FormData();
    // for (let key of Object.keys(formData)) {
    //   formdata.append(key, formData[key]);
    // }

    // try {
    //   const res = await axios.post(`${BASE_ASSET_URL}/event-form`, formdata);
    //   setOpen(false);
    //   alert("Form Submitted Successfully!");
    //   router.replace("/");
    // } catch (err) {
    //   alert("Form submission failed! please try again.");
    // }
  };

  const handleDownload = () => {
    const downloadUrl = URL.createObjectURL(formData.curriculum_vitae);
    window.open(downloadUrl);
  };

  const handleFormSubmit = async () => {
    const newErrors = {}; // Object to store error messages

    // Validation
    if (!formData.firstName) {
      newErrors.firstName = "First Name is required";
    }

    if (!formData.familyName) {
      newErrors.familyName = "Last Name is required";
    }

    if (!formData.designation) {
      newErrors.designation = "Designation is required";
    }

    if (!formData.institute) {
      newErrors.institute = "Institute is required";
    }

    if (!formData.address) {
      newErrors.address = "Address is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    }

    // Check if any errors exist
    if (Object.keys(newErrors).length > 0) {
      // If errors exist, set them to state
      setErrors(newErrors);
      return; // Stop form submission
    }

    // Proceed with form submission if no errors
    const formdata = new FormData();
    for (let key of Object.keys(formData)) {
      formdata.append(key, formData[key]);
    }
    setLoading(true)
    try {
      const res = await axios.post(`${BASE_ASSET_URL}/event-form`, formdata);
      setLoading(false)
      setOpen(false);
      setFormData(initialFormData);

      OpenSnackBar("Form Submitted Successfully!", "success");

      setTimeout(() => {
        router.replace("/"); // Redirect after Snackbar duration
      }, 5000);
    } catch (err) {
      OpenSnackBar("Form submission failed! please try again.", "error");
      setLoading(false)
    }
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
                    fontWeight: 300,
                    marginTop: "20px",
                    marginBottom: 20,
                  }}
                >
                 {eventName} Event Registration Form
                </h2>

                {/* <ImageUploader
                  uploadText="Upload your photo"
                  formData={formData}
                  setFormData={setFormData}
                  editForm={undefined}
                  profileimage={undefined}
                /> */}

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
                  {/* 
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
                  ) : null} */}

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
                      <span style={{ fontSize: "16px" }}>Middle Name</span>
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
                        Family Name<span style={{ color: "red" }}>*</span>
                      </span>
                    }
                    value={formData.familyName}
                    onChange={handleInputChange("familyName")}
                    fullWidth
                    error={!!errors.familyName}
                    helperText={
                      errors.familyName ? (
                        <span style={{ fontSize: "1.2rem" }}>
                          {errors.familyName}
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
                        Institute <span style={{ color: "red" }}>*</span>
                      </span>
                    }
                    value={formData.institute}
                    onChange={handleInputChange("institute")}
                    fullWidth
                    error={!!errors.institute}
                    helperText={
                      errors.institute ? (
                        <span style={{ fontSize: "1.2rem" }}>
                          {errors.institute}
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

                  {/* <TextField
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
                  /> */}

                  {/* <TextField
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
                  /> */}

                  <TextField
                    // label="Email*"

                    label={
                      <span style={{ fontSize: "16px" }}>
                        Email <span style={{ color: "red" }}>*</span>
                      </span>
                    }
                    value={formData.email}
                    onChange={handleInputChange("email")}
                    fullWidth
                    error={!!errors.email}
                    helperText={
                      errors.email ? (
                        <span style={{ fontSize: "1.2rem" }}>
                          {errors.email}
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

                  {/* <TextField
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
                  /> */}
                  {/* <p style={{ color: "red" }}>Minimum 5 characters required!</p> */}

                  {/* <TextField
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
                  /> */}

                  <PhoneInput
                    value={formData.phone || ""}
                    onChange={(phone) =>
                      setFormData((prev) => ({
                        ...prev,
                        phone: phone,
                      }))
                    }
                    placeholder="Enter phone number*"
                    country="in"
                  />

                  {/* <Typography
                    variant="h6"
                    sx={{
                      fontSize: 20,
                      marginTop: 2,
                    }}
                  >
                    Mode Of Participation
                  </Typography>
                  <RadioGroup
                    value={formData.modeOfParticipation}
                    onChange={handleInputChange("modeOfParticipation")}
                    row
                  >
                    <FormControlLabel
                      value="In person"
                      control={<Radio style={{ color: "#1f899d" }} />}
                      label="In person"
                      sx={{ fontSize: 12 }}
                    />
                    <FormControlLabel
                      value="online"
                      control={<Radio style={{ color: "#1f899d" }} />}
                      label="online"
                      sx={{ fontSize: 12 }}
                    />
                  </RadioGroup> */}

                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: 20,
                      marginTop: 2,
                    }}
                  >
                    Do you want to take an e-certificate?
                  </Typography>
                  <RadioGroup
                    value={formData.eCertificate}
                    onChange={handleInputChange("eCertificate")}
                    row
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio style={{ color: "#1f899d" }} />}
                      label="Yes"
                      sx={{ fontSize: 12 }}
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio style={{ color: "#1f899d" }} />}
                      label="No"
                      sx={{ fontSize: 12 }}
                    />
                  </RadioGroup>


                  <>
                    {/* {formData.eCertificate === "yes" && (
                      <div style={{ marginTop: "1rem" }}>
                        <InputLabel
                          style={{ fontSize: 12, marginBottom: 0, color: "black" }}
                          id="volunteer-support-label"
                        >
                          <span style={{ fontSize: "16px" }}>
                            Payment of registration fee
                          </span>{" "}
                          <span style={{ color: "red", fontSize: "16px" }}>*</span>
                        </InputLabel>
                        <Select
                          name="paymentOfRegistrationFee"
                          labelId="volunteer-support-label"
                          value={formData.paymentOfRegistrationFee || "-Select-"}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              [e.target.name]: e.target.value,
                            }))
                          }
                          fullWidth
                          placeholder="Please Select*"
                        >
                          <MenuItem value="-Select-">-Select-</MenuItem>
                          {EventPayment.map((type) => (
                            <MenuItem key={type} value={type}>
                              {type}
                            </MenuItem>
                          ))}
                        </Select>
                      </div>
                    )} */}
                    {formData.eCertificate === "yes" && (
                      <TextField
                        type="number"
                        name="paymentOfRegistrationFee"
                        label={
                          <span style={{ fontSize: "16px" }}>
                            Please fill fee paid{" "}
                            <span style={{ color: "red" }}>*</span>
                          </span>
                        }
                        value={formData.paymentOfRegistrationFee}
                        // Disabled to make it non-interactive
                        disabled
                        autoComplete="false"
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            [e.target.name]: e.target.value,
                          }))
                        }
                        fullWidth
                        error={!!errors.paymentOfRegistrationFee}
                        helperText={
                          errors.paymentOfRegistrationFee ? (
                            <span style={{ fontSize: "1.2rem" }}>
                              {errors.paymentOfRegistrationFee}
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
                    )}

                  </>


                  {/* <TextField
                    
                    label={
                      <span style={{ fontSize: "16px" }}>
                        Any other support? Please specify <span style={{ color: "red" }}>*</span>
                      </span>
                    }
                    value={formData.otherSupport}
                    onChange={handleInputChange("otherSupport")}
                    fullWidth
                    InputLabelProps={{
                      style: {
                        fontSize: 12, 
                      },
                    }}
                    InputProps={{
                      style: { fontSize: 12 },
                    }}
                  /> */}

                  {/* <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ fontSize: 12 }}>
                      Upload Abstract*
                      {formData.abstract && (
                        <p>
                          <a href="#" onClick={handleDownload}>
                            {formData.abstract.name}
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
                            abstract: e.target.files ? e.target.files[0] : null,
                          }))
                        }
                      />
                    </Button>
                  </div> */}

                  {/* <Typography
                    variant="h6"
                    sx={{
                      fontSize: 20,
                      marginTop: 2,
                    }}
                  >
                    Accommondation needed
                  </Typography>
                  <RadioGroup
                    value={formData.accommodationNeeded}
                    onChange={handleInputChange("accommodationNeeded")}
                    row
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio style={{ color: "#1f899d" }} />}
                      label="Yes"
                      sx={{ fontSize: 12 }}
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio style={{ color: "#1f899d" }} />}
                      label="No"
                      sx={{ fontSize: 12 }}
                    />
                  </RadioGroup> */}
                  {/* <Typography
                    variant="h6"
                    sx={{
                      fontSize: 20,
                      marginTop: 2,
                    }}
                  >
                    Travel grant needed
                  </Typography>
                  <RadioGroup
                    value={formData.travelGrantNeeded}
                    onChange={handleInputChange("travelGrantNeeded")}
                    row
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio style={{ color: "#1f899d" }} />}
                      label="Yes"
                      sx={{ fontSize: 12 }}
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio style={{ color: "#1f899d" }} />}
                      label="No"
                      sx={{ fontSize: 12 }}
                    />
                  </RadioGroup> */}

                  <hr />
                  <div style={{ textAlign: "left", marginTop: 5 }}>
                    {/* <Link href={"/login"}>Already Registered?</Link> */}
                  </div>
                  <Button
                    variant="contained"
                    className="btn btn_new2"
                    onClick={() =>
                      formData.eCertificate === "yes" ? handleSubmit() : handleFormSubmit()
                    }
                    style={{
                      fontSize: 12,
                      padding: loading ? "16px 24px" : "16px", // Adjust padding when loading
                      borderRadius: 40,
                      position: "relative", // Required for positioning spinner inside the button
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    disabled={loading} // Disable the button when loading
                  >
                    {loading && (
                      <CircularProgress
                        size={24}
                        sx={{
                          position: "absolute",
                          color: "#008080", // Spinner color
                        }}
                      />
                    )}
                    <span style={{ visibility: loading ? "hidden" : "visible" }}>
                      {loading ? "Processing..." : "Submit"}
                    </span>
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
      <EventModalPayment
        membershipType={formData.paymentOfRegistrationFee}
        open={open}
        setOpen={setOpen}
        completRegistation={handleFormSubmit}
      />
    </>
  );
}
