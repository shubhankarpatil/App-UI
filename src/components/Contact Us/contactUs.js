import React, { useState } from 'react';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import { Snackbar, SnackbarContent } from "@mui/material";
import "./contactUs.css"

const ContactUs = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleContactClick = (contactMethod) => {
    if (contactMethod === 'email') {
      window.location.href = 'mailto:manthrafoods@gmail.com';
    } else if (contactMethod === 'mobile') {
      window.location.href = 'tel:+1234567890';
    }
  };

  const handleCloseSnackBar = () => {
    setSnackBarOpen(false);
  }

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    .then(() => {
      setMessage('Data has been copied');
      setSnackBarOpen(true)
    })
    .catch((error) => {
      console.error('Unable to copy data to clipboard', error)
    })
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        cursor: 'pointer',
        height: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <span>Contact Us</span>
      {isHovered && (
        <div className="tooltip">
          <div style={{ color: "black", fontSize: "1rem", display: 'flex', alignItems: 'center', paddingBottom: ".4rem" }}>
            <CallRoundedIcon onClick={() => handleContactClick('mobile')} fontSize='small' style={{ marginRight: '.5rem' }} /> 
            <p onClick={() => handleCopy('123456789')} style={{cursor: 'pointer'}}>123456789</p>
          </div>
          <div style={{ color: "black", fontSize: "1rem", display: 'flex', alignItems: 'center', marginTop: '-1rem' }}>
            <EmailRoundedIcon onClick={() => handleContactClick('email')}  fontSize='small' style={{ marginRight: '.5rem' }} /> 
            <p onClick={() => handleCopy('manthrafoods@gmail.com')} style={{cursor: 'pointer'}}>manthrafoods@gmail.com</p>
          </div>
        </div>
      )}
      <Snackbar open={snackBarOpen} autoHideDuration={2000} onClose={handleCloseSnackBar} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
        <SnackbarContent sx={{ backgroundColor: "#2ecc71" }} message={message} />
      </Snackbar>
    </div>
  );
};

export default ContactUs;
