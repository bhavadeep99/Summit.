import React, { Component } from "react";
import PropTypes from "prop-types";
import { navigate, Redirect } from "@reach/router";
import {
  Paper,
  Tabs,
  Tab,
  Typography,
  TextField,
  Grid,
  Button,
  Divider
} from "@material-ui/core";
import { loadCSS } from "fg-loadcss/src/loadCSS";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";
import OAuthLogin from "./OauthLogin";
import firebase, { googleProvider, facebookProvider } from "../Config/firebase";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      errorMessage: "",
      playList: [],
      value: 1
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleFacebookSignIn = this.handleFacebookSignIn.bind(this);
    this.handleGoogleSignIn = this.handleGoogleSignIn.bind(this);
  }

  componentDidMount() {
    loadCSS(
      "https://use.fontawesome.com/releases/v5.1.0/css/all.css",
      document.querySelector("#insertion-point-jss")
    );
  }
  handleFacebookSignIn() {
    firebase
      .auth()
      .signInWithPopup(facebookProvider)
      .then(function(result) {
        navigate("/");
      })
      .then(function(result) {
        console.log(result);
      })
      .catch(error => {
        if (error.message !== null) {
          this.setState({ errorMessage: error.message });
          console.log(error.message);
        } else {
          this.setState({ errorMessage: null });
        }
      });
  }

  handleGoogleSignIn() {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(function(result) {
        navigate("/");
      })
      .catch(error => {
        if (error.message !== null) {
          this.setState({ errorMessage: error.message });
        } else {
          this.setState({ errorMessage: null });
        }
      });
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleSignUp() {
    var registrationInfo = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      playList: this.state.playList
    };

    if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        errorMessage: "Password and Confirm Password do not match"
      });
    } else {
      this.setState({ errorMessage: null });
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          registrationInfo.email,
          registrationInfo.password
        )
        .then(resp => {
          this.props.registerUser(registrationInfo);
        })
        .catch(error => {
          if (error.message !== null) {
            this.setState({ errorMessage: error.message });
          } else {
            this.setState({ errorMessage: null });
          }
        });
    }
  }
  handleSignIn() {
    console.log(this.state);
    var registrationInfo = {
      email: this.state.email,
      password: this.state.password
    };
    firebase
      .auth()
      .signInWithEmailAndPassword(
        registrationInfo.email,
        registrationInfo.password
      )
      .then(() => {
        navigate("/");
      })
      .catch(error => {
        if (error.message !== null) {
          this.setState({ errorMessage: error.message });
        } else {
          this.setState({ errorMessage: null });
        }
      });
  }

  render() {
    const { value } = this.state;
    const { user } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div
          className="login-page"
          style={{
            backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/summit-45861.appspot.com/o/02_02.png?alt=media&token=bd5c016d-a434-40e0-985e-393aba0fe663")`,
            backgroundPosition: "contain",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <Paper className="login-paper" elevation={3} square>
            <Tabs
              value={value}
              onChange={this.handleChange}
              indicatorColor="primary"
              fullWidth
            >
              <Tab
                label="SIGN UP"
                style={{ height: 60, letterSpacing: "2px" }}
              />
              <Tab
                label="SIGN IN"
                style={{ height: 60, letterSpacing: "2px" }}
              />
            </Tabs>
            {value === 0 && (
              <TabContainer>
                <div className="signup">
                  <Typography
                    variant="headline"
                    style={{ letterSpacing: "2px" }}
                  >
                    Create your account
                  </Typography>
                  <form noValidate autoComplete="off">
                    <Grid
                      container
                      justify="center"
                      spacing={8}
                      style={{ marginTop: "20px" }}
                    >
                      <Grid item xs={12} sm={6}>
                        <TextField
                          id="First-name"
                          value={this.state.firstName}
                          label="First Name"
                          margin="normal"
                          variant="outlined"
                          fullWidth
                          onChange={e =>
                            this.setState({ firstName: e.target.value })
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          id="Last-name"
                          value={this.state.lastName}
                          label="Last Name"
                          margin="normal"
                          variant="outlined"
                          fullWidth
                          onChange={e =>
                            this.setState({ lastName: e.target.value })
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <TextField
                          type="email"
                          value={this.state.email}
                          id="Email"
                          label="Email Address"
                          margin="normal"
                          variant="outlined"
                          fullWidth
                          onChange={e =>
                            this.setState({ email: e.target.value })
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          type="password"
                          autoComplete="password"
                          value={this.state.password}
                          id="Password"
                          label="Password"
                          margin="normal"
                          variant="outlined"
                          fullWidth
                          onChange={e =>
                            this.setState({ password: e.target.value })
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          type="password"
                          autoComplete="confirm-password"
                          value={this.state.confirmPassword}
                          id="Confirm-Password"
                          label="Confirm Password"
                          margin="normal"
                          variant="outlined"
                          fullWidth
                          onChange={e =>
                            this.setState({ confirmPassword: e.target.value })
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <Typography align="center" style={{ marginTop: 10 }}>
                          By clicking Sign Up, you agree to our Terms of Use and
                          our Privacy Policy.
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} style={{ marginTop: 20 }}>
                        <Button
                          variant="contained"
                          color="default"
                          size="large"
                          fullWidth
                          onClick={this.handleSignUp}
                          style={{
                            color: "#fff",
                            backgroundColor: "#00695f",
                            letterSpacing: "2px",
                            height: 50
                          }}
                        >
                          SIGN UP
                        </Button>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        style={{ marginTop: 20 }}
                        style={{
                          display: `${
                            this.state.errorMessage === null ? "none" : "inline"
                          }`
                        }}
                      >
                        <Typography
                          align="center"
                          style={{ marginTop: 10, color: "red" }}
                        >
                          {this.state.errorMessage}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} style={{ marginTop: 20 }}>
                        <Divider
                          style={{
                            width: "100%",
                            border: "1px solid #00695f"
                          }}
                        />
                      </Grid>
                      <OAuthLogin
                        handleFacebookSignIn={this.handleFacebookSignIn}
                        handleGoogleSignIn={this.handleGoogleSignIn}
                      />
                    </Grid>
                  </form>
                </div>
              </TabContainer>
            )}
            {value === 1 && (
              <TabContainer>
                <div className="signup">
                  <Typography
                    variant="headline"
                    style={{ letterSpacing: "2px" }}
                  >
                    Sign in to your account
                  </Typography>
                  <form noValidate autoComplete="off">
                    <Grid
                      container
                      justify="center"
                      spacing={8}
                      style={{ marginTop: "20px" }}
                    >
                      <Grid item xs={12} sm={12}>
                        <TextField
                          id="Email"
                          type="email"
                          label="Email Address"
                          margin="normal"
                          variant="outlined"
                          fullWidth
                          value={this.state.email}
                          onChange={e =>
                            this.setState({ email: e.target.value })
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <TextField
                          id="Password"
                          type="password"
                          label="Password"
                          margin="normal"
                          variant="outlined"
                          fullWidth
                          value={this.state.password}
                          onChange={e =>
                            this.setState({ password: e.target.value })
                          }
                        />
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <Typography align="center" style={{ marginTop: 10 }}>
                          By clicking Sign In, you agree to our Terms of Use and
                          our Privacy Policy.
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} style={{ marginTop: 20 }}>
                        <Button
                          variant="contained"
                          color="default"
                          size="large"
                          fullWidth
                          onClick={this.handleSignIn}
                          style={{
                            color: "#fff",
                            backgroundColor: "#00695f",
                            letterSpacing: "2px",
                            height: 50
                          }}
                        >
                          SIGN IN
                        </Button>
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <Typography
                          align="center"
                          varinat="subtitle"
                          color="primary"
                        >
                          Forgot your password?
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        style={{ marginTop: 20 }}
                        style={{
                          display: `${
                            this.state.errorMessage === null ? "none" : "inline"
                          }`
                        }}
                      >
                        <Typography
                          align="center"
                          style={{ marginTop: 10, color: "red" }}
                        >
                          {this.state.errorMessage}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} style={{ marginTop: 20 }}>
                        <Divider
                          style={{
                            width: "100%",
                            border: "1px solid #00695f"
                          }}
                        />
                      </Grid>
                      <OAuthLogin
                        handleFacebookSignIn={this.handleFacebookSignIn}
                        handleGoogleSignIn={this.handleGoogleSignIn}
                      />
                    </Grid>
                  </form>
                </div>
              </TabContainer>
            )}
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Login;
