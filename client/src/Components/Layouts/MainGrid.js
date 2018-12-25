import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { graphql } from "react-apollo";
import { getCourses } from "../Queries/query";
import CourseCard from "./CourseCard";

class MainGrid extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "white",
          color: "#000",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          paddingBottom: 20,
          paddingTop: 30
        }}
      >
        <div>
          <Typography
            color="default"
            variant="title"
            align="center"
            style={{ paddingTop: "20px", letterSpacing: "5px" }}
          >
            POPULAR COURSES
          </Typography>
        </div>
        <div>
          <div
            className="main-grid"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: 20
            }}
          >
            {this.props.getCourses.loading ? (
              <div />
            ) : (
              this.props.getCourses.courses.map(course => {
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

export default graphql(getCourses, { name: "getCourses" })(MainGrid);
