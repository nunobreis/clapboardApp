import { combineReducers } from 'redux';
import MovieReducer from './search-bar/search-bar.reducer';

const rootReducer = combineReducers({
  movie: MovieReducer
});

export default rootReducer;
