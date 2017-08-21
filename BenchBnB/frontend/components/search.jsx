import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './benches/bench_index';

const Search = (props) => {
  return (
    <div>
      <BenchIndex
        benches = { props.benches }
      />
      <BenchMap
        benches = { props.benches }
        updateBounds = { props.updateBounds }
      />
    </div>
  );
};

export default Search;
