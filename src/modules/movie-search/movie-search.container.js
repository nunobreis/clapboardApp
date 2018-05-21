import React from 'react';
import axios from 'axios';

import SearchBar from './search-bar/search-bar.component';
import SearchList from './search-list/search-list.component.js';

const API_KEY = 'b2a1db157d5c38da50264ca60afa6273';
const rootUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

class MovieSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    }
  }

  movieSearch(term) {
    let arr = [];
    const splitWords = term.split(" ");
    arr.push(splitWords);
    const query = arr.join('+')
    const url = `${rootUrl}${query}`;

    axios.get(url)
      .then((response) => {
        console.log(response);
        this.setState({ movies: [response.data.results[0]] });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div
        id="search-section"
        className="container"
      >
        <SearchBar onSearchTermChange={term => this.movieSearch(term)} />
        <SearchList movies={this.state.movies} />
      </div>
    );
  }
}

export default MovieSearch;
