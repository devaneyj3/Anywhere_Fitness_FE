import {
    INSTRUCTOR_CREATECLASS,
    INSTRUCTOR_DELETECLASS,
    INSTRUCTOR_GETCLASS,
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
                classes: [...state.instructors, action.payload],
            };
        default:
            return state;
    }
};

export default ClassesReducer;
