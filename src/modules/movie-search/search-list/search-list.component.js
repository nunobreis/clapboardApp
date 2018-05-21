import React from 'react';
import SearchListItem from '../search-list-item/search-list-item.component';

const styles = {
  table: {
    backgroundColor: '#fff'
  },
  thead: {
    backgroundColor: '#37A8EE',
    color: '#fff'
  }
};

const SearchList = (props) => {
  const movieItem = props.movies.map((movie) => {
    return <SearchListItem movie={movie} />
  });

  return (
    <div
      style={styles.table}
    >
      <table
        className="table table-hover table-striped"
      >
        <thead
          style={styles.thead}
        >
          <tr>
            <th>Title</th>
            <th>Release Date</th>
            <th>Description</th>
            <th>Vote Average</th>
          </tr>
        </thead>
        <tbody>
          {movieItem.length > 0 ? movieItem : <tr><td>Search for movies that you like to get details</td></tr>}
        </tbody>
      </table>
    </div>
  );
}

export default SearchList;
