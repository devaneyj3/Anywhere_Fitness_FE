import React, { useState } from "react";
import { connect } from "react-redux";
import { instructor_register, instructor_login } from "../../redux/actions/instructor_actions";
import {
  client_register,
  client_login,
} from "../../redux/actions/client_actions";
import { Button, Alert } from "reactstrap";
import * as Yup from "yup";

const Form = ({ text, setter, state, endPoint, role, instructor_register, instructor_login, client_register, client_login, setLoggedIn }) => {
  const formSchema = Yup.object().shape({
    name: Yup.string().min(2, "Requires at least 2 characters"),
    password: Yup.string().min(8, "Requires a minimum of 8 characters"),
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

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

  const handleSubmit = (e, id) => {
    e.preventDefault();
    if (endPoint === "register" && role === "instructors") {
      instructor_register(state);
    } else if (endPoint === "login" && role === "instructors") {
      instructor_login(state);
      setLoggedIn(true);
    } else if (endPoint === "register" && role === "clients") {
      client_register(state);
    } else if (endPoint === "login" && role === "clients") {
      client_login(state);
      setLoggedIn(true);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter User Name"
          value={state.username}
          onChange={handleChange}
        />
        {errors.username.length > 2 ? (
          <p className="error">{errors.name}</p>
        ) : null}
        <input
          type="password"
          placeholder="Enter User Password"
          value={state.password}
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

export default connect(null, {
  instructor_register,
  instructor_login,
  client_register,
  client_login,
})(Form);
