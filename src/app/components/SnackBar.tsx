// components/SnackBar.tsx
import React from "react";
import { Snackbar, Alert, AlertColor } from "@mui/material";

interface SnackBarProps {
  open: boolean;
  onClose: () => void;
  message: string;
  severity: "success" | "error" | "warning";
}

const SnackBar: React.FC<SnackBarProps> = ({
  open,
  onClose,
  message,
  severity,
}) => {
  const getAlertColor = (severity: "success" | "error" | "warning"): string => {
    switch (severity) {
      case "success":
        return "#43a047"; // Custom green color for success
      case "error":
        return "#d32f2f"; // Custom red color for error
      case "warning":
        return "#ffa000"; // Custom yellow color for warning
      default:
        return "#1976d2"; // Default color (blue) for info or other cases
    }
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }} // Positioning Snackbar at the top center
    >
      <Alert
        onClose={onClose}
        severity={severity}
        sx={{
          width: "300px",
          fontSize: "12px",
          backgroundColor: getAlertColor(severity),
          color: "#fff",
          "& .MuiAlert-icon": {
            fontSize: "16px",
            color: "#fff", // Set icon color to white
          },
          fontWeight: "bold",
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
