import React, { useState } from "react";
import { connect } from "react-redux";
import { Alert } from "reactstrap";
import Form from "../Form/Form";
import { useHistory } from "react-router-dom";



const Login = (props) => {
    const [login, setLogin] = useState({
        username: "",
        password: "",
    });
    const history = useHistory();

    if (props.status === 200) {
        setTimeout(() => {
            history.push(`/Instructor/${props.id}/${props.name}`);
        }, 1000);
    }
    

    return (
        <>
            {props.message ? (
                <Alert color="success">{props.message}</Alert>
            ) : props.apiError ? (
                <Alert color="danger">{props.apiError}</Alert>
            ) : null}
            <Form
                state={login}
                setter={setLogin}
                text="Log in"
                endPoint="login"
                role={props.role}
            />
            <span onClick={props.registerForm}>Sign Up</span>
        </>
    );
};

const mapStateToProps = (state) => {
    let {login_message, login_apiError, status, name, id} = state.InstructorReducer
    return {
        message: login_message,
        apiError: login_apiError,
        name: name,
        id: id,
        status: status
    };
};

export default connect(mapStateToProps, {})(Login);
