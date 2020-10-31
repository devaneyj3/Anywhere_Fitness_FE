import React, { useState } from "react";
import Nav from "../../Components/Nav/Nav";
import { Alert } from "reactstrap";
import SignUp from "../../Components/SignUp/SignUp";
import Login from "../../Components/Login/Login";
import yoga from "../../images/yoga.jpg";
import "./Client.scss";

const Client = () => {
    const [register, setRegister] = useState(false);
    const [message, setMessage] = useState("");

    const [apiError, setApiError] = useState("");

    const registerForm = (e) => {
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
                        <h2>Looking to get healthy.</h2>
                        {message ? (
                            <Alert color="success">{message}</Alert>
                        ) : apiError ? (
                            <Alert color="danger">{apiError}</Alert>
                        ) : null}
                        {register ? (
                            <SignUp
                                setMessage={setMessage}
                                setApiError={setApiError}
                                role="clients"
                                registerForm={registerForm}
                            />
                        ) : (
                            <Login
                                setMessage={setMessage}
                                setApiError={setApiError}
                                role="clients"
                                registerForm={registerForm}
                            />
                        )}
                    </section>
                </section>
            </div>
        </>
    );
};

export default Client;
