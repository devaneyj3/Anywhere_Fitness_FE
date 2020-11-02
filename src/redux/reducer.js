import { REGISTER, LOGIN, CREATECLASS, RESERVECLASS, DELETECLASS} from './actions';
const initialState = {
  instructors: [],
  clients: [],
  classes: [],
  message: '',
  apiError: '', 
  name: '',
  id: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        instructors: [
          ...state.instructors,
          action.payload
        ],
        message: action.message,
        apiError: action.apiError
      }
      case LOGIN:
      return {
        ...state,
        message: action.message,
        apiError: action.apiError,
        name: action.name,
        id: action.id
      }
      case CREATECLASS:
      return {
        ...state,
        instructors: [...state.instructors, action.payload]
      }
      case RESERVECLASS:
      return {
        ...state,
        classes: [...state.instructors, action.payload]
      }
      case DELETECLASS:
      return {
        ...state,
        classes: [...state.instructors, action.payload]
      }
      default:
        return state
  }
}

export default reducer