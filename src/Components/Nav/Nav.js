import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./Nav.scss";

const Nav = ({ url, loggedIn }) => {
    const logout = () => {
        console.log('trying to clear')
        localStorage.removeItem('token');
    }
    return (
        <section className="header">
            <h1 className="title">Anywhere Fitness</h1>
            {loggedIn ? (
                <Link to={url}>
                    <Button color="secondary" onClick={logout}>Logout</Button>
                </Link>
            ) : (
                <Link to={url}>
                    <Button color="secondary">Back</Button>
                </Link>
            )}
        </section>
    );
};
export default Nav;
