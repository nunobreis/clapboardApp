import React from 'react';

import SearchBar from './search-bar/search-bar.component';
// import MovieList from './movie-list/movie-list.component.js';

class MovieSearch extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div
        id="search-section"
        className="container my-5"
      >
        <SearchBar />
      </div>
    );
  }
}

export default MovieSearch;
