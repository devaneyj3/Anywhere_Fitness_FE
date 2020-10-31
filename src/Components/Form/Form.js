import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Button, Alert } from "reactstrap";
import axiosWithAuth from "../../utils/axiosWithAuth";
import * as Yup from "yup";

const Form = ({ name, password, text, setter, state, endPoint, setMessage, setApiError, role }) => {
  const formSchema = Yup.object().shape({
    name: Yup.string().min(2, "Requires at least 2 characters"),
    password: Yup.string().min(8, "Requires a minimum of 8 characters"),
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const history = useHistory()

  const validateChange = (e) => {
    if (e.target.name === "name" || e.target.name === "password") {
      Yup.reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then((isValid) => {
          setErrors({ ...errors, [e.target.name]: "" });
        })
        .catch((err) => {
          setErrors({ ...errors, [e.target.name]: err.errors[0] });
        });
    }
  };

  const handleChange = (e) => {
    e.persist();
    setter({ ...state, [e.target.name]: e.target.value });
    validateChange(e);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    axiosWithAuth()
      .post(`/${role}/${endPoint}`, state)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setter({
          username: "",
          password: "",
        });
        console.log(res)
        if (res.data.username) {
          setMessage(`${res.data.username} has successfully signed up`)
        }
        if (res.data.message) {
          setMessage(res.data.message)
        }
        if (role === 'clients' && text === 'Log in') { 
          setTimeout(() =>{
            history.push(`Client/${res.data.id}/${res.data.name}`)
          }, 1000)
        } else if (role === 'instructors'&& text === 'Log in' ){
          setTimeout(() =>{
            history.push(`Instructor/${res.data.id}/${res.data.name}`)
          }, 1000)
        }
      })
      .catch((error) => {
        setApiError(error.response.data.message)
      });
    };
    return (
      <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter User Name"
          value={name}
          onChange={handleChange}
        />
        {errors.username.length > 2 ? (
          <p className="error">{errors.name}</p>
        ) : null}
        <input
          type="password"
          placeholder="Enter User Password"
          value={password}
          name="password"
          onChange={handleChange}
        />
        {errors.password.length > 2 ? (
          <Alert color="danger">{errors.password}</Alert>
        ) : null}
        <div className="submit">
          <Button color="primary">{text}</Button>
        </div>
      </form>
    </>
  );
};

export default Form;
