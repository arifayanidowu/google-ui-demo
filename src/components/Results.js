import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "white",
    height: "100vh"
  },
  search: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 700,
    borderRadius: 50,
    background: "transparent",
    border: "1px solid #ccc",
    "&:hover": {
      boxShadow: "1px 1px 2px rgba(0,0,0,0.4)"
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      minWidth: 200
    }
  },
  speaker: {
    backgroundImage:
      "url(//www.gstatic.com/images/branding/googlemic/2x/googlemic_color_24dp.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 0",
    backgroundSize: 24,
    height: 24,
    width: 24,
    verticalAlign: "middle"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  navbar: {
    borderBottom: "1px solid #ebebeb",
    marginTop: "-26px",
    height: 58
  },
  gridIt: {
    display: "flex",
    paddingLeft: 170,
    "& > li": {
      listStyle: "none",
      "& > a": {
        textDecoration: "none",
        color: "#5f6368",
        marginRight: 30,
        fontSize: 13,
        display: "inline-block",
        padding: "16px 6px 12px 6px",
        height: 58
      }
    },
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  firstChild: {
    display: "inline-block",
    borderBottom: "3px solid #1A73E8",
    color: "#1A73E8 !important"
  },
  innerContainer: {
    paddingLeft: 170,
    // paddingRight: 170,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 20
    }
  },
  results: {
    color: "#70757a",
    fontSize: 13,
    marginTop: 10
  },
  logo: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto !important"
    }
  }
}));

export const Results = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          style={{ padding: 20 }}
        >
          <Grid item xs={12} md={10}>
            <Grid container justify="flex-start" alignItems="center">
              <img
                width="92"
                height="33"
                src="/img/recognizing-ignaz.png"
                alt="Google Img"
                style={{ marginRight: 50 }}
                className={classes.logo}
              />
              <Paper component="form" className={classes.search} elevation={0}>
                {/* <IconButton
                  disabled
                  className={classes.iconButton}
                  aria-label="menu"
                >
                  <SearchIcon />
                </IconButton> */}
                <InputBase
                  className={classes.input}
                  inputProps={{ "aria-label": "search google" }}
                />

                <IconButton
                  color="primary"
                  type="submit"
                  className={classes.iconButton}
                  aria-label="directions"
                  style={{ backgroundColor: "transparent" }}
                >
                  <span className={classes.speaker}></span>
                </IconButton>
                <IconButton
                  className={classes.iconButton}
                  aria-label="menu"
                  style={{ backgroundColor: "transparent" }}
                >
                  <SearchIcon color="primary" />
                </IconButton>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={12} md={2}>
            <Grid container justify="center" alignItems="center">
              <IconButton className={classes.iconButton}>
                <AppsIcon />
              </IconButton>
              <IconButton className={classes.iconButton}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://randomuser.me/api/portraits/men/76.jpg"
                  style={{ width: 30, height: 30 }}
                />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <nav className={classes.navbar}>
          <ul className={classes.gridIt}>
            <li>
              <Link
                to="#"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                className={classes.firstChild}
              >
                <span
                  style={{
                    height: 16,
                    width: 16,
                    display: "inline-block",
                    marginRight: 5
                  }}
                >
                  <svg
                    focusable="false"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8z"
                      fill="#34A853"
                    ></path>
                    <path
                      d="M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6z"
                      fill="#EA4335"
                    ></path>
                    <path
                      d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6z"
                      fill="#FBBC04"
                    ></path>
                    <path
                      d="M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59z"
                      fill="#4285F4"
                    ></path>
                  </svg>
                </span>
                All
              </Link>
            </li>
            <li>
              <Link
                to="#"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <span
                  style={{
                    height: 16,
                    width: 16,
                    display: "inline-block",
                    marginRight: 5
                  }}
                >
                  <svg
                    focusable="false"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 13l4 5H6l4-4 1.79 1.78L14 13zm-6.01-2.99A2 2 0 0 0 8 6a2 2 0 0 0-.01 4.01zM22 5v14a3 3 0 0 1-3 2.99H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h14c1.65 0 3 1.36 3 3zm-2.01 0a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7v-.01h7a1 1 0 0 0 1-1V5z"></path>
                  </svg>
                </span>
                Images
              </Link>
            </li>
            <li>
              <Link
                to="#"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <span
                  style={{
                    height: 16,
                    width: 16,
                    display: "inline-block",
                    marginRight: 5
                  }}
                >
                  <svg
                    focusable="false"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 11h6v2h-6v-2zm-6 6h12v-2H6v2zm0-4h4V7H6v6zm16-7.22v12.44c0 1.54-1.34 2.78-3 2.78H5c-1.64 0-3-1.25-3-2.78V5.78C2 4.26 3.36 3 5 3h14c1.64 0 3 1.25 3 2.78zM19.99 12V5.78c0-.42-.46-.78-1-.78H5c-.54 0-1 .36-1 .78v12.44c0 .42.46.78 1 .78h14c.54 0 1-.36 1-.78V12zM12 9h6V7h-6v2z"></path>
                  </svg>
                </span>
                News
              </Link>
            </li>
            <li>
              <Link
                to="#"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <span
                  style={{
                    height: 16,
                    width: 16,
                    display: "inline-block",
                    marginRight: 5
                  }}
                >
                  <svg
                    focusable="false"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.50302273,-6.81818182e-05 C10.5930227,-6.81818182e-05 13.0052955,2.48720455 13.0052955,5.42720455 C13.0052955,7.76379545 11.8748409,9.12061364 10.7443864,10.4774318 C10.2909773,11.0051591 9.83893182,11.6078864 9.38688636,12.2112955 C8.93484091,12.8140227 8.63347727,13.7187955 8.40711364,14.1708409 C8.18143182,14.6228864 8.03006818,14.9999318 7.50302273,14.9999318 C6.97461364,14.9999318 6.82461364,14.6228864 6.59825,14.1708409 C6.37188636,13.7187955 6.07052273,12.8140227 5.61847727,12.2112955 C5.16575,11.6078864 4.71370455,11.0051591 4.26165909,10.4774318 C3.13120455,9.12061364 2.00006818,7.76379545 2.00006818,5.42720455 C2.00006818,2.48720455 4.41165909,-6.81818182e-05 7.50302273,-6.81818182e-05 Z M7.50302273,1.36356818 C5.22029545,1.36356818 3.36370455,3.18606818 3.36370455,5.42720455 C3.36370455,7.27015909 4.22211364,8.29970455 5.30893182,9.60402273 C5.77734091,10.1508409 6.25120455,10.7822045 6.70938636,11.3931136 C7.04893182,11.8458409 7.30461364,12.3831136 7.50302273,12.8378864 C7.70075,12.3831136 7.95643182,11.8458409 8.29597727,11.3931136 C8.75484091,10.7822045 9.22734091,10.1508409 9.70870455,9.58970455 C10.7825682,8.29970455 11.6416591,7.27015909 11.6416591,5.42720455 C11.6416591,3.18606818 9.78438636,1.36356818 7.50302273,1.36356818 Z M7.50275,4.09793182 C8.23638636,4.09793182 8.83161364,4.69315909 8.83161364,5.42679545 C8.83161364,6.16111364 8.23638636,6.75634091 7.50275,6.75634091 C6.76843182,6.75634091 6.17320455,6.16111364 6.17320455,5.42679545 C6.17320455,4.69315909 6.76843182,4.09793182 7.50275,4.09793182 Z"></path>
                  </svg>
                </span>
                Maps
              </Link>
            </li>
            <li>
              <Link
                to="#"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <span
                  style={{
                    height: 16,
                    width: 16,
                    display: "inline-block",
                    marginRight: 5
                  }}
                >
                  <svg
                    focusable="false"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M10 16.5l6-4.5-6-4.5v9zM5 20h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zm14.5 2H5a3 3 0 0 1-3-3V4.4A2.4 2.4 0 0 1 4.4 2h15.2A2.4 2.4 0 0 1 22 4.4v15.1a2.5 2.5 0 0 1-2.5 2.5z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </span>
                Videos
              </Link>
            </li>
            <li>
              <Link
                to="#"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <span
                  style={{
                    height: 16,
                    width: 16,
                    display: "inline-block",
                    marginRight: 5
                  }}
                >
                  <svg
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                  </svg>
                </span>
                More
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className={classes.innerContainer}>
        <Typography className={classes.results}>
          About 1,000 results (0.34 seconds)
        </Typography>
      </div>
    </div>
  );
};
