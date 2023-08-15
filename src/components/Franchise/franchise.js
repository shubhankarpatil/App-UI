import { TextField, Stack, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";
import SuccessPopUp from "./Popups/success.js";
import FailurePopUp from "./Popups/failure.js";
import "./franchise.css";

const Franchise = () => {
  const [textFieldValues, setTextFieldValues] = useState({
    firstName: "",
    lastName: "",
    city: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    city: false,
    mobile: false,
    email: false,
    message: false,
  });
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
  const isInvalidMobile = (value) =>
    value.trim() === "" || !/^[0-9]{10}$/.test(value);
  const isInvalidEmail = (value) =>
    value.trim() === "" ||
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);

  const submitData = async () => {
    try {
      console.log("http://localhost:3000/submit/enquiry", textFieldValues);
      const response = await axios.post(
        "http://localhost:3000/submit/enquiry",
        textFieldValues
      );
      console.log(response);
      if (response.status === 200) {
        setShowSuccessPopUp(true);
        setTextFieldValues({
          firstName: "",
          lastName: "",
          city: "",
          mobile: "",
          email: "",
          message: "",
        });
        setTouched({
          firstName: false,
          lastName: false,
          city: false,
          mobile: false,
          email: false,
          message: false,
        });
      } else if (response.status === 500) {
        setShowFailurePopUp(true);
      }
    } catch (error) {
      console.log("Error while submitting data", error);
    }
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <Box //Left Box
          sx={{
            width: "50%",
            padding: "0 20px",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <h1 className="header1">Join the Manthra Family</h1>
          <div className="paragraph-container">
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <p className="contact-parapgraph">
              <b>For franchise enquiry contact the below numbers</b>
              <ul className="mobile-list">
                <li className="mobile-item">123-456-7890</li>
                <li className="mobile-item">987-654-3210</li>
                <li className="mobile-item">555-123-4567</li>
              </ul>
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
        </Box>
        <Box // Rigth Box
          component="form"
          sx={{
            width: "53%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "0 35px",
            marginTop: "1rem",
          }}
        >
          <h3 className="header2">Share your details</h3>
          <div
            style={{
              display: "flex",
              width: "100%",
              marginBottom: "3rem",
              marginTop: "1rem",
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
                      fontWeight: "bold",
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
                      fontWeight: "bold",
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
                name="city"
                variant="outlined"
                color="success"
                label="City"
                required
                value={textFieldValues.city}
                onChange={handleChange}
                error={touched.city && isInvalidName(textFieldValues.city)}
                helperText={
                  <FormHelperText
                    style={{
                      color: "red",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: ".8rem",
                      fontWeight: "bold",
                    }}
                  >
                    {touched.city &&
                      (isInvalidName(textFieldValues.city)
                        ? "Please enter a valid city name"
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
                      fontWeight: "bold",
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
          <div style={{ display: "flex", width: "46%", marginBottom: "3rem" }}>
            <Stack spacing={6} direction="row" sx={{ flex: 1 }}>
              <TextField
                type="text"
                name="email"
                variant="outlined"
                color="success"
                label="Email"
                required
                value={textFieldValues.email}
                onChange={handleChange}
                error={touched.email && isInvalidEmail(textFieldValues.email)}
                helperText={
                  <FormHelperText
                    style={{
                      color: "red",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: ".8rem",
                      fontWeight: "bold",
                    }}
                  >
                    {touched.email &&
                      (isInvalidEmail(textFieldValues.email)
                        ? "Please enter a valid email Id"
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
            <TextField
              id="outlined-multiline-flexible"
              type="text"
              label="Message"
              multiline
              maxRows={4}
              rows={2}
              name="message"
              variant="outlined"
              color="success"
              required
              value={textFieldValues.message}
              onChange={handleChange}
              error={touched.message && isInvalidName(textFieldValues.message)}
              helperText={
                <FormHelperText
                  style={{
                    color: "red",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: ".8rem",
                    fontWeight: "bold",
                  }}
                >
                  {touched.message &&
                    (isInvalidName(textFieldValues.message)
                      ? "Please enter your message to us"
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
          </div>
          <Button
            variant="contained"
            sx={{ marginTop: "-1rem", marginBottom: ".5rem" }}
            color="success"
            disabled={
              isInvalidName(textFieldValues.firstName) ||
              isInvalidName(textFieldValues.lastName) ||
              isInvalidMobile(textFieldValues.mobile) ||
              isInvalidName(textFieldValues.city) ||
              isInvalidEmail(textFieldValues.email) ||
              isInvalidName(textFieldValues.message)
            }
            onClick={submitData}
          >
            Send Message
          </Button>
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

export default Franchise;
