import { FETCH_MOVIES } from './movie-search.actions.js';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return [action.payload.data, ...state];
  default:
    return state;
  }
}
