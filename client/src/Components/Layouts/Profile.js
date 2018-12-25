import React, { Component } from "react";
import { Grid, Avatar, Button, Hidden, Paper } from "@material-ui/core";
import AccountLayout from "./AccountLayout";
import ProfileLayout from "./ProfileLayout";
import firebase from "../Config/firebase";

const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      isProfilePage: true
    };
  }

  componentDidMount() {
    db.collection("users")
      .doc(this.props.user.uid)
      .get()
      .then(contentDoc => {
        this.setState({
          firstName: contentDoc.data().firstName,
          lastName: contentDoc.data().lastName,
          email: this.props.user.email
        });
      })
      .catch(error => {
        console.log(error);
      });
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="profile" style={{ padding: 120, paddingTop: 150 }}>
        <Hidden mdDown>
          <Grid
            container
            direction="row"
            wrap="wrap"
            style={{ backgroundColor: "white", padding: 20 }}
          >
            <Grid item sm={4}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  padding: 20,
                  paddingRight: 70,
                  borderRight: "1px solid grey",
                  height: "100%"
                }}
              >
                <div style={{ alignSelf: "center" }}>
                  <Avatar
                    style={{
                      margin: 10,
                      width: 120,
                      height: 120,
                      fontSize: 40,
                      backgroundColor: "#221F1F",
                      border: "1px solid white"
                    }}
                  >
                    {this.state.firstName[0] + this.state.lastName[0]}
                  </Avatar>
                </div>
                <div style={{ marginTop: 10 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={e => this.setState({ isProfilePage: true })}
                    style={{ backgroundColor: "#221F1F", color: "#fff" }}
                  >
                    PROFILE
                  </Button>
                </div>
                {/*<div style={{ marginTop: 20, width: "100%" }}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={e => this.setState({ isProfilePage: false })}
                  style={{ backgroundColor: "#221F1F", color: "#fff" }}
                >
                  MY ACCOUNT
                </Button>
              </div>*/}
              </div>
            </Grid>

            <Grid item sm={8}>
              <div
                style={{
                  margin: 10,
                  marginTop: -5,
                  paddingLeft: 150
                }}
              >
                {this.state.isProfilePage ? (
                  <ProfileLayout
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    email={this.state.email}
                  />
                ) : (
                  <AccountLayout />
                )}
              </div>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "center",
              padding: 30,
              backgroundColor: "white",
              flexDirection: "column"
            }}
          >
            <Avatar
              style={{
                margin: 10,
                width: 120,
                height: 120,
                fontSize: 40,
                backgroundColor: "#221F1F",
                border: "1px solid white"
              }}
            >
              {this.state.firstName[0] + this.state.lastName[0]}
            </Avatar>
            {this.state.isProfilePage ? (
              <ProfileLayout
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                email={this.state.email}
                style={{ width: "300px" }}
              />
            ) : (
              <AccountLayout />
            )}
          </div>
        </Hidden>
      </div>
    );
  }
}

export default Profile;
