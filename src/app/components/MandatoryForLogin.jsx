"use client"
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { red } from "@mui/material/colors";

const MandatoryForLogin = ({ open, onClose }) => {
  const router = useRouter();

  const handleClose = () => {
    onClose();
    router.push("/login"); // Redirect to the login page
  };

  return (
    <Dialog open={open} onClose={onClose} >
      <DialogTitle></DialogTitle>
      <DialogContent sx={{ padding: "24px", width:'400px'}}>
        <p style={{fontSize:"18px"}}>Please Login/Register to proceed.</p>
      </DialogContent>
      <DialogActions style={{padding:"15px"}}>
        <Button onClick={onClose} variant="outline" style={{fontSize:12}}>
          Close
        </Button>
        <Button href="/form" variant="contained"  style={{background: "#1f899d",borderRadius:"16px"}}>
          Register
        </Button>
        <Button href="/login" variant="contained"  style={{background: "#1f899d",borderRadius:"16px"}}>
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MandatoryForLogin;
