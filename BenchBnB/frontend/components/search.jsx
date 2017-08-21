import React from 'react';
import BenchMap from './bench_map';
import BenchIndex from './benches/bench_index';

const Search = (props) => {
  return (
    <div>
      <BenchIndex
        fetchBenches = { props.fetchBenches }
        benches = { props.benches }
      />
      <BenchMap benches = { props.benches }/>
    </div>
  );
};

export default Search;
