import React, { useState } from "react";
import "./App.css";
import SignIn from "./components/Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./components/Signup";
import { Box } from "@material-ui/core";
import Copyright from "./components/Copyright";
import LandingPage from "./components/LandingPage";

function App() {
  const [token, setToken] = useState("");

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            path="/signin"
            render={(props) => <SignIn {...props} setToken={setToken} />}
          />
          <Route
            path="/signup"
            render={(props) => <SignUp {...props} token={token} />}
          />
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
