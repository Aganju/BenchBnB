import { connect } from 'react-redux';
import { fetchBenches } from '../actions/bench_actions';
import { updateBounds } from '../actions/filter_actions';
import Search from './search';

const mapStateToProps = (state) => {
  return {
    benches: state.benches,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateBounds: () => { dispatch( updateBounds()); }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (Search);
