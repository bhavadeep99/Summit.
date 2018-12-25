import React, { Component } from "react";
import { Typography, IconButton, Grid } from "@material-ui/core";
import { Schedule, VideoLibrary, TrendingUp } from "@material-ui/icons";

class SummitOverview extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "white"
        }}
        className="summit-overview"
      >
        <Typography
          color="default"
          variant="title"
          align="center"
          style={{ paddingTop: "20px", letterSpacing: "5px" }}
        >
          SUMMIT OVERVIEW
        </Typography>
        <Grid container spacing={16} justify="center">
          <Grid item xs={12} sm>
            <Typography color="default" variant="title" align="center">
              <div>
                <IconButton color="inherit" style={{ color: "#00695f" }}>
                  <TrendingUp />
                </IconButton>
              </div>
              35+ Classes
            </Typography>
            <Typography
              color="default"
              variant="caption"
              align="center"
              style={{ opacity: "0.5", fontStyle: "italic" }}
            >
              from the masters
            </Typography>
            <Typography
              color="default"
              variant="caption"
              align="center"
              style={{ padding: "5px 0" }}
            >
              Get unlimited access,
              <br /> with new classes launching each month.
            </Typography>
          </Grid>
          <Grid item xs={12} sm>
            <Typography color="default" variant="title" align="center">
              <div>
                <IconButton color="inherit" style={{ color: "#00695f" }}>
                  <VideoLibrary />
                </IconButton>
              </div>
              24 Lessons
            </Typography>
            <Typography
              color="default"
              variant="caption"
              align="center"
              style={{ opacity: "0.5", fontStyle: "italic" }}
            >
              average per class
            </Typography>
            <Typography
              color="default"
              variant="caption"
              align="center"
              style={{ padding: "5px 0" }}
            >
              Watch and engange with fellow peers
              <br /> in the online community.
            </Typography>
          </Grid>
          <Grid item xs={12} sm>
            <Typography color="default" variant="title" align="center">
              <div>
                <IconButton color="inherit" style={{ color: "#00695f" }}>
                  <Schedule />
                </IconButton>
              </div>
              12 Minutes
            </Typography>
            <Typography
              color="default"
              variant="caption"
              align="center"
              style={{ opacity: "0.5", fontStyle: "italic" }}
            >
              average per lesson
            </Typography>
            <Typography
              color="default"
              variant="caption"
              align="center"
              style={{ padding: "5px 0" }}
            >
              Learn anytime, anywhere - vailable
              <br /> on web, iOS and Android.
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SummitOverview;
