import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { AppBar } from 'material-ui';

import * as movieActions from './movie-browser.actions';
import * as movieHelpers from './movie-browser.helpers';
import * as scrollHelpers from '../common/scroll.helpers';
import MovieList from './movie-list/movie-list.component';

class MovieBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.onscroll = this.handleScroll;
    this.props.getTopMovies(this.state.currentPage);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { topMovies } = this.props;
    if (!topMovies.isLoading) {
      let percentageScrolled = scrollHelpers.getScrollDownPercentage(window);
      if (percentageScrolled > .8) {
        const nextPage = this.state.currentPage + 1;
        this.props.getTopMovies(nextPage);
        this.setState({ currentPage: nextPage });
      }
    }
  }

  render() {
    const { topMovies } = this.props;
    const movies = movieHelpers.getMoviesList(topMovies.response);
    return(
      <div>
        <AppBar title='Movie Browser' />
        <Grid>
          <Row>
            <p>Search will go here</p>
          </Row>
          <Row>
            <MovieList
              movies={movies}
              isLoading={topMovies.isLoading}
            />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    topMovies: state.movieBrowser.topMovies
  }),
  { ...movieActions }
)(MovieBrowser);
