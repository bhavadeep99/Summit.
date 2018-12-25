import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getCourses } from "../Queries/query";
import AllCoursesLayout from "./AllCoursesLayout";

class Courses extends Component {
  render() {
    return (
      <div
        className="courses-background"
        style={{
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          paddingBottom: 20,
          paddingTop: 110
        }}
      >
        <div>
          <AllCoursesLayout category="Filmmaking" />
          <AllCoursesLayout category="Writing" />
          <AllCoursesLayout category="Journalism" />
          <AllCoursesLayout category="Acting" />
          <AllCoursesLayout category="Cooking" />
        </div>
      </div>
    );
  }
}

export default graphql(getCourses, { name: "getCourses" })(Courses);
