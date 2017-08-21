import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import benchesReducer from './benches_reducer';

const RootReducer = combineReducers({
  benches: benchesReducer,
  session: SessionReducer
});

export default RootReducer;
