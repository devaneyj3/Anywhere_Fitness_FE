import { INSTRUCTOR_REGISTER, INSTRUCTOR_LOGIN, INSTRUCTOR_CREATECLASS, INSTRUCTOR_DELETECLASS} from '../actions/instructor_actions';
const initialState = {
  instructors: [],
  instructor_register_message: '',
  instructor_register_apiError: '',
  instructor_login_message: '',
  instructor_login_apiError: '', 
  instructor_name: '',
  instructor_id: '',
}

const InstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case INSTRUCTOR_REGISTER:
      return {
        ...state,
        instructors: [
          ...state.instructors,
          action.payload
        ],
        instructor_register_message: action.message,
        instructor_register_apiError: action.apiError
      }
      case INSTRUCTOR_LOGIN:
      return {
        ...state,
        instructor_login_message: action.message,
        instructor_login_apiError: action.apiError,
        instructor_status: action.status,
        instructor_name: action.name,
        instructor_id: action.id
      }
      case INSTRUCTOR_CREATECLASS:
      return {
        ...state,
        instructors: [...state.instructors, action.payload]
      }
      case INSTRUCTOR_DELETECLASS:
      return {
        ...state,
        classes: [...state.instructors, action.payload]
      }
      default:
        return state
  }
}

export default InstructorReducer