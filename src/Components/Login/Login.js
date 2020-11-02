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
    const [ loggedIn, setLoggedIn] = useState(false)
    const history = useHistory();

    if (loggedIn) {
        setTimeout(() => {
            history.push(`/Client/${props.id}/${props.name}`);
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
                setLoggedIn={setLoggedIn}
                endPoint="login"
                role={props.role}
            />
            <span onClick={props.registerForm}>Sign Up</span>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        message: state.message,
        apiError: state.apiError,
        name: state.name,
        id: state.id,
    };
};

export default connect(mapStateToProps, {})(Login);
