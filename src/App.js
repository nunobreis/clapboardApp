import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import MovieBrowser from './modules/movie-browser/movie-browser.container';
import MovieStatistics from './modules/movie-statistics/movie-statistics.container';
import Navbar from './modules/nav-bar/nav-bar.container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Navbar />
        <BrowserRouter>
          <Switch>
            <Route path="/statistics" component={MovieStatistics} />
            <Route path="/" component={MovieBrowser} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
