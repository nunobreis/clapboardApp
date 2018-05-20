import React from 'react';
import axios from 'axios';
import * as c3 from 'c3';
import * as d3 from 'd3';

import GraphCard from './graph-card/graph-card.component';


class MovieStatistics extends React.Component {
  componentDidMount() {
    const voteCount = ['Vote Count'];
    const popularity = ['Popularity'];
    const title = [];
    const API_KEY = 'b2a1db157d5c38da50264ca60afa6273';
    const urlPopularity = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
    axios.get(urlPopularity)
      .then((response) => {
        const results = response.data.results;
        for ( var i = 1; i < results.length; i++ ) {
          voteCount.push(results[i].vote_count);
          popularity.push(Math.floor((results[i].popularity) * 10));
          title.push(results[i].title);
        }
      })
      .then(() => {
        c3.generate({
            data: {
              columns: [
                  voteCount,
                  popularity
              ],
                type: 'bar'
            },
            axis: {
              x: {
                type: 'category',
                categories: title
              }
            },
            bar: {
                width: {
                    ratio: 0.5
                }
            }
        });
      })
      .catch((error) => console.log(error));

  }

  render() {
    return(

      <div
        id="statistics-section"
        className="container"
      >
        <GraphCard
          title='Vote Count vs Popularity'
          subtitle='Here you can see the Popularity VS Vote Count on the most Popular Movies'
        />
      </div>
    );
  }
}

export default MovieStatistics;
