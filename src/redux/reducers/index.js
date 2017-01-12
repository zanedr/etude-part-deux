import { combineReducers } from 'redux';
import counter from './reducer_count';

export default combineReducers({
  count: counter
});
