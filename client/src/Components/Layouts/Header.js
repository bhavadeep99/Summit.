import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getCourses } from "../Queries/query";
import {
  Toolbar,
  Grid,
  IconButton,
  Typography,
  AppBar,
  Menu,
  MenuItem,
  Divider,
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  TextField,
  Button
} from "@material-ui/core";
import {
  Search,
  KeyboardArrowLeftSharp,
  AccountCircle
} from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../Images/logo.png";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Link, navigate } from "@reach/router";
import firebase from "../Config/firebase";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00695f"
    }
  }
});

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      left: false,
      search: ""
    };
    this.logOut = this.logOut.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.searchClick = this.searchClick.bind(this);
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  logOut() {
    firebase.auth().signOut();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  searchClick() {
    console.log("search clicked");
    console.log(this.state.search);
    if (!this.props.getCourses.loading) {
      var courses = this.props.getCourses.courses;
      courses.map(course => {
        if (course.name.search(this.state.search) !== -1) {
          navigate(`/courses/${course.courseID}`);
        }
      });
    }
    this.toggleDrawer("left", false);
  }

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const { user } = this.props;
    console.log(this.state.search);
    const sideList = (
      <div style={{ width: 250 }}>
        <List>
          <ListItem>
            <ListItemIcon>
              <IconButton disableRipple onClick={this.searchClick}>
                <Search />
              </IconButton>
            </ListItemIcon>
            <TextField
              id="First-name"
              value={this.state.search}
              label="Search"
              fullWidth
              onChange={e => this.setState({ search: e.target.value })}
              style={{ marginTop: -20 }}
            />
          </ListItem>
          <Divider />
          <ListItem>
            <div>
              <Button
                variant="contained"
                color="default"
                onClick={this.toggleDrawer("left", false)}
                size="large"
                fullWidth
                style={{
                  color: "#fff",
                  backgroundColor: "#00695f",
                  letterSpacing: 2,
                  margin: 10,
                  width: 200
                }}
              >
                DONATE NOW
              </Button>
            </div>
          </ListItem>
          <Divider />
          <ListItem>
            <div>
              {user === null ? (
                <Link to="/login">
                  <Button
                    variant="contained"
                    color="default"
                    size="large"
                    fullWidth
                    align="center"
                    onClick={this.toggleDrawer("left", false)}
                    style={{
                      color: "#fff",
                      backgroundColor: "#221f1f",
                      letterSpacing: 2,
                      margin: 10,
                      width: 200
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
                    onClick={this.toggleDrawer("left", false)}
                    fullWidth
                    align="center"
                    style={{
                      color: "#fff",
                      width: 200,
                      backgroundColor: "#221f1f",
                      letterSpacing: 2,
                      margin: 10
                    }}
                  >
                    LEARN MORE
                  </Button>
                </Link>
              )}
            </div>
          </ListItem>
        </List>
      </div>
    );

    return (
      <MuiThemeProvider theme={theme}>
        <div className="header-container">
          <Drawer
            open={this.state.left}
            onClose={this.toggleDrawer("left", false)}
          >
            <div tabIndex={0} role="button">
              {sideList}
            </div>
          </Drawer>
          <AppBar
            position="absolute"
            color="primary"
            elevation={0}
            style={{
              background: "none",
              width: "100%",
              border: "none",
              borderRadius: "none",
              backgroundColor: "rgba(0,0,0,0.00)",
              borderColor: "rgba(0,0,0,0.00)"
            }}
          >
            <Toolbar>
              <Hidden mdUp>
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    justifyContent: "space-between"
                  }}
                >
                  <div>
                    <IconButton
                      color="inherit"
                      onClick={this.toggleDrawer("left", true)}
                    >
                      <MenuIcon />
                    </IconButton>
                  </div>
                  <div>
                    <Link
                      to="/"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flex: 1,
                        alignItems: "center"
                      }}
                    >
                      <img src={logo} width="30%" className="logo" alt="logo" />
                    </Link>
                  </div>
                  <div>
                    {user !== null && (
                      <div>
                        <IconButton
                          aria-owns={open ? "menu-appbar" : undefined}
                          aria-haspopup="true"
                          onClick={this.handleMenu}
                          color={this.props.color}
                        >
                          <AccountCircle />
                        </IconButton>
                        <Menu
                          id="menu-appbar"
                          anchorEl={anchorEl}
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "right"
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "right"
                          }}
                          open={open}
                          onClose={this.handleClose}
                        >
                          <MenuItem onClick={this.handleClose}>
                            <Link to="/profile" style={{ color: "black" }}>
                              My Profile
                            </Link>
                          </MenuItem>
                          <Divider />
                          <MenuItem onClick={this.handleClose}>
                            <Link to="/playlist" style={{ color: "black" }}>
                              My Playlist
                            </Link>
                          </MenuItem>
                          <Divider />
                          <MenuItem onClick={this.handleClose}>
                            <Link
                              to="/login"
                              onClick={this.logOut}
                              style={{ color: "black" }}
                            >
                              Logout
                            </Link>
                          </MenuItem>
                        </Menu>
                      </div>
                    )}
                  </div>
                </div>
              </Hidden>
              <Hidden mdDown>
                <Grid container justify="space-between" wrap="wrap">
                  <Grid item style={{ display: "inline" }}>
                    <Grid container>
                      <Grid item className="see-more-ins">
                        <Link to="/courses">
                          <IconButton color={this.props.color}>
                            <KeyboardArrowLeftSharp />
                          </IconButton>
                        </Link>
                      </Grid>
                      <Grid
                        className="see-more-ins"
                        item
                        style={{ marginTop: 11, marginLeft: "-14px" }}
                      >
                        <Link to="/courses">
                          <Typography
                            variant="caption"
                            color={this.props.color}
                          >
                            LEARN MORE
                          </Typography>
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Link to="/">
                      <img
                        src={logo}
                        width="120px"
                        className="logo"
                        alt="logo"
                      />
                    </Link>
                  </Grid>
                  <Grid item>
                    <Grid container>
                      <Grid item className="search-icon">
                        <IconButton
                          className="search-icon"
                          color={this.props.color}
                        >
                          <Search />
                        </IconButton>
                      </Grid>

                      <Grid item />

                      <div
                        className="search"
                        style={{
                          marginTop: 16,
                          marginLeft: "-7px",
                          display: "flex"
                        }}
                      >
                        <Typography
                          variant="caption"
                          color={this.props.color}
                          align="right"
                        >
                          SEARCH
                        </Typography>

                        {user !== null && (
                          <div style={{ marginTop: -16 }}>
                            <IconButton
                              aria-owns={open ? "menu-appbar" : undefined}
                              aria-haspopup="true"
                              onClick={this.handleMenu}
                              color={this.props.color}
                            >
                              <AccountCircle />
                            </IconButton>
                            <Menu
                              id="menu-appbar"
                              anchorEl={anchorEl}
                              anchorOrigin={{
                                vertical: "top",
                                horizontal: "right"
                              }}
                              transformOrigin={{
                                vertical: "top",
                                horizontal: "right"
                              }}
                              open={open}
                              onClose={this.handleClose}
                            >
                              <MenuItem onClick={this.handleClose}>
                                <Link to="/profile" style={{ color: "black" }}>
                                  My Profile
                                </Link>
                              </MenuItem>
                              <Divider />
                              <MenuItem onClick={this.handleClose}>
                                <Link to="/playlist" style={{ color: "black" }}>
                                  My Playlist
                                </Link>
                              </MenuItem>
                              <Divider />
                              <MenuItem onClick={this.handleClose}>
                                <Link
                                  to="/login"
                                  onClick={this.logOut}
                                  style={{ color: "black" }}
                                >
                                  Logout
                                </Link>
                              </MenuItem>
                            </Menu>
                          </div>
                        )}
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Hidden>
            </Toolbar>
          </AppBar>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default graphql(getCourses, { name: "getCourses" })(Header);
