import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import GoogleFontLoader from "react-google-font-loader";
import NavigationComponent from "./components/NavigationComponent";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PreviewPage from "./pages/PreviewPage";
import NotFoundPage from "./pages/NotFoundPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleFontLoader fonts={[
        {
          font: "Merriweather",
          weights: [300, 400, 700]
        }
      ]}/>
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
        <Route path="/preview" exact>
          <PreviewPage/>
        </Route>
        <Route path="*">
          <NotFoundPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

