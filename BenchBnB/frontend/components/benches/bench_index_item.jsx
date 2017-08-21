import React from 'react';

const BenchIndex = (props) => {
  // debugger
  return (
    <div>
      <p>
        { props.bench.description }
        <br></br>
        { props.bench.lat }
        <br></br>
        { props.bench.lng }
      </p>
    </div>
  );
};

export default BenchIndex;
