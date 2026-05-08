import React, { useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    Checkbox,
    FormControlLabel,
    Typography,
    Radio,
    RadioGroup,
    CircularProgress,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
} from "@mui/material";

export const PaymentModal = ({ membershipType, open, setOpen, completRegistation }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [declarationChecked, setDeclarationChecked] = useState(false);
    const [loading, setLoading] = useState(false);

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
        setLoading(true);
        try {
            await completRegistation(); // Assuming this is a promise
        } catch (error) {
            console.error("Registration failed:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {/* <Button variant="contained" className="btn btn_new2" onClick={handleOpen}>Proceed To Payment</Button> */}
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
                <Typography variant="h6" style={{ fontSize: '18px' }}>
        Kindly make the payment for {membershipType}
    </Typography>
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

                    <Typography className='bank-info '>PAN: AAIAG3163H</Typography>
                    <Typography className='bank-info '>Email: academyofdoctorates@gmail.com</Typography>
                    <Typography className='bank-info '>Phone: +91 9958543884</Typography>

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
                        disabled={!declarationChecked || loading}
                        startIcon={loading ? <CircularProgress  sx={{
                          position: 'absolute',
                          left: '50%',
                          top: '50%',
                          marginLeft: '-12px', // Half of the spinner's size
                          marginTop: '-12px', // Half of the spinner's size
                          color: '#008080', // Ensure the spinner color contrasts with button background
                        }} size={24} color="inherit" /> : null}
                    >
                        {loading ? 'Complete Registration' : 'Complete Registration'}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
