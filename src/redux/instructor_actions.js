import axiosWithAuth from "../utils/axiosWithAuth";
export const INSTRUCTOR_REGISTER = "INSTRUCTOR_REGISTER";
export const INSTRUCTOR_CREATECLASS = "INSTRUCTOR_CREATECLASS";
export const INSTRUCTOR_DELETECLASS = "INSTRUCTOR_DELETECLASS";
export const INSTRUCTOR_LOGIN = "INSTRUCTOR_LOGIN";

export const register = (data) => async (dispatch) => {

  try {
    await axiosWithAuth().post("/instructors/register", data);
    dispatch({
      type: INSTRUCTOR_REGISTER,
      payload: data,
      message: `${data.username} has successfully signed up`,
    });
  } catch (err) {
    dispatch({ type: INSTRUCTOR_REGISTER, apiError: err.response.data.message });
  }
};
export const login = (data) => async (dispatch) => {

  try {
    const response = await axiosWithAuth().post(`/instructors/login`, data);
    dispatch({ type: INSTRUCTOR_LOGIN, status: response.status, name: response.data.name, id: response.data.id, message: response.data.message });
    localStorage.setItem("token", response.data.token);
  } catch (err) {
    dispatch({ type: INSTRUCTOR_LOGIN, apiError: err.response.data.message });
  }
};
