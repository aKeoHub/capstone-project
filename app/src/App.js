import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar/NavBar";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import EventPage from "./pages/EventPage/EventPage";
import ForumPage from "./pages/ForumPage/ForumPage";
import ViewForum from "./pages/ForumPage/ViewForum";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={RegistrationPage} />
          <Route path="/events" exact component={EventPage} />
          <Route path="/forum" exact component={ForumPage} />
          <Route path="/viewForum" exact component={ViewForum} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
