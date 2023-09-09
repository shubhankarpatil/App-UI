import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";
import cpco from "../HomePage/Images/CPCO.jpg";

const SummaryCart = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isPaperVisible, setIsPaperVisible] = useState(true);
  const [baseAmount] = useState(300);
  const [totalAmount, setTotalAmount] = useState(baseAmount);


  const handleIncrement = () => {
    if (quantity < 3) {
      setQuantity(quantity + 1);
      setTotalAmount(baseAmount * (quantity + 1));
    } else {
      setErrorMessage("You can only order 3 pieces per order.");
      setSnackBarOpen(true);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalAmount(baseAmount * (quantity - 1));
    } else {
      setErrorMessage("Quantity cannot be less than 1.");
      setSnackBarOpen(true);
    }
  };

  const handleCloseSnackBar = () => {
    setSnackBarOpen(false);
  };

  const handleDelete = () => {
    setIsPaperVisible(false); // Set the visibility to false when delete is clicked
  };

  return (
    <>
      {isPaperVisible && (
        <div style={{ marginBottom: "20px" }}>
          <Paper
            elevation={3}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
              marginBottom: "10px",
              height: "130px",
              flexDirection: "row",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <img
                alt="title"
                src={cpco}
                loading="lazy"
                style={{
                  width: "100px",
                  height: "120px",
                  marginRight: "10px",
                  padding: "5px",
                  borderRadius: "12px",
                }}
              />

              <div style={{ flex: 1, paddingTop: "5px", paddingLeft: "6px" }}>
                <Typography
                  variant="h6"
                  component="div"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "bold",
                    paddingTop: "5px",
                  }}
                >
                  Cold Pressed Coconut Oil
                </Typography>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingTop: "14px",
                  }}
                >
                  <IconButton size="small" onClick={handleDecrement}>
                    -
                  </IconButton>
                  <Typography
                    variant="body2"
                    component="div"
                    style={{ margin: "0 10px" }}
                  >
                    {quantity}
                  </Typography>
                  <IconButton size="small" onClick={handleIncrement}>
                    +
                  </IconButton>
                </div>
                <Typography
                  variant="body2"
                  component="div"
                  style={{
                    paddingTop: "12px",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  Rs {totalAmount}
                </Typography>
              </div>
            </div>

            <IconButton color="error" onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </Paper>

          <Snackbar
            open={snackBarOpen}
            autoHideDuration={4000}
            onClose={handleCloseSnackBar}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <SnackbarContent
              sx={{ backgroundColor: "#2ecc71" }}
              message={errorMessage}
            />
          </Snackbar>
        </div>
      )}
    </>
  );
};

export default SummaryCart;
