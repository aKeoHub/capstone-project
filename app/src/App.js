import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar/NavBar";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import Login from "./pages/LoginPage/components/login.component";
import LoginForm from "./pages/LoginPage/loginForm";

function App() {

  return (
      <>
        <Router>
          <NavBar />
          <Switch>

            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={LoginForm} />
            <Route path="/signup" exact component={RegistrationPage} />

          </Switch>


        </Router>
      </>
  );
}

export default App;