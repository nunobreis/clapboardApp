import React from 'react';

const GraphCard = (props) => {
  return (
      <div className="graph-card card my-5 px-4 py-4">
        <h3
          className="graph-card-title"
        >
          {props.title}
        </h3>
        <h5
          className="graph-card-subtitle mb-2 text-muted"
        >
          {props.subtitle}
        </h5>
        <div
          id="chart"
          className="my-3"
        />
      </div>
  );
};

export default GraphCard;
