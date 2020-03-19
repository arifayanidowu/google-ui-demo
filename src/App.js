import React from "react";
import "./App.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import theme from "./theme";
import { HomeComponent } from "./components/HomeComponent";

function App() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Switch>
            <Route exact path="/" component={HomeComponent} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
