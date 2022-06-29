import logo from './logo.svg';
import React from 'react';
import './App.css';
import RegistrationForm from "./pages/RegistrationPage";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import LoginForm from "./pages/LoginPage";


function App() {

    return (

        <div className="App">
            <header className="App-header">


            <Router>
                <Routes>
                    {/* This route is for home component
          with exact path "/", in component props
          we passes the imported component*/}
                    <Route exact path="/" element={<RegistrationForm  />}/>

                    {/* This route is for about component
          with exact path "/about", in component
          props we passes the imported component*/}
                    <Route path="/login" element={<LoginForm />}/>

                    {/* This route is for contactus component
          with exact path "/contactus", in
          component props we passes the imported component*/}
                    <Route path="/registration" element={<RegistrationForm />}/>

                    {/* If any route mismatches the upper
          route endpoints then, redirect triggers
          and redirects app to home component with to="/" */}

                </Routes>
            </Router>
            </header>
        </div>
    );
}

export default App;
