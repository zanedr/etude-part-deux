import { INCREMENT_COUNT, DECREMENT_COUNT } from '../actions/action_count';

export default function counter(state = 0, action) {
  switch(action.type) {
    case 'INCREMENT_COUNT':
      return state + 1;
    case 'DECREMENT_COUNT':
      return state - 1;
  }
  return state;
}
