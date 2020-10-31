import React, { useState } from "react";
import Form from "../Form/Form";

const SignUp = ({ setMessage, setApiError, role, registerForm }) => {
    const [signup, setSignup] = useState({
        username: "",
        password: "",
    });

    return (
        <>
            <Form
                name={signup.username}
                password={signup.password}
                setter={setSignup}
                text="Sign Up"
                state={signup}
                endPoint="register"
                setMessage={setMessage}
                setApiError={setApiError}
                role={role}
            />
            <span onClick={registerForm}>Log In</span>
        </>
    );
};

export default SignUp;
