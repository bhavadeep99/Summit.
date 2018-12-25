import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { graphql } from "react-apollo";
import { getCourses } from "../Queries/query";
import CourseCard from "./CourseCard";
import firebase from "../Config/firebase";

const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});

class PlayList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playList: []
    };
  }
  componentDidMount() {
    db.collection("users")
      .doc(this.props.user.uid)
      .get()
      .then(contentDoc => {
        this.setState({ playList: contentDoc.data().playList });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    var data = [];
    return (
      <div
        className="playlist"
        style={{
          backgroundColor: "white",
          color: "#000",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          paddingBottom: 20,
          paddingTop: 110,
          minHeight: 600
        }}
      >
        <div>
          <Typography
            color="default"
            variant="h4"
            align="center"
            style={{ paddingTop: "20px", letterSpacing: "5px", color: "white" }}
          >
            PLAYLIST
          </Typography>
        </div>
        <div>
          <div
            className="playlist-modules"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: 20
            }}
          >
            {this.state.playList.forEach(list => {
              this.props.getCourses.courses.forEach(course => {
                if (list === course.courseID) {
                  data.push(course);
                }
              });
            })}
            {this.props.getCourses.loading ? (
              <div />
            ) : (
              data.map(course => {
                return (
                  <div style={{ margin: 10 }} key={course.id}>
                    <CourseCard
                      image={course.courseImageURL}
                      name={course.courseID}
                      category={course.category}
                      description={course.description}
                      courseID={course.courseID}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default graphql(getCourses, { name: "getCourses" })(PlayList);
