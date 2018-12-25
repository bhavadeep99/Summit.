import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Divider, Hidden } from "@material-ui/core";
import Details from "./Details";
import { graphql } from "react-apollo";
import { getCourses } from "../Queries/query";
import { Link } from "@reach/router";
import SummitOverview from "./SummitOverview";
import MainGrid from "./MainGrid";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
  }
  getData() {
    if (!this.props.getCourses.loading) {
      return (
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
          transitionTime={1000}
          showIndicators={false}
          emulateTouch
        >
          {this.props.getCourses.courses.map(course => (
            <div key={course.id}>
              <Link
                to={"/courses/" + course.courseID}
                className="carousel-image"
              >
                <img src={course.courseImageURL} alt={course.name} />
              </Link>
              <div className="legend">
                <Hidden smDown>
                  <Details
                    instructorName={course.instructorName}
                    tagline={course.tagLine}
                    user={this.props}
                  />
                </Hidden>
              </div>
            </div>
          ))}
        </Carousel>
      );
    }
  }
  render() {
    const { user } = this.props;
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>{this.getData()}</div>
        <div>
          <SummitOverview />
          <Divider />
        </div>
        <div>
          <MainGrid />
        </div>
      </div>
    );
  }
}

export default graphql(getCourses, { name: "getCourses" })(Hero);
