import logo from "./logo.svg";
import React from "react";
import "./App.css";
import RegistrationForm from "./pages/RegistrationPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginForm from "./pages/LoginPage";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
<>
  <Router>
  <NavBar />
          <Routes>

            {/* This route is for home component
          with exact path "/", in component props
          we passes the imported component*/}
            <Route exact path="/" element={<Home />} />

            {/* This route is for about component
          with exact path "/about", in component
          props we passes the imported component*/}
            <Route path="/login" element={<LoginForm />} />

            {/* This route is for contactus component
          with exact path "/contactus", in
          component props we passes the imported component*/}
            <Route path="/registration" element={<RegistrationForm />} />

            {/* If any route mismatches the upper
          route endpoints then, redirect triggers
          and redirects app to home component with to="/" */}
          </Routes>


  </Router>
</>
  );
}

export default App;
