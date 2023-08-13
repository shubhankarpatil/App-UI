import React from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";

const FranchisePage = () => {
  return (
    <div>
      <Grid container spacing={3}>
        {/* Left side - Reasons to get a franchise */}
        <Grid item xs={6}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            {/* Add your paragraph of text here */}
            <p>Reasons to get a franchise with us</p>
          </Paper>
        </Grid>

        {/* Right side - Form */}
        <Grid item xs={6}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Grid container spacing={2}>
              {/* First row */}
              <Grid item xs={6}>
                <TextField label="Field 1" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Field 2" fullWidth />
              </Grid>

              {/* Second row */}
              <Grid item xs={6}>
                <TextField label="Field 3" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <TextField label="Field 4" fullWidth />
              </Grid>
            </Grid>

            {/* Multiline text field */}
            <TextField
              label="Additional Comments"
              multiline
              rows={4}
              fullWidth
              style={{ marginTop: "20px" }}
            />

            {/* Submit button */}
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "20px" }}
            >
              Submit
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default FranchisePage;
