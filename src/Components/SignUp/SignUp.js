import React, { useState } from "react";
import Form from "../Form/Form";
import {Alert} from "reactstrap";

const SignUp = (props) => {
    const [signup, setSignup] = useState({
        username: "",
        password: "",
    });

    return (
        <>
            {props.register_message ? (
                <Alert color="success">{props.register_message}</Alert>
            ) : props.register_apiError ? (
                <Alert color="danger">{props.register_apiError}</Alert>
            ) : null}
            <Form
                setter={setSignup}
                text="Sign Up"
                state={signup}
                endPoint="register"
                role={props.role}
            />
            <span onClick={props.registerForm}>Log In</span>
        </>
    );
};


export default SignUp;
