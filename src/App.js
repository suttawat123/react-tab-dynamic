import React, { Component } from "react";
import {
  Route,
  Switch,
  BrowserRouter,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import 'react-tabs/style/react-tabs.css';

import { ContextProvider, context } from "./context";

import CarTypePage from './views/CarTypePage';
import QuoteAddPage from './views/QuoteAddPage';
import QuoteUpdatePage from './views/QuoteUpdatePage';

class App extends Component {
  state = {};
  render() {
    return (
      <ContextProvider app={this}>
        <BrowserRouter>
          <Switch>
            <Route
              path="/car/type/"
              name="carType"
              render={props => <CarTypePage {...props} />}
            />
            <Route
              path="/quote/add/"
              name="quoteAdd"
              render={props => <QuoteAddPage {...props} />}
            />
            <Route
              path="/quote/update/:quoteID"
              name="quoteUpdate"
              render={props => <QuoteUpdatePage {...props} />}
            />
            <Route exact path="/">
              <Redirect to="/quote/add" />
            </Route>
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  Routes: state.Routes,
});

export default connect(mapStateToProps)(App);
