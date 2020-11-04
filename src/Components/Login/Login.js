import React, { useState, useEffect } from "react";
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

    useEffect(() => {
        setLoggedIn(false)
    }, [setLoggedIn])


    if (loggedIn == true && props.role === 'instructors') {
        setTimeout(() => {
            history.push(`/Instructor/${props.id}/${props.name}`);
        }, 1000);
    }
    if (loggedIn === true && props.role === 'clients') {
        setTimeout(() =>{
            history.push(`/Client/${props.id}/${props.name}`);
        }, 1000)
    }
    

    return (
        <>
        {/* TODO: YOU CAN STILL SIGN IN WITH EMPTY FIELDS */}
            {props.login_message && loggedIn === true ? (
                <Alert color="success">{props.login_message}</Alert>
            ) : props.login_apiError ? (
                <Alert color="danger">{props.login_apiError}</Alert>
            ) : null}
            <Form
                state={login}
                setter={setLogin}
                text="Log in"
                endPoint="login"
                role={props.role}
                setLoggedIn={setLoggedIn}
            />
            <span onClick={props.registerForm}>Sign Up</span>
        </>
    );
};

export default Login;
