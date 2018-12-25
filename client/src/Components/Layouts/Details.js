import React, { Component } from "react";
import { Typography, Button, Hidden } from "@material-ui/core";
import { getCourses } from "../Queries/query";
import { graphql } from "react-apollo";
import { Link } from "@reach/router";

class Details extends Component {
  render() {
    const { user } = this.props.user;
    return (
      <div>
        <Hidden smDown>
          <Typography
            variant="display3"
            color="inherit"
            style={{ textTransform: "uppercase" }}
          >
            {this.props.instructorName}
          </Typography>
          <Typography
            variant="headline"
            color="inherit"
            gutterBottom
            style={{ marginBottom: "26px", textTransform: "uppercase" }}
          >
            {this.props.tagline}
          </Typography>
          <div>
            <Typography
              variant="body2"
              color="inherit"
              gutterBottom
              align="justify"
            >
              "At Summit, we believe learning doesn't stop with school, rather
              we look at learning as lifelong adventure. We offer learning
              coupled with experience, taught by our Experts in their field.
              Summit works with you to set a path for success. You can start
              with our introductory classes and work your way to becoming an
              expert, no matter what you want to learn. So join us today for one
              of our classes."
            </Typography>
          </div>

          <div style={{ left: "0", paddingTop: "5%" }}>
            <Button
              variant="contained"
              color="default"
              size="large"
              style={{
                width: "200px",
                marginRight: "20px",
                padding: "15px",
                color: "#fff",
                backgroundColor: "#00695f",
                letterSpacing: 2
              }}
            >
              DONATE NOW
            </Button>
            {user === null ? (
              <Link to="/login">
                <Button
                  variant="contained"
                  color="default"
                  size="large"
                  align="center"
                  style={{
                    color: "#fff",
                    backgroundColor: "#221f1f",
                    width: "200px",
                    marginRight: "20px",
                    padding: "15px",
                    letterSpacing: 2
                  }}
                >
                  LOG IN
                </Button>
              </Link>
            ) : (
              <Link to="/courses">
                <Button
                  variant="contained"
                  color="default"
                  size="large"
                  align="center"
                  style={{
                    color: "#fff",
                    backgroundColor: "#221f1f",
                    width: "200px",
                    marginRight: "20px",
                    padding: "15px",
                    letterSpacing: 2
                  }}
                >
                  LEARN MORE
                </Button>
              </Link>
            )}
          </div>
        </Hidden>
      </div>
    );
  }
}

export default graphql(getCourses, { name: "getCourses" })(Details);
