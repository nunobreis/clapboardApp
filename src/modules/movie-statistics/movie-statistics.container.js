import React from 'react';
import * as c3 from 'c3';
import * as d3 from 'd3';

import GraphCard from './graph-card/graph-card.component';

class MovieStatistics extends React.Component {
  componentDidMount() {
    const chart = c3.generate({
        data: {
            columns: [
                ['data1', 30, 200, 100, 400, 150, 250],
                ['data2', 130, 100, 140, 200, 150, 50],
                ['data3', 130, -150, 200, 300, -200, 100]
            ],
            type: 'bar'
        },
        bar: {
            width: {
                ratio: 0.5 // this makes bar width 50% of length between ticks
            }
            // or
            //width: 100 // this makes bar width 100px
        }
    });
  }
  render() {
    return(
      <div
        id="statistics-section"
        className="container"
      >
        <GraphCard
          title='Top Rated Budgets'
          subtitle='Here you can see which of the top rated movies had bigger budgets'
        />

      </div>
    );
  }
}

export default MovieStatistics;
