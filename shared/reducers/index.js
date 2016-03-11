import { combineReducers } from 'redux';
import todos from './TodoReducer';
import users from './UserReducer';
import subnotes from './SubnoteReducer';

const rootReducer = combineReducers({
  todos,
  users,
  subnotes
});

export default rootReducer;
