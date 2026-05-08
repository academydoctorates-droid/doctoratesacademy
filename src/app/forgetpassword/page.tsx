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
  CircularProgress,
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

  const handleLogin = async () => {
    if (email === "") {
      OpenSnackBar("Please fill the email fields!", "warning");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(`${BASE_ASSET_URL}/members/reset-password`, {
        email,
      });
      if (res.status === 201) {
        OpenSnackBar(
          "An email has been sent to your registered address with the new password. Please Check You Email!",
          "success"
        );
        setEmail("");
        setLoading(false);
      }
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.userId);

      // sessionStorage.setItem("email", res.data.email);
      setTimeout(() => {
        router.replace("/login");
      }, 5000);
    } catch (error) {
      setLoading(false);
      OpenSnackBar(
        "The email address entered is not registered with us!",
        "error"
      );
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
            Forgot Password
          </Typography>
          <div style={{ margin: "20px 0" }}>
            <TextField
              required
              id="email"
              label="Enter Your Register Email"
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
            {/* <TextField
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
            /> */}

            {/* <TextField
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
            /> */}

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
            sx={{ fontSize: 12, position: "relative" }}
            onClick={handleLogin}
            disabled={loading} // Disable the button while loading
          >
            {loading && (
              <CircularProgress
                size={24}
                sx={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  marginLeft: "-12px",
                  marginTop: "-12px",
                }}
              />
            )}
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
