import React from "react";

import RegistrationForm from "./pages/RegistrationPage";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate, Switch,
} from "react-router-dom";
import LoginForm from "./pages/LoginPage";
import Home from "./pages/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
      <>
        <Router>
          <NavBar />
          <Switch>

            {/* This route is for home component
          with exact path "/", in component props
          we passes the imported component*/}
            <Route path="/" exact component={Home} />

            {/* This route is for about component
          with exact path "/about", in component
          props we passes the imported component*/}
            <Route path="/login" exact component={LoginForm} />

            {/* This route is for contactus component
          with exact path "/contactus", in
          component props we passes the imported component*/}
            <Route path="/signup" exact component={RegistrationForm} />

            {/* If any route mismatches the upper
          route endpoints then, redirect triggers
          and redirects app to home component with to="/" */}
          </Switch>


        </Router>
      </>
  );
}

export default App;