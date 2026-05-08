import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Typography,
  IconButton, // Import IconButton
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // Import Close icon

const HonoraryMemberModal = ({ open, onClose }) => {
  const handleContactNow = () => {
    window.location.href =
      "mailto:kkdwivedi@yahoo.com?subject=Honorary Member Inquiry";
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg" // Increased modal size
      sx={{
        "& .MuiDialog-paper": {
          minWidth: "500px", // Increased width
          padding: "10px", // Increased padding
        },
      }}
    >
      <DialogTitle>
        <Typography
          variant="h3" // Increased font size for title
          align="center"
          sx={{
            fontWeight: "bold", // Optionally make it bold
            fontSize: "2.5rem", // Custom font size (optional)
          }}
        >
          Honorary Membership
        </Typography>
        {/* Close Icon Button */}
        <IconButton
          onClick={onClose} // Close the modal when clicked
          sx={{
            position: "absolute",
            right: 16,
            top: 16,
            color: "text.primary", // Color can be adjusted based on theme
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography
            variant="h5" // Increased font size for content
            align="center"
            sx={{
              fontSize: "1.8rem", // Custom font size (optional)
              marginTop: "20px",
            }}
          >
            Honorary members can only register by an invitation.
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions style={{ justifyContent: "center" }}>
        <Button
          onClick={handleContactNow}
          color="primary"
          variant="contained"
          size="large"
          sx={{
            fontSize: "1.2rem", // Custom font size for button
            padding: "10px 20px", // Larger padding for the button
            background: "#1f899d",
          }}
        >
          Contact Now
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default HonoraryMemberModal;
