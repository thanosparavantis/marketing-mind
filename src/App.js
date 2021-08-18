import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavigationComponent from "./components/NavigationComponent";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import React from "react";
import ScrollToTop from "./components/ScrollToTopComponent";

export default function App() {

  return (
    <BrowserRouter>
      <NavigationComponent/>
      <ScrollToTop/>
      <Switch>
        <Route path="/" exact>
          <HomePage/>
        </Route>
        <Route path="/about" exact>
          <AboutPage/>
        </Route>
        <Route path="/contact" exact>
          <ContactPage/>
        </Route>
        <Route path="*">
          <NotFoundPage/>
        </Route>
      </Switch>
    </BrowserRouter>

  )
}