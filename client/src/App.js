import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";

import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
//import Dashboard from "./components/dashboard/Dashboard";

import Blogs from "./pages/Blogs";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";

import Html from "./pages/Html.jsx";
import Css from "./pages/Css.jsx";
import Bootstrap from "./pages/Bootstrap";
import Js from "./pages/JS";
import MongoDb from "./pages/MongoDb";
import ReactJs from "./pages/React";
import NodeJs from "./pages/Node";

import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/html" component={Html} />
              <Route path="/css" component={Css} />
              <Route path="/bootstrap" component={Bootstrap} />
              <Route path="/javascript" component={Js} />
              <Route path="/react" component={ReactJs} />
              <Route path="/node" component={NodeJs} />
              <Route path="/mongo" component={MongoDb} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route exact path="/blogs/:id" component={Detail} />
              <PrivateRoute exact path="/blogs" component={Blogs} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
