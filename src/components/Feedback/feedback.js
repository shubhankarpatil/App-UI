import React, { useState } from 'react';
import { TextField, Stack, FormControl, MenuItem, InputLabel, Box } from "@mui/material";
import { FormHelperText, Select, OutlinedInput, Chip, Button } from "@mui/material"
import "./feedback.css"

const names = ['Wood Pressed Coconut Oil', 'Wood Pressed Groundnut Oil', 'Dragon Fruit', 'Butter Fruit']

const Feedback = () => {
  const [isFeedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [productName, setProductName] = useState([])
  const [textFieldValues, setTextFieldValues] = useState({
    name: "",
    email: ""
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false
  });
  const isInvalidName = (value) =>
    /\d/.test(value) ||
    /[!@#$%^&*()-,.?":{}|<>]/.test(value) ||
    value.trim().length < 3;
  const isInvalidEmail = (value) => value.trim() === "" || value.trim().length < 15 || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)

  const handleProductNameChange = (event) => {
    const { target : { value }, } = event;
    setProductName(typeof value === 'string' ? value.split(',') : value)  
  }

  const openFeedbackModal = () => {
    setFeedbackModalOpen(true);
  };

  const closeFeedbackModal = () => {
    setTextFieldValues({name: "", email: ""})
    setTouched({name: false, email: false})
    setProductName([])
    setFeedbackModalOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTextFieldValues((prevValue) => ({ ...prevValue, [name]: value }));
    if (!touched[name]) {
      setTouched((prevTouched) => ({ ...prevTouched, [name]: true }));
    }
  };

  return (
    <div>
      <span onClick={openFeedbackModal} style={{cursor: 'pointer'}}>Feedback</span>
      {isFeedbackModalOpen && (
        <div>
          <div className="overlay"></div>
          <div className="feedback-modal">
            <div className="modal-content">
              <h2 style={{marginBottom: "2.5rem"}}>Feedback Form</h2>
              <div style={{ display: "flex", width: "100%", marginBottom: "2rem", marginTop: ".5rem" }}>
                    <Stack spacing={4} direction="row" sx={{ flex: 1 }}>
              <TextField
                name="name"
                variant="outlined"
                color="success"
                label="Name"
                required
                value={textFieldValues.name}
                onChange={handleChange}
                error={
                  touched.name && isInvalidName(textFieldValues.name)
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
                    {touched.name &&
                      (textFieldValues.name === ""
                        ? "Name is empty"
                        : isInvalidName(textFieldValues.name)
                        ? "Please enter a valid name"
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
                name="email"
                variant="outlined"
                color="success"
                label="Email Id"
                value={textFieldValues.email}
                required
                onChange={handleChange}
                error={
                  touched.email && isInvalidEmail(textFieldValues.email)
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
                    {touched.email &&
                      (textFieldValues.email === ""
                        ? "Email is empty"
                        : isInvalidEmail(textFieldValues.email)
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
                    fontWeight: "bold",
                  },
                }}
              />
                    </Stack>
              </div>
              <div style={{ display: "flex", width: "100%", marginBottom: "2rem", marginTop: ".5rem" }}>
                    <FormControl sx={{width: '75%'}}>
                        <InputLabel style={{color: 'black'}}> Please select a product from the list </InputLabel>
                        <Select
                            color='success'
                            multiple
                            input={<OutlinedInput label="Please select a product from the list" />}
                            onChange={handleProductNameChange}
                            value={productName}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => ( <Chip key={value} label={value} />
                                ))}
                                </Box>
                            )} >
                                {names.map((name) => (
                                    <MenuItem key={name} value={name}> {name} </MenuItem>
                                ))}
                        </Select>
                    </FormControl>
              </div>
              <div style={{ display: "flex", width: "100%", marginBottom: "2rem", marginTop: ".5rem" }}>
                <TextField multiline color='success' minRows={2} maxRows={4} style={{width: '100%'}} 
                  label="Your experience after using our product"
                  sx={{
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
                  }}/>
              </div>
              <div style={{ display: "flex", width: "100%", marginBottom: "3rem", marginTop: ".5rem" }}>
                <TextField multiline color='success' minRows={2} maxRows={4} style={{width: '100%'}} 
                  label="Constructive criticism which help us improve our product and quality"
                  sx={{
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
                  }}/>
              </div>
              <Button variant="contained"
                sx={{ backgroundColor: "#a2ff86", color: 'black', fontWeight: 'bold', "&:hover": {
                  backgroundColor: "#87e567" },}}
                disabled={isInvalidName(textFieldValues.name) || isInvalidEmail(textFieldValues.email) || productName.length === 0}
                onClick={closeFeedbackModal}
              > Submit </Button>
              <Button variant="contained"
                sx={{ marginLeft: "2rem", backgroundColor: "#a2ff86", color: 'black', fontWeight: 'bold', "&:hover": {
                  backgroundColor: "#87e567" },}}
                onClick={closeFeedbackModal}
              > Close </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;
