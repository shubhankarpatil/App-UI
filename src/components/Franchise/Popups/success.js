import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Check from "../../HomePage/Images/Check.png";

function SuccessPopUp({ open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
      PaperProps={{
        style: {
          borderRadius: "16px",
        },
      }}
    >
      <DialogTitle id="form-dialog-title">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "2rem",
          }}
        >
          <img src={Check} alt="Success Check" style={{ width: "10rem" }} />
          <div
            style={{
              marginTop: "2rem",
              fontSize: "1.5rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            We have received your request
          </div>
        </div>
      </DialogTitle>
      <DialogContent>
        <DialogContentText style={{ textAlign: "center", fontSize: "1.2rem" }}>
          We will be reaching out to you shortly
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SuccessPopUp;
