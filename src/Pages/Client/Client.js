import React, { useState } from "react";
import Nav from "../../Components/Nav/Nav";
import { connect } from "react-redux"
import SignUp from "../../Components/SignUp/SignUp";
import Login from "../../Components/Login/Login";
import yoga from "../../images/yoga.jpg";
import "./Client.scss";

const Client = (props) => {
    const [register, setRegister] = useState(false);

    const registerForm = (e) => {
        setRegister(!register);
    };

    return (
        <>
            <div>
                <Nav url="/" />
                <section className="body">
                    <img src={yoga} alt="yoga" />
                    <section className="login">
                        <h2>Looking to get healthy.</h2>
                        {register ? (
                            <SignUp
                                role="clients"
                                registerForm={registerForm}
                                {...props}
                            />
                        ) : (
                            <Login
                                role="clients"
                                registerForm={registerForm}
                                {...props}
                            />
                        )}
                    </section>
                </section>
            </div>
        </>
    );
};

const mapStateToProps = (state, ) => {
    let {client_login_message, client_login_apiError, client_status, client_name, client_id, client_register_message, client_register_apiError} = state.ClientReducer
        return {
            login_message: client_login_message,
            login_apiError: client_login_apiError,
            name: client_name,
            id: client_id,
            status: client_status,
            register_message: client_register_message,
            register_apiError: client_register_apiError
        };
    
};

export default connect(mapStateToProps, {})(Client);
