import { combineReducers } from 'redux';
import InstructorReducer from './reducers/instructor_reducer';
import ClientReducer from './reducers/client_reducer';
import ClassesReducer from './reducers/classes_reducer';

export default combineReducers({
  InstructorReducer,
  ClientReducer,
  ClassesReducer
})