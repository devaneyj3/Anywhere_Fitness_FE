import axiosWithAuth from "../../utils/axiosWithAuth";
export const INSTRUCTOR_CREATECLASS = "INSTRUCTOR_CREATECLASS";
export const INSTRUCTOR_DELETECLASS = "INSTRUCTOR_DELETECLASS";
export const INSTRUCTOR_GETCLASS = "INSTRUCTOR_GETCLASS";

export const create_class = (data, id) => async dispatch => {
  try {
    const response = await axiosWithAuth().post(`/instructors/${id}/classes`, data)
    dispatch({type: INSTRUCTOR_CREATECLASS, payload: response.data,message: 'You have successfully created a new class'})
  } catch (error) {
    dispatch({type: INSTRUCTOR_DELETECLASS, failure: error.response.data.message})
    
  }
}

export const instructor_class = (id) => async dispatch => {
  try {
    const response = await axiosWithAuth().get(`/instructors/${id}/classes`)
    dispatch({type: INSTRUCTOR_GETCLASS, payload: response.data})
  } catch (error) {
    dispatch({type: INSTRUCTOR_GETCLASS})
    
  }
}