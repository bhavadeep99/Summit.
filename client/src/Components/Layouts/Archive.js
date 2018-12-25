import React, { Component } from "react";
import { getCourses } from "../Queries/query";
import { graphql, compose } from "react-apollo";
import CourseModules from "./CourseModules";
import MainGrid from "./MainGrid";

class Archive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      course: ""
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    var data = [];
    var course = "";
    var courseDetails = "";
    if (!this.props.getCourses.loading) {
      data = this.props.getCourses.courses;
      course = data.filter(course => course.courseID === this.props.course_id);
      for (var i = 0; i <= 1; i++) {
        if (i === 0) {
          courseDetails = course[i];
        }
      }
    }

    return (
      <div>
        <div
          className="archive"
          style={{
            display: "flex",
            flexGrow: 1,
            backgroundImage: `url(${courseDetails.instructorImageURL})`,
            backgroundPosition: "contain",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "auto",
            minHeight: 600
          }}
        >
          <CourseModules
            user={this.props.user}
            courseID={this.props.course_id}
          />
        </div>
        <div>
          <MainGrid />
        </div>
      </div>
    );
  }
}

export default compose(graphql(getCourses, { name: "getCourses" }))(Archive);
