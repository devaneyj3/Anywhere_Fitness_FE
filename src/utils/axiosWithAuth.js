import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    // baseURL: "https://anywhere-fitness-app2.herokuapp.com/api/",
    baseURL: "http://localhost:3000/api/",
    credentials: 'include',
    headers: {
      Authorization: token,
    },
  });
};

export default axiosWithAuth;