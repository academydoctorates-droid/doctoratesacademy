
//@ts-ignore
//@ts-nocheck
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
import { PaymentModal } from "../components/PaymentModal";
import HonoraryMemberModal from "../components/HonorarymemberModal";
import { loadRazorpayScript } from "../utils/loadRazorpay";

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
  TextField,
  Typography,
  Radio,
  RadioGroup,
  FormHelperText,
  InputAdornment,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { Padding, Visibility, VisibilityOff } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { BASE_ASSET_URL } from "../utils";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";

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
  "Honorary Member",
  // "Founding Member (only by invitation)",
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
  const [confirmPassword, setConfirmPassword] = useState("");
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");
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
  const [openModal, setOpenModal] = useState(false);


  const extractAmountFromMembership = (membership) => {
    if (!membership) return 0;

    const inrMatch = membership.match(/INR[-\s]?([\d,]+)/i);
    const usdMatch = membership.match(/USD[-\s]?([\d,]+)/i);

    if (inrMatch) {
      return parseInt(inrMatch[1].replace(/,/g, ""), 10); // Convert "10,500" → 10500
    } else if (usdMatch) {
      // For USD, you may convert to INR or pass USD if Razorpay supports it
      return parseInt(usdMatch[1].replace(/,/g, ""), 10); // Convert "525" → 525
    }

    return 0; // Free or honorary member
  };




  const handleCancel = () => {
    setFormData((prevData) => ({
      ...prevData,
      membershipType: "",
    }));
    setOpenModal(false);
  };

  const handleClose = () => {
    setSnackBarOpen(false);
  };

  const [formData, setFormData] = useState({
    title: "",
    profileImage: null,
    firstName: "",
    middleName: "",
    designation: "",

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
    noOfAwards: "",
    advertiseFellowship: "",
    teachingExperience: "",
    researchExperience: "",
    adminExperienece: "",
    corporateExperience: "",
    availableForConsultancy: "",
    wishTojoin: "",
    curriculum_vitae: null as File | null,
    termsAccepted: false,
  });
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({
    membershipType: "",
    title: "",
    firstName: "",
    middleName: "",
    familyName: "",
    designation: "",
    address: "",
    image: "", // error for image upload

    Official_email: "",
    password: "",
    confirmPassword: "",

    address_corresponding: "",
    Personal_email: "",
    city: "",
    DateofBirth: "",
    Country: "",

    SpecificSpecialization: "",
    BroadSpecializations: "",
    Institution: "",
    Yearofcompletion: "",
    qualification: "",
    noOfAwards: "",

    teachingExperience: "",
    researchExperience: "",
    adminExperienece: "",
    corporateExperience: "",
    availableForConsultancy: "",
    declaration: "",
  });
  const searchParams = useSearchParams();
  const memberType = searchParams.get("membertype");

  useEffect(() => {
    if (memberType == "honorary member") {
      console.log("inside the useffect");
      setFormData((prevFormData) => ({
        ...prevFormData,
        membershipType: "Honorary Member", // Set the default
      }));
    }
  }, [memberType]);
  // console.log("memberType--->", formData);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleNext = () => {
    if (activeStep === 0) {
      const newErrors = {};

      if (!formData.membershipType) {
        newErrors.membershipType = "Membership type is required";
      }
      if (!formData.title) {
        newErrors.title = "Title is required";
      }
      if (!formData.firstName) {
        newErrors.firstName = "First name is required";
      }

      if (!formData.familyName) {
        newErrors.familyName = "Family name is required";
      }
      if (!formData.designation) {
        newErrors.designation = "Designation  is required";
      }
      if (!formData.address) {
        newErrors.address = "Address is required";
      }

      if (Object.keys(newErrors).length === 0) {
        setErrors({});

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      } else {
        // Display errors for fields on the next page
        setErrors(newErrors);
      }
    } else if (activeStep === 1) {
      const newErrors = {};

      if (!formData.Official_email) {
        newErrors.Official_email = "Official Email is required";
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

      if (!formData.address_corresponding) {
        newErrors.address_corresponding = "Corresponding Address is required";
      }
      if (!formData.Personal_email) {
        newErrors.Personal_email = "Personal Email is required";
      }

      if (!formData.city) {
        newErrors.city = "City Name is required";
      }
      if (!formData.DateofBirth) {
        newErrors.DateofBirth = "Date Of Birth is required";
      }
      if (!formData.Country) {
        newErrors.Country = "Country Name is required";
      }

      if (Object.keys(newErrors).length === 0) {
        setErrors({});

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      } else {
        // Display errors for fields on the next page
        setErrors(newErrors);
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleInputChange =
    (fieldName: string) => (event: { target: { value: any } }) => {
      const value = event.target.value;
      console.log("membershipType Selection--->", value);

      // Set membershipType directly from URL param
      if (value === "Honorary Member") {
        setOpenModal(true);
      }
      setFormData((prevFormData) => ({
        ...prevFormData,
        [fieldName]: value,
      }));
    };

  // const handleSubmit = async () => {
  //   if (activeStep === 2) {
  //     const newErrors = {};

  //     if (!formData.SpecificSpecialization) {
  //       newErrors.SpecificSpecialization =
  //         "Specific Specialization is required";
  //     }
  //     if (!formData.BroadSpecializations) {
  //       newErrors.BroadSpecializations = "Broad Specializations is required";
  //     }
  //     if (!formData.Institution) {
  //       newErrors.Institution = "Institution name is required";
  //     }
  //     if (!formData.Yearofcompletion) {
  //       newErrors.Yearofcompletion = "Year Of Completion is required";
  //     }
  //     if (!formData.qualification) {
  //       newErrors.qualification = "Qualification is required";
  //     }

  //     if (!formData.teachingExperience) {
  //       newErrors.teachingExperience = "Teaching Experience is required";
  //     }

  //     if (!formData.researchExperience) {
  //       newErrors.researchExperience = "Research Experience is required";
  //     }

  //     if (!formData.adminExperienece) {
  //       newErrors.adminExperienece = "Admin Experience is required";
  //     }

  //     if (!formData.corporateExperience) {
  //       newErrors.corporateExperience = "Corporate Experience is required";
  //     }

  //     if (!formData.availableForConsultancy) {
  //       newErrors.availableForConsultancy =
  //         "Available for Consultance is required feild";
  //     }

  //     if (!formData.wishTojoin) {
  //       newErrors.wishTojoin = "Wish to Join for Consultance is required";
  //     }

  //     if (Object.keys(newErrors).length === 0) {
  //       setErrors({});
  //       setActiveStep((prevActiveStep) =>
  //         prevActiveStep < 2 ? prevActiveStep + 1 : prevActiveStep
  //       );
  //     } else {
  //       // Display errors for fields on the next page
  //       setErrors(newErrors);
  //       return;
  //     }
  //   }

  //   setOpen(true);
  // };


  const handleDownload = () => {
    const downloadUrl = URL.createObjectURL(formData.curriculum_vitae);
    window.open(downloadUrl);
  };

  const handleSubmit = async () => {
    if (activeStep === 2) {
      const newErrors = {};

      if (!formData.SpecificSpecialization) {
        newErrors.SpecificSpecialization = "Specific Specialization is required";
      }
      if (!formData.BroadSpecializations) {
        newErrors.BroadSpecializations = "Broad Specializations is required";
      }
      if (!formData.Institution) {
        newErrors.Institution = "Institution name is required";
      }
      if (!formData.Yearofcompletion) {
        newErrors.Yearofcompletion = "Year Of Completion is required";
      }
      if (!formData.qualification) {
        newErrors.qualification = "Qualification is required";
      }
      if (!formData.teachingExperience) {
        newErrors.teachingExperience = "Teaching Experience is required";
      }
      if (!formData.researchExperience) {
        newErrors.researchExperience = "Research Experience is required";
      }
      if (!formData.adminExperienece) {
        newErrors.adminExperienece = "Admin Experience is required";
      }
      if (!formData.corporateExperience) {
        newErrors.corporateExperience = "Corporate Experience is required";
      }
      if (!formData.availableForConsultancy) {
        newErrors.availableForConsultancy = "Available for Consultance is required field";
      }
      if (!formData.wishTojoin) {
        newErrors.wishTojoin = "Wish to Join for Consultance is required";
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      } else {
        setErrors({});
      }

      // ✅ Load Razorpay script
      const isScriptLoaded = await loadRazorpayScript();
      if (!isScriptLoaded) {
        OpenSnackBar("Failed to load Razorpay. Please try again.", "error");
        return;
      }

      try {
        const amount = extractAmountFromMembership(formData.membershipType); // implement this function
        const res = await fetch(`${BASE_ASSET_URL}/payments/create-order`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount,
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.Personal_email,
            contact: formData.Contact_phone,
          }),
        });

        const data = await res.json();

        const options = {
          key: "rzp_test_UCojw0OfaGr3md", // your test key
          amount: data.amount,
          currency: data.currency,
          name: "Global Academy of Doctorates",
          description: "Payment for Global Academy of Doctorates",
          order_id: data.id,
          handler: function (response) {
            console.log("Payment response", response);
            OpenSnackBar("Payment Success!", "success");

            // ✅ Only now we call completeRegistration
            completRegistation();

            // setActiveStep((prev) => (prev < 2 ? prev + 1 : prev));
          },
          prefill: {
            name: formData.firstName || "User",
            email: formData.Personal_email || "test@example.com",
            contact: formData.Contact_phone || "9999999999",
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } catch (error) {
        console.error("Payment error:", error);
        OpenSnackBar("Failed to initiate payment. Try again later.", "error");
      }
    }
  };



  const completRegistation = async () => {
    // e.preventDefault();

    const formdata = new FormData();

    const keys = Object.keys(formData) as (keyof typeof formData)[];

    keys.forEach((key) => {
      formdata.append(key, formData[key] as string); // Assuming all values are strings
    });

    try {
      const res = await axios.post(`${BASE_ASSET_URL}/members`, formdata);

      console.log("form res--->", res)
      // setOpen(false);
      OpenSnackBar("Form Submitted Successfully!", "success");
      setTimeout(() => {
        router.replace("login");
      }, 1000);
    } catch (err) {
      console.log("err->", err);
      if (err?.message == "Network Error") {
        OpenSnackBar("CV file size must be less than 2MB", "warning");
      } else {
        OpenSnackBar("Form submission failed! please try again.", "error");
      }
    }
  };

  const renderForm = () => {
    switch (activeStep) {
      case 0:
        return (
          <Stack
            sx={{
              flex: "0.6",
              padding: 2,
              paddingLeft: "3rem",
              paddingBottom: 30,
              paddingRight: "5rem",
              height: "100vh",
              overflow: "auto",
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
              Membership Form
            </h2>

            <ImageUploader
              formData={formData}
              setFormData={setFormData}
              editForm={undefined}
              profileimage={undefined}
            />

            <Stack spacing={2}>
              {/* <TextField
                value={formData.membershipType || ""}
                onChange={handleInputChange("membershipType")}
                fullWidth
                select
                error={!!errors.membershipType}
                helperText={
                  errors.membershipType ? (
                    <span style={{ fontSize: "1.2rem" }}>
                      {errors.membershipType}
                    </span>
                  ) : null
                }
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
                <InputLabel sx={{ mb: 1 }}>Type of Membership</InputLabel>
                <option value="" disabled>
                  Select Membership Type <p style={{color:"red"}}>*</p>
                </option>
                {membershipTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
                
              </TextField> */}

              <Select
                value={formData.membershipType || 1}
                onChange={handleInputChange("membershipType")}
                fullWidth
                error={!!errors.membershipType}
                style={{
                  fontWeight:
                    memberType === "honorary member" ? "bold" : "normal",
                  fontSize: memberType === "honorary member" ? "16px" : "", // Change fontSize based on memberType
                }}
                disabled={memberType === "honorary member"}
              >
                <MenuItem value={1} disabled>
                  <span style={{ fontSize: "16px" }}>
                    Select Membership Type
                  </span>{" "}
                  <span style={{ color: "red", fontSize: "16px" }}>*</span>
                </MenuItem>
                {membershipTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
              {errors.membershipType ? (
                <span style={{ color: "red", marginLeft: "10px" }}>
                  {errors.membershipType}
                </span>
              ) : null}

              {/* <TextField
                value={formData.title || ""}
                onChange={handleInputChange("title")}
                fullWidth
                select
                error={!!errors.title}
                helperText={
                  errors.title ? (
                    <span style={{ fontSize: "1.2rem" }}>{errors.title}</span>
                  ) : null
                }
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
                  Select Title*
                </option>
                <option value="ProfessorDoctor">Prof. Dr.</option>
                <option value="Professor">Prof.</option>
                <option value="Doctor">Dr.</option>
                <option value="Mr">Mr.</option>
                <option value="Ms">Ms.</option>
                
              </TextField>  */}

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
                label={<span style={{ fontSize: "16px" }}>Middle Name</span>}
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

              <TextField
                // label="Family Name*"
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
                // label="Address(official)*"
                label={
                  <span style={{ fontSize: "16px" }}>
                    Address(official)<span style={{ color: "red" }}>*</span>
                  </span>
                }
                value={formData.address}
                onChange={handleInputChange("address")}
                fullWidth
                error={!!errors.address}
                helperText={
                  errors.address ? (
                    <span style={{ fontSize: "1.2rem" }}>{errors.address}</span>
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
              <div style={{ textAlign: "left", marginTop: 5 }}>
                <Link href={"/login"}>Already Registered?</Link>
              </div>
              <Button
                variant="contained"
                className="btn btn_new2"
                onClick={handleNext}
                sx={{ fontSize: 12 }}
              >
                Next
              </Button>
            </Stack>
            <HonoraryMemberModal open={openModal} onClose={handleCancel} />
          </Stack>
        );

      case 1:
        return (
          <Stack
            sx={{
              flex: "0.6",
              padding: 2,
              height: "100vh",
              overflow: "auto",
              paddingBottom: 30,
            }}
          >
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                fontWeight: 200,
              }}
            >
              Membership Form - Step 2
            </h2>
            <Stack spacing={2}>
              {/* Add additional fields for the second step */}
              <TextField
                // label="E-mail*"
                label={
                  <span style={{ fontSize: "16px" }}>
                    E-mail <span style={{ color: "red" }}>*</span>
                  </span>
                }
                value={formData.Official_email || ""}
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
              <TextField
                // label="Address(corresponding)*"
                label={
                  <span style={{ fontSize: "16px" }}>
                    Address(corresponding){" "}
                    <span style={{ color: "red" }}>*</span>
                  </span>
                }
                value={formData.address_corresponding || ""}
                onChange={handleInputChange("address_corresponding")}
                fullWidth
                error={!!errors.address_corresponding}
                helperText={
                  errors.address_corresponding ? (
                    <span style={{ fontSize: "1.2rem" }}>
                      {errors.address_corresponding}
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
                multiline
                rows={4}
              />
              <TextField
                // label="E-mail(personal)*"
                label={
                  <span style={{ fontSize: "16px" }}>
                    E-mail(personal) <span style={{ color: "red" }}>*</span>
                  </span>
                }
                value={formData.Personal_email || ""}
                onChange={handleInputChange("Personal_email")}
                fullWidth
                error={!!errors.Personal_email}
                helperText={
                  errors.Personal_email ? (
                    <span style={{ fontSize: "1.2rem" }}>
                      {errors.Personal_email}
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

              {/* {phoneError && <Typography style={{ color: 'red' }}>{phoneError}</Typography>} */}

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
                    <span style={{ fontSize: "1.2rem" }}>{errors.city}</span>
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
                    <span style={{ fontSize: "1.2rem" }}>{errors.Country}</span>
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
                // label="Date of Birth*"
                label={
                  <span style={{ fontSize: "16px" }}>
                    Date of Birth <span style={{ color: "red" }}>*</span>
                  </span>
                }
                value={formData.DateofBirth || ""}
                type="date"
                // label="DOB (DD/MM/YY)"
                onChange={handleInputChange("DateofBirth")}
                fullWidth
                error={!!errors.DateofBirth}
                helperText={
                  errors.DateofBirth ? (
                    <span style={{ fontSize: "1.2rem" }}>
                      {errors.DateofBirth}
                    </span>
                  ) : null
                }
                InputLabelProps={{
                  shrink: true, // Ensures the label moves up when text is entered
                  style: {
                    fontSize: 12, // Adjust the label font size as needed
                  },
                }}
                InputProps={{
                  style: { fontSize: 12 },
                  placeholder: "Select Date of Birth",
                }}
              />

              <Button
                variant="contained"
                className="btn btn_new2"
                onClick={handleNext}
                sx={{ fontSize: 12 }}
              >
                Next
              </Button>
              <Button
                variant="contained"
                className="btn btn_new2"
                onClick={handleBack}
                sx={{ fontSize: 12 }}
              >
                Back
              </Button>
            </Stack>
          </Stack>
        );

      case 2:
        return (
          <Stack
            sx={{
              paddingBottom: 30,
              flex: "0.6",
              padding: 2,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                fontWeight: 200,
              }}
            >
              Membership Form - Step 3
            </h2>
            <Stack spacing={2}>
              {/* Add additional fields for the second step */}
              <TextField
                // label="Highest degree/qualification*"
                label={
                  <span style={{ fontSize: "16px" }}>
                    Highest degree/qualification{" "}
                    <span style={{ color: "red" }}>*</span>
                  </span>
                }
                value={formData.qualification || ""}
                onChange={handleInputChange("qualification")}
                fullWidth
                error={!!errors.qualification}
                helperText={
                  errors.qualification ? (
                    <span style={{ fontSize: "1.2rem" }}>
                      {errors.qualification}
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
                // label="Year of completion*"
                label={
                  <span style={{ fontSize: "16px" }}>
                    Year of completion <span style={{ color: "red" }}>*</span>
                  </span>
                }
                value={formData.Yearofcompletion || ""}
                onChange={handleInputChange("Yearofcompletion")}
                fullWidth
                error={!!errors.Yearofcompletion}
                helperText={
                  errors.Yearofcompletion ? (
                    <span style={{ fontSize: "1.2rem" }}>
                      {errors.Yearofcompletion}
                    </span>
                  ) : null
                }
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
              <TextField
                // label="Name of the University/Institution*"
                label={
                  <span style={{ fontSize: "16px" }}>
                    Name of the University/Institution{" "}
                    <span style={{ color: "red" }}>*</span>
                  </span>
                }
                value={formData.Institution || ""}
                onChange={handleInputChange("Institution")}
                fullWidth
                error={!!errors.Institution}
                helperText={
                  errors.Institution ? (
                    <span style={{ fontSize: "1.2rem" }}>
                      {errors.Institution}
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
                // label="Broad Specializations (Major Subjects)*"
                label={
                  <span style={{ fontSize: "16px" }}>
                    Broad Specializations (Major Subjects){" "}
                    <span style={{ color: "red" }}>*</span>
                  </span>
                }
                value={formData.BroadSpecializations || ""}
                onChange={handleInputChange("BroadSpecializations")}
                fullWidth
                error={!!errors.BroadSpecializations}
                helperText={
                  errors.BroadSpecializations ? (
                    <span style={{ fontSize: "1.2rem" }}>
                      {errors.BroadSpecializations}
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
                // label="Specific Specializations(Core Subjects)*"
                label={
                  <span style={{ fontSize: "16px" }}>
                    Specific Specializations(Core Subjects){" "}
                    <span style={{ color: "red" }}>*</span>
                  </span>
                }
                value={formData.SpecificSpecialization || ""}
                onChange={handleInputChange("SpecificSpecialization")}
                fullWidth
                error={!!errors.SpecificSpecialization}
                helperText={
                  errors.SpecificSpecialization ? (
                    <span style={{ fontSize: "1.2rem" }}>
                      {errors.SpecificSpecialization}
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
                // label="No of Awards*"
                label={
                  <span style={{ fontSize: "16px" }}>
                    No of Awards <span style={{ color: "red" }}>*</span>
                  </span>
                }
                value={formData.noOfAwards || ""}
                type="number"
                onChange={handleInputChange("noOfAwards")}
                fullWidth
                error={!!errors.noOfAwards}
                helperText={
                  errors.noOfAwards ? (
                    <span style={{ fontSize: "1.2rem" }}>
                      {errors.noOfAwards}
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
                // label="Awards*"

                label={
                  <span style={{ fontSize: "16px" }}>
                    Awards <span style={{ color: "red" }}>*</span>
                  </span>
                }
                value={formData.Awards || ""}
                onChange={handleInputChange("Awards")}
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

              <TextField
                // label="Teaching Experience*"

                label={
                  <span style={{ fontSize: "16px" }}>
                    Teaching Experience <span style={{ color: "red" }}>*</span>
                  </span>
                }
                value={formData.teachingExperience || ""}
                type="number"
                onChange={handleInputChange("teachingExperience")}
                fullWidth
                error={!!errors.teachingExperience}
                helperText={
                  errors.teachingExperience ? (
                    <span style={{ fontSize: "1.2rem" }}>
                      {errors.teachingExperience}
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
                // label="Research Experience*"

                label={
                  <span style={{ fontSize: "16px" }}>
                    Research Experience <span style={{ color: "red" }}>*</span>
                  </span>
                }
                value={formData.researchExperience || ""}
                type="number"
                onChange={handleInputChange("researchExperience")}
                fullWidth
                error={!!errors.researchExperience}
                helperText={
                  errors.researchExperience ? (
                    <span style={{ fontSize: "1.2rem" }}>
                      {errors.researchExperience}
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
                // label="Admin Experience*"

                label={
                  <span style={{ fontSize: "16px" }}>
                    Admin Experience <span style={{ color: "red" }}>*</span>
                  </span>
                }
                value={formData.adminExperienece || ""}
                type="number"
                onChange={handleInputChange("adminExperienece")}
                fullWidth
                error={!!errors.adminExperienece}
                helperText={
                  errors.adminExperienece ? (
                    <span style={{ fontSize: "1.2rem" }}>
                      {errors.adminExperienece}
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
                // label="Corporate Experience*"

                label={
                  <span style={{ fontSize: "16px" }}>
                    Corporate Experience <span style={{ color: "red" }}>*</span>
                  </span>
                }
                value={formData.corporateExperience || ""}
                type="number"
                onChange={handleInputChange("corporateExperience")}
                fullWidth
                error={!!errors.corporateExperience}
                helperText={
                  errors.corporateExperience ? (
                    <span style={{ fontSize: "1.2rem" }}>
                      {errors.corporateExperience}
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
                placeholder="Type Below upto 10 keywords separated with commas(,) and related to you research and special skills for the purpose of search and consultancy to industry, organizations, and Government*"
                value={formData.research_keyword || ""}
                // label={
                //   <span style={{ fontSize: "12px" }}>
                //     Type Below upto 10 keywords separated with commas(,) and related to you research and special skills for the purpose of search and consultancy to industry, organizations, and Government <span style={{ color: "red" }}>*</span>
                //   </span>
                // }

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
              <Typography
                variant="h6"
                sx={{
                  fontSize: 20,
                  marginTop: 2,
                }}
              >
                Would You Like to do Consultancy
              </Typography>
              <RadioGroup
                value={formData.availableForConsultancy}
                onChange={handleInputChange("availableForConsultancy")}
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
              <Typography
                variant="h6"
                sx={{
                  fontSize: 20,
                  marginTop: 2,
                }}
              >
                The Academy Intends to bring out a "Global Who's Who" of
                Doctrates. Do You Wish to Join the Same ?
              </Typography>
              <RadioGroup
                value={formData.wishTojoin}
                onChange={handleInputChange("wishTojoin")}
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

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle1" sx={{ fontSize: 12 }}>
                  Attach your Curriculum Vitae (Max size 2MB){" "}
                  {formData.curriculum_vitae && (
                    <p>
                      <a href="#" onClick={handleDownload}>
                        {formData.curriculum_vitae.name}
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
                        curriculum_vitae: e.target.files
                          ? e.target.files[0]
                          : null,
                      }))
                    }
                  />
                </Button>
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      style={{ color: "#1f899d" }}
                      checked={formData.termsAccepted}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          termsAccepted: e.target.checked,
                        }))
                      }
                      name="declaration"
                    // color="primary"
                    />
                  }
                  label={<span style={{ fontSize: 12 }}>Declaration</span>}
                />
                <Typography variant="body1" sx={{ fontSize: 12 }}>
                  I, hereby, declare that I will abide by the guideline of the
                  Global Academy of Doctorates laid down for the members of the
                  academy and enjoy all the powers and privileges of the
                  membership category I have registered for.
                </Typography>
              </div>

              {/* <PaymentModal
                completRegistation={completRegistation}
                membershipType={formData.membershipType}
                setOpen={setOpen}
                open={open}
              /> */}
              <Button
                variant="contained"
                className="btn btn_new2"
                disabled={formData.termsAccepted ? false : true}
                onClick={handleSubmit}
                sx={{ fontSize: 12 }}
              >
                Submit
              </Button>

              <Button
                variant="contained"
                // variant="outlined"
                className="btn btn_new2"
                onClick={handleBack}
                sx={{ fontSize: 12 }}
              >
                Back
              </Button>
            </Stack>
          </Stack>
        );

        return (
          <Stack
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#eff7f9",
              padding: 5,
            }}
          >
            <Card
              elevation={2}
              sx={{ width: "100%", maxWidth: "500px", marginX: "auto" }}
            >
              <CardContent>
                <h2>Membership Form - Step 5</h2>
                <Stack spacing={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    sx={{ fontSize: 12 }}
                  >
                    Submit
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={handleBack}
                    sx={{ fontSize: 12 }}
                  >
                    Back
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        );
    }
  };

  return (
    // rgb(37 121 145)

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
                    style={{
                      textWrap: "balance !important",
                      fontFamily: "arial Narrow",
                    }}
                  >
                    Global Academy of Doctorates
                  </h3>
                  <p>"Empowering Scholars with Boundless Opportunities”</p>
                </div>
              </Stack>

              {/* Right Half */}
              {renderForm()}
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
