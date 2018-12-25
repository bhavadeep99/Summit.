import React, { Component } from "react";
import Hero from "./Components/Layouts/Hero";
import Courses from "./Components/Layouts/Courses";
import Login from "./Components/Layouts/Login";
import Archive from "./Components/Layouts/Archive";
import Admin from "./Components/Layouts/Admin";
import "./App.css";
import firebase from "./Components/Config/firebase";
import { Router, navigate } from "@reach/router";
import Header from "./Components/Layouts/Header";
import Profile from "./Components/Layouts/Profile";
import Playlist from "./Components/Layouts/Playlist";
import Footer from "./Components/Layouts/Footer";

const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      firstName: null,
      lastName: null,
      playList: null,
      displayName: null,
      userID: null
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(FBUser => {
      if (FBUser) {
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        });
      } else {
        this.setState({
          user: null
        });
      }
    });
  }

  registerUser = userName => {
    firebase.auth().onAuthStateChanged(FBUser => {
      FBUser.updateProfile({
        displayName: userName.firstName + userName.lastName
      }).then(() => {
        db.collection("users")
          .doc(FBUser.uid)
          .set({
            firstName: userName.firstName,
            lastName: userName.lastName,
            playList: userName.playList
          });
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        });
        navigate("/");
      });
    });
  };

  render() {
    return (
      <div>
        <Header color="inherit" user={this.state.user} />
        <Router>
          <Hero path="/" user={this.state.user} />
          <Courses path="/courses" user={this.state.user} />

          <Login
            path="/login"
            registerUser={this.registerUser}
            user={this.state.user}
          />

          <Archive path="/courses/:course_id" user={this.state.user} />
          <Admin path="/admin" />
          {this.state.user && (
            <Profile path="/profile" user={this.state.user} />
          )}
          {this.state.user && (
            <Playlist path="/playlist" user={this.state.user} />
          )}
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
