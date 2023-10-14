import React, { useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { Snackbar, SnackbarContent } from "@mui/material";
import "./footer.css";
import logo from '../Images/logo.jpg'

const Footer = () => {
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleContactClick = (contactMethod) => {
    if (contactMethod === 'email') {
      window.location.href = 'mailto:manthrafoods@gmail.com';
    } else if (contactMethod === 'mobile') {
      window.location.href = 'tel:+1234567890';
    }
  };
  
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    .then(() => {
      setMessage('Data has been copied to clipboard');
      setSnackBarOpen(true)
    })
    .catch((error) => {
      console.error('Unable to copy data to clipboard', error)
    })
  }

  const handleCloseSnackBar = () => {
    setSnackBarOpen(false)
  }

  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="Company Logo" style={{ width: "230px", height: "120px"}} loading="lazy"/>
      </div>
      <div className="footer-right">
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '.5rem', paddingLeft: '1.7rem' }}>
          <LocationOnIcon fontSize="small" />
          <p style={{ marginLeft: '.7rem', cursor: 'pointer' }}
          onClick={() => handleCopy('No. 39, 9th Main, Chinnappanahalli, Bengaluru, 5600367, Karnataka')}>
            No. 39, 9th Main, Chinnappanahalli, Bengaluru, 5600367, Karnataka</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '-1.4rem', marginBottom: '.5rem', paddingLeft: '1.7rem' }}>
          <CallIcon fontSize="small" style={{cursor: 'pointer'}} onClick={() => handleContactClick('mobile')}/>
          <p style={{ marginLeft: '.7rem', cursor: 'pointer' }} onClick={() => handleCopy('+1234567890')}>+1234567890</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '-1.7rem', marginBottom: '1.7rem', paddingLeft: '1.7rem' }}>
          <EmailRoundedIcon fontSize="small" style={{cursor: 'pointer'}} onClick={() => handleContactClick('email')}/>
          <p style={{ marginLeft: '.7rem', cursor: 'pointer' }} onClick={() => handleCopy('manthrafoods@gmail.com')}>manthrafoods@gmail.com</p>
         </div>
         <Snackbar open={snackBarOpen} autoHideDuration={4000} onClose={handleCloseSnackBar} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
            <SnackbarContent sx={{ backgroundColor: "#2ecc71" }} message={message} />
          </Snackbar>
      </div>
    </footer>
  );
};

export default Footer;
