import { combineReducers } from 'redux';
import globalReducer from './globalReducer';

const rootReducer = combineReducers({
  global: globalReducer, // Naming reducers can also help in distinguishing them
});

export default rootReducer;
