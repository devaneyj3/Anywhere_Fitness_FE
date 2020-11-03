import { combineReducers } from 'redux';
import InstructorReducer from './reducers/instructor_reducer';
import ClientReducer from './reducers/client_reducer';

export default combineReducers({
  InstructorReducer,
  ClientReducer
})