import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row } from 'react-bootstrap';

import * as movieActions from './movie-browser.actions';
import * as movieHelpers from './movie-browser.helpers';
import * as scrollHelpers from '../common/scroll.helpers';
import MovieList from './movie-list/movie-list.component';
import MovieModal from './movie-modal/movie-modal.container';

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
        <div
          id="cover-image"
          className="jumbotron my-5"
          >
          <h1 className="display-4">Welcome to the Clapboard App</h1>
          <p className="lead">
            You can scroll through the top rated movies of all time, search for titles or see interesting statistics about movies :)
          </p>
        </div>
        <div className="container">
          <Grid>
            <Row>
              <MovieList
                  movies={movies}
                  isLoading={topMovies.isLoading}
                />
            </Row>
          </Grid>
          <MovieModal />
        </div>

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
