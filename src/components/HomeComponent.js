import React from "react";
import { makeStyles, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "white",
    height: "100vh"
  },
  footer: {
    // height: "20vh",
    // minHeight: "10vh",
    backgroundColor: "#f2f2f2",
    border: "1px solid #e4e4e4",
    position: "fixed",
    bottom: 0,
    width: "100vw"
  },
  center: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    marginBottom: "auto"
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",

    paddingRight: theme.spacing(3)
  },
  flexIt: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&>*:not(:last-child)": {
      marginRight: 15,
      listStyle: "none",
      verticalAlign: "middle"
    },
    "& > li > a": {
      color: "#333",
      textDecoration: "none",
      fontSize: 13,
      verticalAlign: "middle",
      display: "block",
      "&:hover": {
        textDecoration: "underline"
      }
    },
    "& > li": {
      padding: 0,
      "&:hover": {
        cursor: "pointer"
      }
    }
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    backgroundColor: "#e91e63"
  },
  img: {
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    },
    marginBottom: 20
  },
  paddIt: {
    paddingTop: 10,
    paddingLeft: 30,
    paddingBottom: 10,
    paddingRight: 30,
    display: "flex",
    justifyContent: "space-between"
  },
  flexItems: {
    display: "flex",
    paddingLeft: 30,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    },
    "&> li": {
      listStyle: "none",
      "& > a": {
        textDecoration: "none",
        marginRight: 20,
        fontSize: 12,
        color: "rgba(0,0,0,.54)",
        "&:hover": {
          textDecoration: "underline"
        }
      }
    }
  },
  container: {
    display: "grid",
    gridTemplateColumns: "90vh 1fr"
  },
  btn: {
    border: "none",
    padding: 10,
    borderRadius: 3,
    marginRight: 10,
    marginBottom: 5,
    cursor: "pointer",
    "&:hover": {
      border: "0.5px solid #ccc"
    }
  },
  link: {
    fontSize: "0.8rem",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  }
}));

export const HomeComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <header className={classes.flex}>
        <div />
        <nav>
          <ul className={classes.flexIt}>
            <li>
              <Link to="/">Gmail</Link>
            </li>
            <li>
              <Link to="/about">Images</Link>
            </li>
            <li>
              <AppsIcon />
            </li>
            <li style={{ listStyle: "none" }}>
              <Avatar className={classes.small}>I</Avatar>
            </li>
          </ul>
        </nav>
      </header>
      <div className={classes.center}>
        <img
          src="/img/googlelogo.png"
          alt="Google Logo"
          className={classes.img}
        />
        <SearchInput />
        <div style={{ marginTop: 20 }}>
          <button className={classes.btn}>Google Search</button>
          <button className={classes.btn}>I'm Feeling Lucky</button>
          <div style={{ marginTop: 20 }}>
            <Link to="/" className={classes.link}>
              Get more information about the coronavirus
            </Link>
          </div>
        </div>
      </div>

      <div className={classes.footer}>
        <div className={classes.paddIt}>
          <Typography style={{ color: "rgba(0,0,0,.54)" }} component="span">
            Nigeria
          </Typography>
        </div>

        <div
          //   className={classes.paddIt}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #e4e4e4"
          }}
        >
          <ul className={classes.flexItems}>
            <li>
              <Link to="/">Advertising</Link>
            </li>
            <li>
              <Link to="/">Business</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">How Search works</Link>
            </li>
          </ul>
          <div>
            <ul className={classes.flexItems}>
              <li>
                <Link to="/">Privacy</Link>
              </li>
              <li>
                <Link to="/">Terms</Link>
              </li>
              <li>
                <Link to="/">Settings</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
