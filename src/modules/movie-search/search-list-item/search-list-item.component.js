import React from 'react';

const SearchListItem = ({ movie }) => {
  if(movie) {
    return (
      <tr key={movie.title}>
        <td>{movie.title}</td>
        <td>{movie.release_date}</td>
        <td>{movie.overview}</td>
        <td>{movie.vote_average}</td>
      </tr>
    );
  }
  else {
    return(
      <tr>
        <td>
          Movie not found
        </td>
      </tr>
    );
  }

}

export default SearchListItem;
