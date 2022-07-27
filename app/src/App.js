import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar/NavBar";
import RegistrationPage from "./pages/RegistrationPage";
import AdminPage from "./pages/AdminPage";
import Login from "./pages/LoginPage/components/login.component";
import Profile from "./pages/LoginPage/components/profile.component";
import ProfilePage from "./pages/ProfilePage";

function App() {

    return (
        <>
            <Router>
                <NavBar/>
                <Switch>

                    <Route path="/" exact component={Home}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/signup" exact component={RegistrationPage}/>
                    <Route path="/admin" exact component={AdminPage}/>
                    <Route path="/profile" exact component={ProfilePage}/>

                </Switch>


            </Router>
        </>
    );
}

export default App;