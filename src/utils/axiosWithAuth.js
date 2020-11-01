import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  let environment = process.env.NODE_ENV === "production" ? "https://sample12342.herokuapp.com/api/" : "http://localhost:3000/api/";
  
  return axios.create({
    baseURL: environment,
    credentials: 'include',
    headers: {
      Authorization: token,
    },
  });
};

export default axiosWithAuth;