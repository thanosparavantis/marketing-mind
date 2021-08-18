import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavigationComponent from "./components/NavigationComponent";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import ContactSuccessPage from "./pages/ContactSuccessPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavigationComponent/>
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
        <Route path="/contact/success" exact>
          <ContactSuccessPage/>
        </Route>
        {/*<Route path="/preview" exact>*/}
        {/*  <PreviewPage/>*/}
        {/*</Route>*/}
        <Route path="*">
          <NotFoundPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

