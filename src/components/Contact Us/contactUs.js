import React, { useState } from 'react';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import "./contactUs.css"

const ContactUs = () => {
  const [isHovered, setIsHovered] = useState(false);

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
          <div onClick={() => handleContactClick('mobile')} style={{ cursor: 'pointer', color: "black", fontSize: "1rem", display: 'flex', alignItems: 'center', paddingBottom: ".4rem" }}>
            <CallRoundedIcon fontSize='small' style={{ marginRight: '.5rem' }} /> 123456789
          </div>
          <div onClick={() => handleContactClick('mobile')} style={{ cursor: 'pointer', color: "black", fontSize: "1rem", display: 'flex', alignItems: 'center' }}>
          <EmailRoundedIcon fontSize='small' style={{ marginRight: '.5rem' }} /> manthrafoods@gmail.com
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
