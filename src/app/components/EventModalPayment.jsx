import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
} from "@mui/material";

const EventModalPayment = ({ membershipType, open, setOpen, completRegistation }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [declarationChecked, setDeclarationChecked] = useState(false);
  const [loading, setLoading] = useState(false); // State to manage loading

  const handleDeclarationChange = (event) => {
    setDeclarationChecked(event.target.checked);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCompleteRegistration = async () => {
    setLoading(true); // Set loading to true when registration starts
    try {
      await completRegistation(); // Execute the registration process
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setLoading(false); // Reset loading state when registration is complete
      handleClose(); // Optionally close the dialog after completion
    }
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <div className="logoContainer">
          <img src="../images/GAD_Logo_footar.png" alt="Logo" className="logos" />
        </div>
        <DialogTitle>
          <Box className="titleContainer">
            <Typography variant="h6" className="payment-title">Global Academy of Doctorates</Typography>
          </Box>
          <Typography variant="subtitle1" className="subtitleContainer">"Empowering Scholars with Boundless Opportunities”</Typography>
        </DialogTitle>

        <DialogContent>
          Kindly make the payment for {membershipType}
          <RadioGroup value={selectedOption} onChange={handleOptionChange}>
            <FormControlLabel value="upi-payment" control={<Radio />} label="UPI Payment" />
            {selectedOption === 'upi-payment' && (
              <div>
                <img src="../images/Payment_QR.png" alt="UPI QR Code" className="qr-code" />
              </div>
            )}
            <FormControlLabel value="direct-bank-transfer" control={<Radio />} label="Direct Bank Transfer" />
            {selectedOption === 'direct-bank-transfer' && (
              <div>
                <Typography className="bank-info">Bank: HDFC Bank Ltd., ATS Hamlet, Sector 104, Noida, UP</Typography>
                <Typography className="bank-info">Account No.: 50100564503842</Typography>
                <Typography className="bank-info">IFSC: HDFC 0004394</Typography>
                <Typography className="bank-info">MICR: 110240447</Typography>
                <Typography className="bank-info">TID: 62752899</Typography>
                <Typography className="bank-info">SWIFT code: HDFCINBB</Typography>
              </div>
            )}
          </RadioGroup>

          <Typography className='bank-info'>PAN: AAIAG3163H</Typography>
          <Typography className='bank-info'>Email: academyofdoctorates@gmail.com</Typography>
          <Typography className='bank-info'>Phone: +91 9958543884</Typography>

          <FormControlLabel
            control={<Checkbox checked={declarationChecked} onChange={handleDeclarationChange} />}
            label="I declare that the payment has been made."
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" sx={{ borderRadius: 10 }}>Cancel</Button>
          <Button
            onClick={handleCompleteRegistration}
            variant="contained"
            className="btn btn_new2"
            disabled={!declarationChecked || loading} // Disable if declaration is not checked or loading
            sx={{
              position: 'relative', // Make the button's position relative to place the spinner inside it
              borderRadius: 10,
              minWidth: '200px', // Adjust width of the button
              fontWeight: 'bold',
              height:'5%'
              
            }}
          >
            {loading && (
              <CircularProgress
                size={24}
                sx={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  marginLeft: '-12px', // Half of the spinner's size
                  marginTop: '-12px', // Half of the spinner's size
                  color: '#008080', // Ensure the spinner color contrasts with button background
                }}
              />
            )}
            {loading ? 'Processing...' : 'Complete Registration'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EventModalPayment;
