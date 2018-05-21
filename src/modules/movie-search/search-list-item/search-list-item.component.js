import React from 'react';

const SearchListItem = ({ movie }) => {
  return (
    <tr>
      <td>{movie.title}</td>
      <td>{movie.release_date}</td>
      <td>{movie.overview}</td>
      <td>{movie.vote_average}</td>
    </tr>
  );
}

export default SearchListItem;
