import React, { Component } from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import facebook from "../Images/facebook.png";
import google from "../Images/google.png";

class OAuthLogin extends Component {
  render() {
    return (
      <React.Fragment>
        <Grid item xs={12} sm={12}>
          <Typography align="left" style={{ marginTop: 10, color: "gray" }}>
            or sign in with one of these services
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} style={{ marginTop: 20 }}>
          <Button
            onClick={this.props.handleFacebookSignIn}
            variant="contained"
            color="default"
            size="large"
            fullWidth
            style={{
              color: "#000",
              backgroundColor: "#FFF",
              letterSpacing: "2px",
              height: 60
            }}
          >
            <img
              src={facebook}
              width="30px"
              height="auto"
              alt="facebook"
              style={{ marginRight: 10 }}
            />
            FACEBOOK
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} style={{ marginTop: 20 }}>
          <Button
            variant="contained"
            onClick={this.props.handleGoogleSignIn}
            color="default"
            size="large"
            fullWidth
            style={{
              color: "#000",
              backgroundColor: "#FFF",
              letterSpacing: "2px",
              height: 60
            }}
          >
            <img
              src={google}
              width="30px"
              height="auto"
              alt="google"
              style={{ marginRight: 10 }}
            />
            GOOGLE
          </Button>
        </Grid>
      </React.Fragment>
    );
  }
}

export default OAuthLogin;
