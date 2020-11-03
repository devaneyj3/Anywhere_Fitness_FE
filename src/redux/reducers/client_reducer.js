import { CLIENT_REGISTER, CLIENT_LOGIN, CLIENT_DELETECLASS, CLIENT_RESERVECLASS} from '../actions/client_actions';
const initialState = {
  clients: [],
  client_register_message: '',
  client_register_apiError: '',
  client_login_message: '',
  client_login_apiError: '', 
  client_name: '',
  client_id: '',
}

const ClientReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLIENT_REGISTER:
      return {
        ...state,
        clients: [
          ...state.clients,
          action.payload
        ],
        client_register_message: action.message,
        client_register_apiError: action.apiError
      }
      case CLIENT_LOGIN:
      return {
        ...state,
        client_login_message: action.message,
        client_login_apiError: action.apiError,
        client_status: action.status,
        client_name: action.name,
        client_id: action.id
      }
      case CLIENT_RESERVECLASS:
      return {
        ...state,
        clients: [...state.clients, action.payload]
      }
      case CLIENT_DELETECLASS:
      return {
        ...state,
        classes: [...state.clients, action.payload]
      }
      default:
        return state
  }
}

export default ClientReducer