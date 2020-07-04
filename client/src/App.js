import React from "react";
import "./App.css";
import SignIn from "./components/Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./components/Signup";
import { Box } from "@material-ui/core";
import Copyright from "./components/Copyright";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
        <footer>
          <Box mt={5}>
            <Copyright />
          </Box>
        </footer>
      </div>
    </Router>
  );
}

export default App;
