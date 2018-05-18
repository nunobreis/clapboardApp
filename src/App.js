import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MovieBrowser from './modules/movie-browser/movie-browser.container';
import Navbar from './modules/nav-bar/nav-bar.container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Navbar />
        <MovieBrowser />
      </MuiThemeProvider>
    );
  }
}

export default App;
