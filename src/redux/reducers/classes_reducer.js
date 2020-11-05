import {
    INSTRUCTOR_CREATECLASS,
    INSTRUCTOR_DELETECLASS,
    INSTRUCTOR_GETCLASS,
    GETCLASS,
    UPDATE_ATTENDEES,
    CLIENT_ADD_CLASS
} from "../actions/classes_actions";

const INITIAL_STATE = {
    classes: [],
    classes_errorMessage: "",
    classes_createdMessage: "",
    classes_deletedMessage: "",
    instructor_classes: [],
};

const ClassesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case GETCLASS:
            return {
                ...state,
                classes: action.payload,
                classes_errorMessage: action.message,
            };  
      case INSTRUCTOR_CREATECLASS:
            return {
                ...state,
                classes: [...state.classes, action.payload],
                classes_createdMessage: action.message,
                classes_errorMessage: action.failure,
            };
        case INSTRUCTOR_GETCLASS:
            return {
                ...state,
                instructor_classes: action.payload,
            };
        case INSTRUCTOR_DELETECLASS:
            return {
              ...state,
                instructor_classes: [...state.instructor_classes.filter((item) => item.id !== action.payload)]
            };
            // case CLIENT_ADD_CLASS:
            // return {
            //     ...state,
            //     classes: [...state.classes.filter((item) => item.id !== action.id)]
            // };
            // filter if class.id does not equal reserve class id show it in the classes to reserve
        default:
            return state;
    }
};

export default ClassesReducer;
