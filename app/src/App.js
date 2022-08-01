import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar/NavBar";
import RegistrationPage from "./pages/RegistrationPage";
import EventPage from "./pages/EventPage/EventPage";
import ForumPage from "./pages/ForumPage/ForumPage";
import DocumentsPage from "./pages/DocumentsPage";
import ViewForum from "./pages/ForumPage/ViewForum";
import Footer from "./components/Footer/Footer";
import AdminPage from "./pages/AdminPage";
import Profile from "./pages/LoginPage/components/profile.component";
import ProfilePage from "./pages/ProfilePage";
import LoginForm from "./pages/LoginPage";
import Login from "./pages/LoginPage/components/login.component";
const token = localStorage.getItem("accessToken");
function App() {
let loggedIn = '';
  if(token) {
    loggedIn = 'ProfilePage';
  } else {
    loggedIn = 'Home'
  }
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/admin" exact component={AdminPage} />
          <Route path="/profile" exact component={ProfilePage} />
          <Route path="/signup" exact component={RegistrationPage} />
          <Route path="/events" exact component={EventPage} />
          <Route path="/forum" exact component={ForumPage} />
          <Route path="/documents" exact component={DocumentsPage} />
          <Route path="/viewForum" exact component={ViewForum} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
