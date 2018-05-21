import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return(
      <div
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
              onChange={event => this.onInputChange(event.target.value)}
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
      </div>
    );
  }
}

export default SearchBar;
