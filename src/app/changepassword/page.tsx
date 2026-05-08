/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { BASE_ASSET_URL } from "../utils";
import axios from "axios";
import SnackBar from "../components/SnackBar";
const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [open, setOpen] = useState(false);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [userType, setUserType] = useState("");
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
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClose = () => {
    setSnackBarOpen(false);
  };
  const handleLogout = (e) => {
    console.log("Inside the Logout");
    if (e) {
      e.preventDefault(); // Prevent the default link behavior
      e.stopPropagation(); // Stop the event from propagating to the parent elements
    }

    // Perform logout actions here
    localStorage.clear();
    // Redirect to the home page or login page

    // Set the active state to prevent immediate hiding of the logout button
    // setLogoutActive(true);

    // Set a timeout to remove the active state after a delay (e.g., 2 seconds)

    setTimeout(() => {
      if (userType === "Volunteer") {
        router.replace("/volunteerLogin");
      } else {
        router.replace("/login");
      }
    }, 3000);
  };

  useEffect(() => {
    const getEmail = () => {
      if (typeof window !== "undefined") {
        // Check if localStorage is available
        const email = localStorage.getItem("email");
        const userType = localStorage.getItem("USER");
        setEmail(email);
        setUserType(userType);
      }
    };
    getEmail();
  }, []);

  console.log("UserType---->", userType);

  const handleLogin = async () => {
    if (password !== password2) {
      alert("Password and confirm password does not match");
      return;
    }
    if (email === "" || password === "") {
      alert("Please fill the required fields!");
      return;
    }

    setLoading(true);

    try {
      // Check if the user is a volunteer from local storage

      const url =
        userType === "Volunteer"
          ? `${BASE_ASSET_URL}/volunteers/change-password`
          : `${BASE_ASSET_URL}/members/change-password`;

      // Send the password reset request to the correct endpoint
      const res = await axios.post(url, {
        email,
        newPassword: password,
      });

      if (res.status == 201) {
        OpenSnackBar("Your Password Updated Successfully!", "success");
        setLoading(false);
        localStorage.clear();

        setTimeout(() => {
          if (userType === "Volunteer") {
            router.replace("/volunteerLogin");
          } else {
            router.replace("/login");
          }
        }, 3000);
      } else {
        OpenSnackBar("Something went wrong!", "warning");
        setLoading(false);
      }

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.userId);
    } catch (error) {
      OpenSnackBar("Something went wrong!", "error");
      setLoading(false);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#e0f7fa",
      }}
    >
      <Card sx={{ minWidth: 400, padding: 2 }}>
        <CardContent style={{ textAlign: "center" }}>
          <img
            src="images/GAD Logo.png"
            style={{ objectFit: "contain" }}
            width={120}
            height={120}
          />
          <Typography
            sx={{
              fontSize: 24,
              color: "text.primary",
              fontWeight: "700",
              marginTop: 2,
            }}
            gutterBottom
          >
            Change Your Password
          </Typography>
          <div style={{ margin: "20px 0" }}>
            <TextField
              required
              id="email"
              label="Email"
              type="email"
              value={email}
              fullWidth
              variant="outlined"
              margin="dense"
              onChange={(e) => setEmail(e.target.value)}
              InputLabelProps={{
                style: {
                  fontSize: 12, // Adjust the label font size as needed
                },
              }}
              InputProps={{
                style: { fontSize: 12 },
                readOnly: true,
              }}
            />
            <TextField
              required
              id="password"
              label="Password"
              // type="password"
              type={showPassword ? "text" : "password"}
              fullWidth
              variant="outlined"
              margin="dense"
              onChange={(e) => setPassword(e.target.value)}
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
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              required
              id="confirmpassword"
              label="Confirm Password"
              // type="password"
              type={showPassword ? "text" : "password"}
              fullWidth
              variant="outlined"
              margin="dense"
              onChange={(e) => setPassword2(e.target.value)}
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
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ textAlign: "left", marginTop: 5 }}>
                <Link href={"/form"}>Not Registered?</Link>
              </div>
              {/* <div style={{ textAlign: "left", marginTop: 5 }}>
                <Link href={"/login"}>Sign In</Link>
              </div> */}
            </div>
          </div>

          <Button
            variant="contained"
            color="primary"
            sx={{ fontSize: 12 }}
            onClick={handleLogin}
          >
            Reset Password
          </Button>
        </CardContent>
      </Card>
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
