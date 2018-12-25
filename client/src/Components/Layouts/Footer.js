import React, { Component } from "react";
import { Grid, Typography, TextField, Button, Icon } from "@material-ui/core";
import { loadCSS } from "fg-loadcss/src/loadCSS";
import logo from "../Images/logo.png";
import { Link } from "@reach/router";

class Footer extends Component {
  componentDidMount() {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#insertion-point-jss")
    );
  }
  render() {
    return (
      <div className="footer">
        <Grid container spacing={16}>
          <Grid item sm>
            <Grid container spacing={16}>
              <Grid item xs={12} />
              <Grid item xs={12}>
                <Link to="/">
                  <img src={logo} alt="logo" className="footer-logo" />
                </Link>
              </Grid>
              <Grid item xs={12} />
              <Grid item xs={12} />
            </Grid>
          </Grid>
          <Grid item sm xs={6}>
            <Grid container spacing={16}>
              <Grid item xs={6}>
                <Typography
                  variant="subheading"
                  color="inherit"
                  style={{ opacity: "0.5" }}
                >
                  MENU
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subheading" color="inherit">
                  <Link to="/courses">Classes</Link>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subheading" color="inherit">
                  <Link to="/courses">All-Access</Link>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subheading" color="inherit">
                  <Link to="/">Gifts</Link>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subheading" color="inherit">
                  <Link to="/">Support</Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm xs={6}>
            <Grid container spacing={16}>
              <Grid item xs={12}>
                <Typography
                  variant="subheading"
                  color="inherit"
                  style={{ opacity: "0.5" }}
                >
                  <Link to="/">ABOUT</Link>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subheading" color="inherit">
                  <Link to="/">News</Link>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subheading" color="inherit">
                  <Link to="/">Privacy</Link>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subheading" color="inherit">
                  <Link to="/">Terms</Link>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subheading" color="inherit">
                  <Link to="/">Careers</Link>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subheading" color="inherit">
                  <Link to="/">Sitemap</Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm xs={6}>
            <Grid container spacing={16}>
              <Grid item xs={12}>
                <Typography
                  variant="subheading"
                  color="inherit"
                  style={{ opacity: "0.5" }}
                >
                  <Link to="/">DOWNLOAD</Link>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subheading" color="inherit">
                  <Link to="/">App Store</Link>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subheading" color="inherit">
                  <Link to="/">Google Play</Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm xs={6}>
            <Grid container spacing={8}>
              <Grid item xs={12}>
                <Typography
                  variant="subheading"
                  color="inherit"
                  style={{ opacity: "0.5" }}
                >
                  STAY UP TO DATE WITH US
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="caption" color="inherit">
                  By giving us your email, you agree to our Terms of Service and
                  Privacy Policy.
                </Typography>
              </Grid>
              <Grid item xs={12} xs={12}>
                <Typography variant="subheading" color="inherit">
                  <form noValidate autoComplete="off">
                    <TextField
                      id="outlined-name"
                      label="Email Address"
                      margin="normal"
                      variant="outlined"
                      fullWidth
                      style={{ backgroundColor: "white" }}
                    />
                  </form>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="raised"
                  color="default"
                  align="center"
                  width="100%"
                  style={{
                    color: "#fff",
                    backgroundColor: "#221f1f",
                    height: "auto",
                    letterSpacing: "3px"
                  }}
                >
                  SUBMIT
                </Button>
              </Grid>
              <Grid item xs={12} />
              <Grid item xs={12}>
                <Grid container spacing={24}>
                  <Grid item>
                    <Icon className="fab fa-twitter-square" />
                  </Grid>
                  <Grid item>
                    <Icon className="fab fa-facebook-square" />
                  </Grid>
                  <Grid item>
                    <Icon className="fab fa-youtube-square" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Footer;
