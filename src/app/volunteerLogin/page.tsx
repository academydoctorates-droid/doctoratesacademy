/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
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
  const router = useRouter();
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

  const handleClose = () => {
    setSnackBarOpen(false);
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    if (email === "" || password === "") {
      OpenSnackBar("Please fill the required fields!", "error");
      return;
    }
    try {
      const res = await axios.post(`${BASE_ASSET_URL}/volunteers/login`, {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.userId);

      if (res.status == 201) {
        localStorage.setItem("USER", "Volunteer");
        localStorage.setItem("email", email);
      }

      // sessionStorage.setItem("email", res.data.email);
      router.replace("/");
    } catch (err: unknown) {
      const errorMessage = err instanceof Error && 'response' in err && 
        typeof (err as any).response === 'object' && 
        (err as any).response?.data?.message 
        ? (err as any).response.data.message 
        : "An error occurred during login";
      OpenSnackBar(errorMessage, "error");
    }

    // router.replace("/");
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
        <Button
          variant="contained"
          className="btn btn_new4"
          size="small"
          onClick={() => router.push("/")}
          sx={{ fontSize: 12 }}
        >
          Home
        </Button>
        <CardContent style={{ textAlign: "center" }}>
          <Link href="/">
            <img
              src="images/GAD Logo.png"
              style={{ objectFit: "contain" }}
              width={120}
              height={120}
            />
          </Link>
          <Typography
            sx={{
              fontSize: 24,
              color: "text.primary",
              fontWeight: "700",
              marginTop: 2,
            }}
            gutterBottom
          >
            Volunteer Login
          </Typography>
          <div style={{ margin: "20px 0" }}>
            <TextField
              required
              id="email"
              label="Email"
              type="email"
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
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ textAlign: "left", marginTop: 5 }}>
                <Link href={"/volunteerform"}>Not Registered?</Link>
              </div>
              <div style={{ textAlign: "left", marginTop: 5 }}>
                <Link href={"/volunteerForgetPassword"}>Forgot Password</Link>
              </div>
            </div>

            <div style={{ textAlign: "left", marginTop: 5 }}>
              <Link href={"/login"}>Login as Members</Link>
            </div>
          </div>

          <Button
            variant="contained"
            className="btn btn_new2"
            sx={{ fontSize: 12 }}
            onClick={handleLogin}
          >
            Login
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
