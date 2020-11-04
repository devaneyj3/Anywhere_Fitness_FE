import React, { useState } from "react";
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

    if (props.status == 200 && props.role === 'instructors') {
        setTimeout(() => {
            history.push(`/Instructor/${props.id}/${props.name}`);
        }, 1000);
    }
    if (props.status == 200 && props.role === 'clients') {
        setTimeout(() =>{
            history.push(`/Client/${props.id}/${props.name}`);
        }, 1000)
    }
    

    return (
        <>
            {props.login_message && loggedIn === true ? (
                <Alert color="success">{props.login_message}</Alert>
            ) : props.login_apiError && loggedIn === true  ? (
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
