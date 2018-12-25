import React, { Component } from "react";
import { TextField, Grid, Button } from "@material-ui/core";

class ProfileLayout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form noValidate autoComplete="off">
        <Grid
          container
          justify="center"
          alignItems="center"
          spacing={8}
          style={{ marginTop: "20px", width: "100%" }}
        >
          <Grid item xs={12}>
            <TextField
              id="First-name"
              label="First Name"
              margin="normal"
              variant="outlined"
              fullWidth
              value={this.props.firstName}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="Last-name"
              label="Last Name"
              margin="normal"
              variant="outlined"
              fullWidth
              value={this.props.lastName}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              type="email"
              autoComplete="email"
              id="email"
              label="Email"
              margin="normal"
              variant="outlined"
              fullWidth
              value={this.props.email}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={12} style={{ marginTop: 20 }}>
            <Button
              variant="contained"
              color="default"
              size="large"
              fullWidth
              style={{
                color: "#fff",
                backgroundColor: "#00695f",
                letterSpacing: "2px",
                height: 50
              }}
            >
              SAVE
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default ProfileLayout;
