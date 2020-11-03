import React, { useState } from "react";
import {connect} from "react-redux";
import Form from "../Form/Form";
import {Alert} from "reactstrap";

const SignUp = (props) => {
    const [signup, setSignup] = useState({
        username: "",
        password: "",
    });

    return (
        <>
            {props.message ? (
                <Alert color="success">{props.message}</Alert>
            ) : props.apiError ? (
                <Alert color="danger">{props.apiError}</Alert>
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

const mapStateToProps = data => {
    let { register_message, register_apiError } = data.InstructorReducer
    return {
        message: register_message,
        apiError: register_apiError
    }
    
}

export default connect(mapStateToProps, {})(SignUp);
