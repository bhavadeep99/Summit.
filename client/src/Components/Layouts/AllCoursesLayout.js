import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { graphql } from "react-apollo";
import { getCourses } from "../Queries/query";
import CourseCard from "./CourseCard";

class AllCoursesLayout extends Component {
  render() {
    return (
      <div>
        <div>
          <Typography
            color="inherit"
            variant="title"
            align="left"
            style={{
              paddingTop: "20px",
              letterSpacing: "5px",
              textTransform: "uppercase",
              marginLeft: 42
            }}
          >
            {this.props.category}
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            marginTop: 20,
            marginLeft: 30
          }}
        >
          {this.props.getCourses.loading ? (
            <div />
          ) : (
            this.props.getCourses.courses.map(course => {
              return (
                course.category === this.props.category && (
                  <div style={{ margin: 2 }} key={course.id}>
                    <CourseCard
                      image={course.courseImageURL}
                      name={course.courseID}
                      category={course.category}
                      description={course.description}
                      courseID={course.courseID}
                    />
                  </div>
                )
              );
            })
          )}
        </div>
      </div>
    );
  }
}

export default graphql(getCourses, { name: "getCourses" })(AllCoursesLayout);
