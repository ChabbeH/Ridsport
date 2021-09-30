import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeView } from "../view/HomeView";
import { SignInView } from "../view/SignInView";
import { AboutView } from "../view/AboutView";
import { ContactView } from "../view/ContactView";
import { FaqView } from "../view/FaqView";
import { NewsView } from "../view/NewsVeiw";

export const Routing = (props) => {
  return (
    <Router>
      {props.children}
      <Switch>
        <Route exact path="/signin" component={SignInView} />
        <Route exact path="/about" component={AboutView} />
        <Route exact path="/contact" component={ContactView} />
        <Route exact path="/faq" component={FaqView} />
        <Route exact path="/news" component={NewsView} />
        <Route component={HomeView} />
      </Switch>
    </Router>
  );
};
