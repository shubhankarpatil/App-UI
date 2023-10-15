import { TextField, Stack, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import Box from "@mui/material/Box";
import "./Checkout.css";
import SummaryCart from "../SummaryCart/SummaryCart.js";
import FormHelperText from "@mui/material/FormHelperText";
import SuccessPopUp from "../PopUps/Success";
import FailurePopUp from "../PopUps/Failure";
import { useCart } from "../cartContext"

const Checkout = () => {
  const [textFieldValues, setTextFieldValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    mobile: "",
    email: "",
  });
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    address: false,
    mobile: false,
    email: false,
  });
  const { cart } = useCart();
  const [showSuccessPopUp, setShowSuccessPopUp] = useState(false);
  const [showFailurePopUp, setShowFailurePopUp] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTextFieldValues((prevValue) => ({ ...prevValue, [name]: value }));
    if (!touched[name]) {
      setTouched((prevTouched) => ({ ...prevTouched, [name]: true }));
    }
  };

  const isInvalidName = (value) =>
    /\d/.test(value) ||
    /[!@#$%^&*()-,.?":{}|<>]/.test(value) ||
    value.trim().length < 3;
  const isInvalidAddress = (value) =>
    value.trim() === "" || value.trim().length < 10;
  const isInvalidMobile = (value) =>
    value.trim() === "" || !/^[0-9]{10}$/.test(value);
  const isInvalidEmail = (value) => value.trim() === "" || value.trim().length < 15 || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)

  const submitData = async () => {
    try {
      const orderData = {
        user: {
          firstName: textFieldValues.firstName,
          lastName: textFieldValues.lastName,
          address: textFieldValues.address,
          mobile: textFieldValues.mobile,
          email: textFieldValues.email
        },
        cart: cart,
        paymentStatus: "unpaid"
      }
      console.log("http://localhost:3000/submit/data", textFieldValues, cart, orderData);
      const response = await axios.post(
        "http://localhost:3000/submit/data",
        textFieldValues
      );
      console.log(response);
      if (response.status === 200) {
        setShowSuccessPopUp(true);
        setTextFieldValues({
          firstName: "",
          lastName: "",
          address: "",
          mobile: "",
          email: ""
        });
        setTouched({
          firstName: false,
          lastName: false,
          address: false,
          mobile: false,
          email: false
        });
      } else if (response.status === 500) {
        setShowFailurePopUp(true);
      }
    } catch (error) {
      console.log("Error while submitting data", error);
      setShowFailurePopUp(true);
    }
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <Box
          component="form"
          sx={{
            width: "57%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "0 35px",
            marginTop: "1rem",
          }}
        >
          <h1 className="check-main">
            <span>Billing Info</span>
          </h1>
          <span
            className="below-billingInfo"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "12px",
              paddingTop: "0px",
              color: "grey",
              marginTop: "2px",
            }}
          >
            Please enter your billing information
          </span>
          <div
            style={{
              display: "flex",
              width: "100%",
              marginBottom: "3rem",
              marginTop: "1rem"
            }}
          >
            <Stack spacing={6} direction="row" sx={{ flex: 1 }}>
              <TextField
                name="firstName"
                variant="outlined"
                color="success"
                label="First Name"
                required
                value={textFieldValues.firstName}
                onChange={handleChange}
                error={
                  touched.firstName && isInvalidName(textFieldValues.firstName)
                }
                helperText={
                  <FormHelperText
                    style={{
                      color: "red",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: ".8rem",
                      fontWeight: "bold"
                    }}
                  >
                    {touched.firstName &&
                      (textFieldValues.firstName === ""
                        ? "First Name is empty"
                        : isInvalidName(textFieldValues.firstName)
                        ? "Please enter a valid first name"
                        : "")}
                  </FormHelperText>
                }
                sx={{
                  flex: 1,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "black",
                    },
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: "black",
                    fontWeight: "bold",
                  },
                }}
              />
              <TextField
                name="lastName"
                variant="outlined"
                color="success"
                label="Last Name"
                value={textFieldValues.lastName}
                required
                onChange={handleChange}
                error={
                  touched.lastName && isInvalidName(textFieldValues.lastName)
                }
                helperText={
                  <FormHelperText
                    style={{
                      color: "red",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: ".8rem",
                      fontWeight: "bold"
                    }}
                  >
                    {touched.lastName &&
                      (textFieldValues.lastName === ""
                        ? "Last Name is empty"
                        : isInvalidName(textFieldValues.lastName)
                        ? "Please enter a valid last name"
                        : "")}
                  </FormHelperText>
                }
                sx={{
                  flex: 1,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "black",
                    },
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: "black",
                    fontWeight: "bold",
                  },
                }}
              />
            </Stack>
          </div>
          <div style={{ display: "flex", width: "100%", marginBottom: "3rem" }}>
            <Stack spacing={6} direction="row" sx={{ flex: 1 }}>
              <TextField
                name="address"
                variant="outlined"
                color="success"
                label="Address"
                required
                value={textFieldValues.address}
                onChange={handleChange}
                error={
                  touched.address && isInvalidAddress(textFieldValues.address)
                }
                helperText={
                  <FormHelperText
                    style={{
                      color: "red",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: ".8rem",
                      fontWeight: "bold"
                    }}
                  >
                    {touched.address &&
                      (isInvalidAddress(textFieldValues.address)
                        ? "Please enter a valid address"
                        : "")}
                  </FormHelperText>
                }
                sx={{
                  flex: 1,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "black",
                    },
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: "black",
                    fontWeight: "bold",
                  },
                }}
              />
              <TextField
                inputProps={{
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  maxLength: "10",
                }}
                variant="outlined"
                color="success"
                label="Mobile Number"
                required
                value={textFieldValues.mobile}
                onChange={handleChange}
                name="mobile"
                error={
                  touched.mobile && isInvalidMobile(textFieldValues.mobile)
                }
                helperText={
                  <FormHelperText
                    style={{
                      color: "red",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: ".8rem",
                      fontWeight: "bold"
                    }}
                  >
                    {touched.mobile &&
                      (isInvalidMobile(textFieldValues.mobile)
                        ? "Please enter a valid mobile number"
                        : "")}
                  </FormHelperText>
                }
                sx={{
                  flex: 1,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "black",
                    },
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: "black",
                    fontWeight: "bold",
                  },
                }}
              />
            </Stack>
          </div>
          <div style={{ display: "flex", width: "100%", marginBottom: "8px" }}>
            <Stack spacing={6} direction="row" sx={{ flex: 1 }}>
              <TextField
                variant="outlined"
                color="success"
                label="Email id"
                required
                value={textFieldValues.email}
                onChange={handleChange}
                name='email'
                error={touched.email && isInvalidEmail(textFieldValues.email)}
                helperText={
                  <FormHelperText
                    style={{
                      color: "red",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: ".8rem",
                      fontWeight: "bold"
                    }}
                  >
                    {touched.email &&
                      (isInvalidEmail(textFieldValues.email)
                        ? "Please enter a valid email id"
                        : "")}
                  </FormHelperText>
                }
                sx={{
                  flex: 1,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "black",
                    },
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: "black",
                    fontWeight: "bolder",
                  },
                }}
              />
              <TextField
                type="text"
                variant="outlined"
                color="success"
                label="State"
                disabled
                defaultValue="Karnataka"
                sx={{
                  flex: 1,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "black",
                    },
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: "black",
                    fontWeight: "bold",
                  },
                }}
              />
            </Stack>
          </div>
          <Button
            variant="contained"
            sx={{ marginTop: "3rem", backgroundColor: "#a2ff86", color: 'black', fontWeight: 'bold', "&:hover": {
              backgroundColor: "#87e567",
            },}}
            disabled={
              isInvalidName(textFieldValues.firstName) ||
              isInvalidName(textFieldValues.lastName) ||
              isInvalidAddress(textFieldValues.address) ||
              isInvalidMobile(textFieldValues.mobile) ||
              isInvalidEmail(textFieldValues.email) ||
              cart.length === 0
            }
            onClick={submitData}
          >
            Confirm Order
          </Button>
        </Box>

        <Box // Right Box
          sx={{
            width: "43%",
            padding: "0 20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <SummaryCart />
        </Box>
        {showSuccessPopUp && (
          <SuccessPopUp
            open={showSuccessPopUp}
            onClose={() => setShowSuccessPopUp(false)}
          />
        )}
        {showFailurePopUp && (
          <FailurePopUp
            open={showFailurePopUp}
            onClose={() => setShowFailurePopUp(false)}
          />
        )}
      </div>
    </>
  );
};

export default Checkout;
