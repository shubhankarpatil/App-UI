import React, { useState } from "react";
import { Paper, Typography, IconButton, Snackbar, SnackbarContent } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import emptyCart from "../Images/Empty.png";
import { useCart } from "../cartContext";

const SummaryCart = () => {
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { cart, addToCart, removeFromCart } = useCart();

  const handleIncrement = (productId) => {
    console.log('Cart increment', cart)
    const updatedCart = cart.map((item) => {
      console.log('item.quantity', item.productId, productId, item.quantity, item.title)
      if (item.productId === productId && item.quantity < 3) {
        console.log('item.quantity inside', item.productId, productId, item.quantity, item.title)
        return { ...item, quantity: item.quantity + 1 };
      } else {
        setErrorMessage("You can only order 3 pieces per order.");
        setSnackBarOpen(true);
      }
      return item;
    });
    addToCart(updatedCart);
  };

  const handleDecrement = (productId) => {
    const updatedCart = cart.map((item) => {
      console.log('item.quantity', item.productId, productId, item.quantity, item.title)
      if (item.productId === productId && item.quantity > 1) {
        console.log('item.quantity inside', item.productId, productId, item.quantity, item.title)
        return { ...item, quantity: item.quantity - 1 };
      } else {
        setErrorMessage("Quantity cannot be less than 1.");
        setSnackBarOpen(true);
      }
      return item;
    });
    addToCart(updatedCart);
  };

  const handleCloseSnackBar = () => {
    setSnackBarOpen(false);
  };

  const handleDelete = (productId) => {
    removeFromCart(productId)
  }

  return (
    <>
      {cart.length === 0 ? (
        <img alt="Empty cart" src={emptyCart} style={{ paddingTop: "2.7rem" }} />
      ) : (
        cart && cart.map((item, index) => (
          <div key={index} style={{ marginBottom: "5px", paddingTop: "2.2rem" }} >
            <Paper elevation={3}
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
                <img alt={item.title} src={item.image} loading="lazy"
                  style={{
                    width: "100px",
                    height: "120px",
                    marginRight: "10px",
                    padding: "5px",
                    borderRadius: "12px",
                  }}
                />

                <div style={{ flex: 1, paddingTop: "5px", paddingLeft: "6px" }}>
                  <Typography variant="h6" component="div"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: "bold",
                      paddingTop: "5px",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingTop: "14px",
                    }}
                  >
                    <IconButton
                      size="small"
                      onClick={() => handleDecrement(item.productId)}
                    >
                      -
                    </IconButton>
                    <Typography
                      variant="body2"
                      component="div"
                      style={{ margin: "0 10px" }}
                    >
                      {item.quantity}
                    </Typography>
                    <IconButton size="small" onClick={() => handleIncrement(item.productId)} >
                      +
                    </IconButton>
                  </div>
                  <Typography variant="body2" component="div"
                    style={{
                      paddingTop: "12px",
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    Rs {item.price * item.quantity}
                  </Typography>
                </div>
              </div>

              <IconButton color="error">
                <DeleteIcon onClick={() => handleDelete(item.productId)}/>
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
        ))
      )}
    </>
  );
};

export default SummaryCart;
