import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies } from './movie-search.actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchMovies(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return(
      <form
        onSubmit={this.onFormSubmit}
        className="my-5"
      >
        <div className="form-group">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span
                className="input-group-text"
                id="basic-addon1">
                <i className="fa fa-search" />
              </span>
            </div>
            <input
              value={this.state.term}
              onChange={this.onInputChange}
              type="text"
              className="form-control"
              placeholder="Search for a movie..."
              aria-label="Movie's Title"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button
                type="submit"
                className="btn button-statistics"
              >
                Search
              </button>
            </div>
          </div>

        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchMovies }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
