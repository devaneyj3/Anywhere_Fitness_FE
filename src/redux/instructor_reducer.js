import { INSTRUCTOR_REGISTER, INSTRUCTOR_LOGIN, INSTRUCTOR_CREATECLASS, INSTRUCTOR_DELETECLASS} from './instructor_actions';
const initialState = {
  instructors: [],
  register_message: '',
  register_apiError: '',
  login_message: '',
  login_apiError: '', 
  name: '',
  id: '',
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
        register_message: action.message,
        register_apiError: action.apiError
      }
      case INSTRUCTOR_LOGIN:
      return {
        ...state,
        login_message: action.message,
        login_apiError: action.apiError,
        status: action.status,
        name: action.name,
        id: action.id
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