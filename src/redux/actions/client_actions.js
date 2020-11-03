import axiosWithAuth from "../../utils/axiosWithAuth";
export const CLIENT_REGISTER = "CLIENT_REGISTER";
export const CLIENT_DELETECLASS = "CLIENT_DELETECLASS";
export const CLIENT_LOGIN = "CLIENT_LOGIN";
export const CLIENT_RESERVECLASS = "CLIENT_RESERVECLASS";

export const client_register = (data) => async (dispatch) => {

  try {
    await axiosWithAuth().post("/clients/register", data);
    dispatch({
      type: CLIENT_REGISTER,
      payload: data,
      message: `${data.username} has successfully signed up`,
    });
  } catch (err) {
    dispatch({ type: CLIENT_REGISTER, apiError: err.response.data.message });
  }
};
export const client_login = (data) => async (dispatch) => {

  try {
    const response = await axiosWithAuth().post(`/clients/login`, data);
    dispatch({ type: CLIENT_LOGIN, status: response.status, name: response.data.name, id: response.data.id, message: response.data.message });
    localStorage.setItem("token", response.data.token);
  } catch (err) {
    dispatch({ type: CLIENT_LOGIN, apiError: err.response.data.message });
  }
};
