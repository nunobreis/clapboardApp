import React from 'react';

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
            alt=""
            id="logo"
            src="img/clapperboard.png"
            width="20"
            height="20"
          />
          <span className="mx-3">
            Clapperboard App
          </span>
        </a>
        <div
          id="main-navigation"
        >
          <a
            href="/movie-search"
            className="btn button-search my-2 my-sm-0"
          >
            Search Movies
          </a>
          <a
            className="btn button-statistics my-2 my-sm-0 mx-2"
            href="/statistics"
          >
            Statistics
          </a>
        </div>
      </nav>
    );
  }
}

export default MovieNavbar;
