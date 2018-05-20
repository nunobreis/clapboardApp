import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MovieBrowser from './modules/movie-browser/movie-browser.container';
import MovieStatistics from './modules/movie-statistics/movie-statistics.container';
import Navbar from './modules/nav-bar/nav-bar.container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Navbar />
          <BrowserRouter>
            <Switch>
              <Route path="/statistics" component={MovieStatistics} />
              <Route path="/" component={MovieBrowser} />
            </Switch>
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
