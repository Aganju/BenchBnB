import { UPDATE_BOUNDS } from '../actions/filter_actions';

const FilterReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_BOUNDS:
      return action.filter;
    default:
      return state;
  }
};

export default FilterReducer;
