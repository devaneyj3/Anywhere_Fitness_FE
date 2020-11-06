import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { connect } from "react-redux"
import { logout } from '../../redux/actions/instructor_actions';
import "./Nav.scss";

const Nav = ({ url, loggedIn, logout }) => {
    const signout = () => {
        // localStorage.removeItem('token');
        logout()
    }
    return (
        <section className="header">
            <h1 className="title">Anywhere Fitness</h1>
            {loggedIn ? (
                <Link to={url}>
                    <Button color="secondary" onClick={signout}>Logout</Button>
                </Link>
            ) : (
                <Link to={url}>
                    <Button color="secondary">Back</Button>
                </Link>
            )}
        </section>
    );
};
export default connect(null, { logout })(Nav);
