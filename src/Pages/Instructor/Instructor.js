import React, { useState } from "react";
import { connect } from "react-redux";
import Nav from "../../Components/Nav/Nav";
import SignUp from "../../Components/SignUp/SignUp";
import Login from "../../Components/Login/Login";
import yoga from "../../images/yoga.jpg";
import "./Instructor.scss";

const Instructor = (props) => {
    const [register, setRegister] = useState(false);

    const switchForm = (e) => {
        setRegister(!register);
    };

    return (
        <>
            <div>
                <Nav url="/" />
                <section className="body">
                    <img src={yoga} alt="yoga" />
                    <section className="login">
                        <h2>Log in with your instructor credentials</h2>
                        {register ? (
                            <SignUp
                                role="instructors"
                                registerForm={switchForm}
                                {...props}
                            />
                        ) : (
                            <Login
                                role="instructors"
                                registerForm={switchForm}
                                {...props}
                            />
                        )}
                    </section>
                </section>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    let {instructor_login_message, instructor_login_apiError, instructor_status, instructor_name, instructor_id} = state.InstructorReducer
        return {
            message: instructor_login_message,
            apiError: instructor_login_apiError,
            name: instructor_name,
            id: instructor_id,
            status: instructor_status
        };
};

export default connect(mapStateToProps, {})(Instructor);
