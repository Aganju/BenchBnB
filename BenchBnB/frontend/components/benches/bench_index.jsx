import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchBenches();
  }

  render(){
    if(this.props.benches.keys){

      const all_benches = Object.keys(this.props.benches).map((key) =>{
        return <BenchIndexItem
          key = { this.props.benches[key].id }
           bench={ this.props.benches[key] }
           />;
      });

      return <div>{ all_benches }</div>;
    }
    else {
      return null;
    }
  }
}

export default BenchIndex;
