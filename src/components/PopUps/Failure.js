import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Close from "../Images/close.png";

function FailurePopUp({ open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
      PaperProps={{
        style: {
          borderRadius: "16px", // Add rounded corners
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
          <img src={Close} alt="Failure Check" style={{ width: "10rem" }} />
          <div
            style={{
              marginTop: "2rem",
              fontSize: "1.5rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Something went wrong
          </div>
        </div>
      </DialogTitle>
      <DialogContent>
        <DialogContentText style={{ textAlign: "center", fontSize: "1.2rem" }}>
          Your order could not be placed. Please try again after sometime
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

export default FailurePopUp;
