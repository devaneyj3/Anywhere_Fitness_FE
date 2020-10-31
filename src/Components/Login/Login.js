import React, { useState } from "react";
import Form from "../Form/Form";

const Login = ({ setMessage, setApiError, role, registerForm }) => {
    const [login, setLogin] = useState({
        username: "",
        password: "",
    });

    return (
        <>
            <Form
                name={login.username}
                password={login.password}
                state={login}
                setter={setLogin}
                text="Log in"
                endPoint="login"
                setMessage={setMessage}
                setApiError={setApiError}
                role={role}
            />
            <span onClick={registerForm}>Sign Up</span>
        </>
    );
};

export default Login;
