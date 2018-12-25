import React, { Component } from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  IconButton,
  ListSubheader,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Fab,
  Hidden
} from "@material-ui/core";
import YouTube from "react-youtube";
import { ExpandMore, PlayCircleFilled, Add, Remove } from "@material-ui/icons";
import firebase from "../Config/firebase";

const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});

const lessons = [
  {
    name: "01",
    title: "Introduction",
    caption:
      "Meet your new instructor, Grammy Award-winning guitarist Tom Morello, and get ready to uncover your authentic artistic self.",
    key: "key1",
    videoId: "qaIghx4QRN4"
  },
  {
    name: "02",
    title: "Developing Your Creative Voice",
    caption:
      "Tom teaches you how to think beyond your musical influences, challenge the traditional boundaries of the electric guitar, and start developing your own voice as a musician.",
    key: "key2",
    videoId: "t9c7aheZxls"
  },
  {
    name: "03",
    title: "Riffs",
    caption:
      "Powerful, hard-driving riffs are the heart and soul of Tom’s musical legacy. Learn his tips for experimenting with tuning, slides, chukkas, and more, to unleash heavy, rocking riffs of your own.",
    key: "key3",
    videoId: "0FJhiSdGWsk"
  },
  {
    name: "04",
    title: "Gear:Pedals and Effects",
    caption:
      "Tom walks you through his basic pedal rig from delays to tuner and wah-wah to whammy. Learn how he uses each to create a diverse collection of sounds and effects.",
    key: "key4",
    videoId: "zcikLQZI5wQ"
  },
  {
    name: "05",
    title: "Tones and Sounds",
    caption:
      "It’s not what pedals you own, it’s how you use them. Learn Tom’s creative process for discovering sounds and how you can create your own.",
    key: "key5",
    videoId: "07d2dXHYb94"
  },
  {
    name: "06",
    title: "Tom's Noise Chart",
    caption:
      "Tom walks you through his own noise chart, including examples from “Guerilla Radio” and “Your Time Has Come,” to show you his system for keeping track of all the elements that come together to create an original sound.",
    key: "key6",
    videoId: "TYCFxvU-Lzg"
  },
  {
    name: "07",
    title: "Tom's Influences: Rock, Jazz, Classical, and Folk",
    caption:
      "A diverse set of musical influences can help you take your playing in exciting new directions. Learn how Tom incorporates the genres that have made an impact on him into his own music, and how you can do the same.",
    key: "key7",
    videoId: "zON0wDD7VJY"
  },
  {
    name: "08",
    title: "Tom's Influences: EDM, the Blues, and Hip-Hop",
    caption:
      "You can learn from other artists’ styles, melodies, attitudes, and sounds. Tom teaches you how to fold blues guitar—and more modern, non-guitar sounds from EDM and hip-hop—into your playing.",
    key: "key8",
    videoId: "H8xRmJUf9q4"
  },
  {
    name: "09",
    title: "Practice",
    caption:
      "Tom teaches you how to structure your practice time, from balancing technique and theory to segmenting your practice day.",
    key: "key9",
    videoId: "LDEI7LJ24hc"
  },
  {
    name: "10",
    title: "Conclusion",
    caption:
      "Tom wraps up his class with a few parting words and an artistic challenge to you: “Envision something that goes beyond what anybody’s imagined before—” and never stop pushing.",
    key: "key10",
    videoId: "qoqG7Px6cOQ"
  }
];

const opts = {
  height: 500,
  width: "100%",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
};
const mobileOpts = {
  height: 200,
  width: "100%",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
};

class CourseModules extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: "qaIghx4QRN4",
      display: "none",
      playListIcon: ""
    };
    this.updatePlayList = this.updatePlayList.bind(this);
  }

  /* componentWillReceiveProps() {
    db.collection("users")
      .doc(this.props.user.uid)
      .where("playList", "array-contains", "Swaroop")
      .get()
      .then(snapshot => {
        console.log(snapshot);
      })
      .catch(error => {
        console.log(error);
      });
  }*/

  updatePlayList() {
    db.collection("users")
      .doc(this.props.user.uid)
      .update({
        playList: firebase.firestore.FieldValue.arrayUnion(this.props.courseID)
      })
      .then(() => {
        this.setState({ playListIcon: "Remove" });
      })
      .catch(error => {
        console.log(error);
      });

    if (this.state.playListIcon === "Add") {
      this.setState({ playListIcon: "Remove" });
    } else if (this.state.playListIcon === "Remove") {
      this.setState({ playListIcon: "Add" });
    }
  }

  render() {
    return (
      <div>
        <Hidden mdUp>
          <div
            style={{
              margin: 30,
              marginTop: 120,
              maxHeight: 600,
              display: "flex",
              flex: 1,
              justifyContent: "center",
              flexDirection: "column"
            }}
          >
            <div
              style={{
                alignSelf: "flex-end",
                display: "flex"
              }}
            >
              <Fab
                size="medium"
                variant="extended"
                aria-label="Add"
                onClick={this.updatePlayList}
                style={{
                  color: "#fff",
                  backgroundColor: "#221F1F"
                }}
              >
                {this.state.playListIcon === "" ||
                this.state.playListIcon === "Add" ? (
                  <Add />
                ) : (
                  <Remove />
                )}
              </Fab>
            </div>
            <div style={{ marginTop: 10 }}>
              <Grid container>
                <Grid item sm={12}>
                  <div
                    style={{
                      border: "0.5px solid grey",
                      width: "100%"
                    }}
                  >
                    <Paper
                      square
                      elevation={5}
                      style={{ color: "#fff", backgroundColor: "transparent" }}
                    >
                      <List
                        subheader={<li />}
                        style={{
                          position: "relative",
                          overflow: "auto",
                          maxHeight: 500
                        }}
                      >
                        <ListSubheader
                          disableSticky
                          style={{
                            fontSize: 30,
                            textAlign: "center",
                            margin: 10,
                            opacity: 1,
                            textTransform: "uppercase",
                            letterSpacing: 2,
                            color: "#fff",
                            fontWeight: 1
                          }}
                        >
                          Modules
                        </ListSubheader>

                        {lessons.map(lesson => (
                          <li key={lesson.key}>
                            <ul>
                              <ListItem
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  color: "#fff"
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    color: "#fff"
                                  }}
                                >
                                  <ExpansionPanel
                                    disabled={this.props.user === null}
                                    style={{
                                      backgroundColor: "#221F1F",
                                      color: "#fff"
                                    }}
                                  >
                                    <ExpansionPanelSummary
                                      expandIcon={
                                        <ExpandMore
                                          style={{ color: "white" }}
                                        />
                                      }
                                    >
                                      <ListItemText
                                        disableTypography
                                        className="module-text"
                                        primary={lesson.title}
                                        style={{
                                          textTransform: "uppercase",
                                          letterSpacing: 2,
                                          marginTop: 10,
                                          textAlign: "center",
                                          color: "#fff",
                                          fontSize: 16,
                                          fontWeight: 20
                                        }}
                                      />
                                    </ExpansionPanelSummary>

                                    <ExpansionPanelDetails
                                      style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        flex: 1
                                      }}
                                    >
                                      <ListItemText
                                        disableTypography
                                        className="module-text"
                                        primary={lesson.caption}
                                        style={{
                                          textAlign: "justify",
                                          letterSpacing: 1.2,
                                          color: "#fff",
                                          fontSize: 14,
                                          fontWeigtht: 20,
                                          marginBottom: 20
                                        }}
                                      />
                                      <YouTube
                                        videoId={this.state.videoId}
                                        opts={mobileOpts}
                                        onReady={this._onReady}
                                        style={{
                                          position: "absolute",
                                          top: 0,
                                          left: 0
                                        }}
                                      />
                                    </ExpansionPanelDetails>
                                  </ExpansionPanel>
                                </div>
                              </ListItem>
                            </ul>
                          </li>
                        ))}
                      </List>
                    </Paper>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </Hidden>
        <Hidden mdDown>
          <div
            style={{
              margin: 30,
              marginTop: 120,
              maxHeight: 600,
              display: "flex",
              flexDirection: "column",
              flex: 1,
              flexWrap: "wrap",
              alignItems: "flex-end"
            }}
          >
            <Fab
              size="large"
              variant="extended"
              aria-label="Add"
              onClick={this.updatePlayList}
              style={{
                color: "#fff",
                backgroundColor: "#221F1F",
                marginBotton: 20
              }}
            >
              {this.state.playListIcon === "Add" ? <Add /> : <Remove />}
              {this.state.playListIcon === "Add"
                ? "Add To PlayList"
                : "Remove From PlayList"}
            </Fab>
            <Grid container spacing={8} wrap style={{ marginTop: 10 }}>
              <Grid item sm={5}>
                <div
                  style={{
                    border: "0.5px solid grey",
                    width: "100%"
                  }}
                >
                  <Paper
                    square
                    elevation={5}
                    style={{ color: "#fff", backgroundColor: "transparent" }}
                  >
                    <List
                      subheader={<li />}
                      style={{
                        position: "relative",
                        overflow: "auto",
                        maxHeight: 500
                      }}
                    >
                      <ListSubheader
                        disableSticky
                        style={{
                          fontSize: 30,
                          textAlign: "center",
                          margin: 10,
                          opacity: 1,
                          textTransform: "uppercase",
                          letterSpacing: 2,
                          color: "#fff",
                          fontWeight: 1
                        }}
                      >
                        Modules
                      </ListSubheader>

                      {lessons.map(lesson => (
                        <li key={lesson.key}>
                          <ul>
                            <ListItem
                              button
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                color: "#fff"
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  color: "#fff"
                                }}
                              >
                                <ExpansionPanel
                                  disabled={this.props.user === null}
                                  style={{
                                    backgroundColor: "#221F1F",
                                    color: "#fff"
                                  }}
                                >
                                  <ExpansionPanelSummary
                                    expandIcon={
                                      <ExpandMore style={{ color: "white" }} />
                                    }
                                  >
                                    <IconButton
                                      color="inherit"
                                      style={{ top: 0 }}
                                      onClick={() =>
                                        this.setState({
                                          videoId: lesson.videoId
                                        })
                                      }
                                    >
                                      <PlayCircleFilled
                                        style={{ fontSize: 30 }}
                                      />
                                    </IconButton>
                                    <ListItemText
                                      disableTypography
                                      className="module-text"
                                      primary={lesson.title}
                                      style={{
                                        textTransform: "uppercase",
                                        letterSpacing: 2,
                                        marginTop: 10,
                                        textAlign: "center",
                                        color: "#fff",
                                        fontSize: 16,
                                        fontWeight: 20
                                      }}
                                    />
                                  </ExpansionPanelSummary>

                                  <ExpansionPanelDetails>
                                    <ListItemText
                                      disableTypography
                                      className="module-text"
                                      primary={lesson.caption}
                                      style={{
                                        textAlign: "justify",
                                        letterSpacing: 1.2,
                                        color: "#fff",
                                        fontSize: 14,
                                        fontWeigtht: 20
                                      }}
                                    />
                                  </ExpansionPanelDetails>
                                </ExpansionPanel>
                              </div>
                            </ListItem>
                          </ul>
                        </li>
                      ))}
                    </List>
                  </Paper>
                </div>
              </Grid>

              <Grid item sm={7} elevation={5}>
                <YouTube
                  videoId={this.state.videoId}
                  opts={opts}
                  onReady={this._onReady}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
              </Grid>
            </Grid>
          </div>
        </Hidden>
      </div>
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.stopVideo();
  }
}

export default CourseModules;
