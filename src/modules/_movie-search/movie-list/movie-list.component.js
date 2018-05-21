import React, { Component } from 'react';
import { connect } from 'react-redux';

const styles = {
  table: {
    backgroundColor: '#fff'
  },
  thead: {
    backgroundColor: '#37A8EE',
    color: '#fff'
  }
};

class MovieList extends Component {
  renderMovie(movieData) {
    const title = movieData.results[0];
    if(title) {
      return (
        <tr key={title.title}>
          <td>{title.title}</td>
          <td>{title.release_date}</td>
          <td>{title.overview}</td>
          <td>{title.vote_average}</td>
        </tr>
      );
    } else {
      return (
        <tr>
          <td>Opps, movie not found!</td>
        </tr>
      );
    }

  }

  render() {
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
            {this.props.movie.map(this.renderMovie)}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ movie }) => {
  return { movie };
}

export default connect(mapStateToProps)(MovieList);
