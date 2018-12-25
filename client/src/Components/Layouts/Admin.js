import React, { Component } from "react";
import {
  List,
  ListItem,
  Button,
  ListItemText,
  Grid,
  TextField,
  IconButton
} from "@material-ui/core";
import { getCourses } from "../Queries/query";
import { graphql, compose } from "react-apollo";
import { theme } from "./theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { addCourseMutation } from "../Queries/query";
import { Create, Delete } from "@material-ui/icons";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: "none",
      name: "",
      description: "",
      tagline: "",
      courseImageURL: "",
      instructorImageURL: "",
      instructorName: "",
      numberOfLessons: 0,
      videoURL: "",
      category: "",
      courseID: ""
    };
  }
  showForm() {
    this.setState({
      showForm: "flex"
    });
    this.setState({
      name: "",
      description: "",
      tagline: "",
      courseImageURL: "",
      instructorImageURL: "",
      instructorName: "",
      numberOfLessons: "",
      videoURL: "",
      category: "",
      courseID: ""
    });
  }
  closeForm() {
    this.setState({
      showForm: "none"
    });
    this.props.addCourseMutation({
      variables: {
        name: this.state.name,
        description: this.state.description,
        tagline: this.state.tagline,
        courseImageURL: this.state.courseImageURL,
        instructorImageURL: this.state.instructorImageURL,
        instructorName: this.state.instructorName,
        numberOfLessons: this.state.numberOfLessons,
        videoURL: this.state.videoURL,
        category: this.state.category,
        courseID: this.state.courseID
      },
      refetchQueries: [{ query: getCourses }]
    });
  }
  getCourses() {
    var data = this.props.getCourses;
    if (data.loading) {
      return (
        <ListItem>
          <ListItemText primary="Loading" />
        </ListItem>
      );
    } else {
      return data.courses.map(course => {
        return (
          <div>
            <ListItem key={course.id}>
              <img
                src={course.courseImageURL}
                width="300"
                height="200"
                alt="course"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignContent: "center",
                  margin: 30
                }}
              >
                <ListItemText primary="Details:" style={{ margin: 5 }} />
                <ListItemText
                  primary="Name"
                  secondary={course.name}
                  style={{ margin: 5 }}
                />
                <ListItemText
                  primary="Description"
                  secondary={course.description}
                  style={{ margin: 5 }}
                />
              </div>
            </ListItem>
            <IconButton
              variant="fab"
              onClick={this.showForm.bind(this)}
              style={{
                color: "#fff",
                backgroundColor: "#00695f",
                marginLeft: 220
              }}
            >
              <Create style={{ fontSize: 20 }} />
            </IconButton>
            <IconButton
              variant="fab"
              onClick={this.showForm.bind(this)}
              style={{
                color: "#fff",
                backgroundColor: "#00695f",
                marginLeft: 5
              }}
            >
              <Delete style={{ fontSize: 20 }} />
            </IconButton>
          </div>
        );
      });
    }
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div
          style={{
            backgroundColor: "#fff",
            color: "#000",
            display: "flex",
            flexDirection: "column",
            marginTop: 90
          }}
        >
          <Grid container spacing={24}>
            <Grid item sm={6}>
              <div style={{ marginTop: 30, marginLeft: 100 }}>
                <Button
                  variant="contained"
                  color="default"
                  size="large"
                  onClick={this.showForm.bind(this)}
                  style={{
                    color: "#fff",
                    backgroundColor: "#00695f",
                    letterSpacing: "2px",
                    height: 50
                  }}
                >
                  ADD COURSE
                </Button>
              </div>
              <div>
                <List>{this.getCourses()}</List>
              </div>
            </Grid>
            <Grid item sm={6}>
              <Grid
                container
                style={{
                  width: "90%",
                  marginTop: 30,
                  display: `${this.state.showForm}`
                }}
              >
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="outlined-name"
                    label="Course Name"
                    margin="normal"
                    variant="standard"
                    fullWidth
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="outlined-name"
                    label="Course Description"
                    margin="normal"
                    variant="standard"
                    fullWidth
                    value={this.state.description}
                    onChange={e =>
                      this.setState({ description: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="outlined-name"
                    label="Tag Line"
                    margin="normal"
                    variant="standard"
                    fullWidth
                    value={this.state.tagline}
                    onChange={e => this.setState({ tagline: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="outlined-name"
                    label="Instructor Name"
                    margin="normal"
                    variant="standard"
                    fullWidth
                    value={this.state.instructorName}
                    onChange={e =>
                      this.setState({ instructorName: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="outlined-name"
                    label="Number of Lessons"
                    margin="normal"
                    variant="standard"
                    fullWidth
                    value={this.state.numberOfLessons}
                    onChange={e =>
                      this.setState({ numberOfLessons: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="outlined-name"
                    label="Course Image URL"
                    margin="normal"
                    variant="standard"
                    fullWidth
                    value={this.state.courseImageURL}
                    onChange={e =>
                      this.setState({ courseImageURL: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="outlined-name"
                    label="Instructor Image URL"
                    margin="normal"
                    variant="standard"
                    fullWidth
                    value={this.state.instructorImageURL}
                    onChange={e =>
                      this.setState({ instructorImageURL: e.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="outlined-name"
                    label="Video URL"
                    margin="normal"
                    variant="standard"
                    fullWidth
                    value={this.state.videoURL}
                    onChange={e => this.setState({ videoURL: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="outlined-name"
                    label="Category"
                    margin="normal"
                    variant="standard"
                    fullWidth
                    value={this.state.category}
                    onChange={e => this.setState({ category: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="outlined-name"
                    label="CourseID"
                    margin="normal"
                    variant="standard"
                    fullWidth
                    value={this.state.courseID}
                    onChange={e => this.setState({ courseID: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Button
                    variant="contained"
                    color="default"
                    size="large"
                    fullWidth
                    onClick={this.closeForm.bind(this)}
                    style={{
                      color: "#fff",
                      backgroundColor: "#00695f",
                      letterSpacing: "2px",
                      height: 50
                    }}
                  >
                    SUBMIT
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default compose(
  graphql(getCourses, { name: "getCourses" }),
  graphql(addCourseMutation, { name: "addCourseMutation" })
)(Admin);
