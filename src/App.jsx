import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import News from "./Components/News/News";
import Discussion from "./Components/Discussion/Discussion";
import Register from "./Components/Register/Register";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import SingleArticle from "./Components/News/SingleArticle/SingleArticle";

const App = () => (
  <div>
    <Router>
      <Header />
      <div id="main">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/discussion">
            <Discussion />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/single-article">
            <SingleArticle />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  </div>
);

export default App;
