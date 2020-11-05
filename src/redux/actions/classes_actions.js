import axiosWithAuth from "../../utils/axiosWithAuth";
export const INSTRUCTOR_CREATECLASS = "INSTRUCTOR_CREATECLASS";
export const INSTRUCTOR_DELETECLASS = "INSTRUCTOR_DELETECLASS";
export const INSTRUCTOR_GETCLASS = "INSTRUCTOR_GETCLASS";
export const GETCLASS = "GETCLASS";
export const CLIENT_ADD_CLASS = "CLIENT_ADD_CLASS";

export const get_classes = () => async dispatch =>{
  try {
    const response = await axiosWithAuth().get('/classes/')
    dispatch({type: GETCLASS, payload: response.data})
  }
  catch (err) {
    dispatch({type: GETCLASS, message: err.response.data.message})
  }
}
export const create_class = (data, id) => async dispatch => {
  try {
    const response = await axiosWithAuth().post(`/instructors/${id}/classes`, data)
    dispatch({type: INSTRUCTOR_CREATECLASS, payload: response.data,message: 'You have successfully created a new class'})
  } catch (error) {
    dispatch({type: INSTRUCTOR_CREATECLASS, failure: error.response.data.message})
    
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

export const delete_class = (id) => async dispatch => {
  
  try {
    const response = await axiosWithAuth().delete(`/classes/${id}/`)
    dispatch({type: INSTRUCTOR_DELETECLASS, payload: response.data})
  } catch (error) {
    dispatch({type: INSTRUCTOR_DELETECLASS})
    
  }
}

export const client_add_class = (clientID, classID, className) => async (dispatch) => {
  await axiosWithAuth().post(`clients/${clientID}/classes/${classID}`);
  dispatch({type: CLIENT_ADD_CLASS, message: 'You have added ' + className})
}