import React from 'react';
import {
  Navbar,
  Nav,
  FormGroup,
  FormControl,
  Button,
} from 'react-bootstrap';

class MovieNavbar extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-dark bg-dark fixed-top justify-content-between"
      >
        <a className="navbar-brand text-light">
          BlackScreen App
        </a>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit">
            Search
          </button>
        </form>
      </nav>
    );
  }
}

export default MovieNavbar;
