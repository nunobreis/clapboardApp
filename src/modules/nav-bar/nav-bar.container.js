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
        className="navbar navbar-dark fixed-top justify-content-between"
      >
        <a
          className="navbar-brand text-light"
          href="/"
        >
          <img
            id="logo"
            src="img/clapperboard.png"
            width="20"
            height="20"
          />
          <span className="mx-3">
            Clapperboard App
          </span>
        </a>
        <form
          id="main-navigation"
          className="form-inline"
        >
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn button-search my-2 my-sm-0"
            type="submit">
            Search
          </button>
          <a
            className="btn button-statistics my-2 my-sm-0 mx-2"
            href="/statistics"
          >
            Statistics
          </a>
        </form>
      </nav>
    );
  }
}

export default MovieNavbar;
