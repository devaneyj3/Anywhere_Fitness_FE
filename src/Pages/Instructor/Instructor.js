import React, { useState } from "react";
import Nav from "../../Components/Nav/Nav";
import { Alert } from "reactstrap";
import SignUp from "../../Components/SignUp/SignUp";
import Login from "../../Components/Login/Login";
import yoga from "../../images/yoga.jpg";
import "./Instructor.scss";

const Instructor = () => {
    const [register, setRegister] = useState(false);
    const [message, setMessage] = useState("");

    const [apiError, setApiError] = useState("");

    const switchForm = (e) => {
        setRegister(!register);
        setMessage("");
        setApiError("");
    };

    return (
        <>
            <div>
                <Nav url="/" />
                <section className="body">
                    <img src={yoga} alt="yoga" />
                    <section className="login">
                        <h2>Log in with your instructor credentials</h2>
                        {message ? (
                            <Alert color="success">{message}</Alert>
                        ) : apiError ? (
                            <Alert color="danger">{apiError}</Alert>
                        ) : null}
                        {register ? (
                            <SignUp
                                setMessage={setMessage}
                                setApiError={setApiError}
                                role="instructors"
                                registerForm={switchForm}
                            />
                        ) : (
                            <Login
                                setMessage={setMessage}
                                setApiError={setApiError}
                                role="instructors"
                                registerForm={switchForm}
                            />
                        )}
                    </section>
                </section>
            </div>
        </>
    );
};

export default Instructor;
