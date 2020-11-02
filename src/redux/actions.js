import axiosWithAuth from "../utils/axiosWithAuth";
export const REGISTER = "REGISTER";
export const CREATECLASS = "CREATECLASS";
export const RESERVECLASS = "RESERVECLASS";
export const DELETECLASS = "DELETECLASS";
export const LOGIN = "LOGIN";

export const register = (data) => async (dispatch) => {

  try {
    await axiosWithAuth().post("/instructors/register", data);
    dispatch({
      type: REGISTER,
      payload: data,
      message: `${data.username} has successfully signed up`,
    });
  } catch (err) {
    dispatch({ type: REGISTER, apiError: err.response.data.message });
  }
};
export const login = (data) => async (dispatch) => {

  try {
    const response = await axiosWithAuth().post("/instructors/login", data);
    dispatch({ type: LOGIN, name: response.data.name, id: response.data.id, message: response.data.message });
    localStorage.setItem("token", response.data.token);
  } catch (err) {
    dispatch({ type: LOGIN, apiError: err.response.data.message });
  }
};
