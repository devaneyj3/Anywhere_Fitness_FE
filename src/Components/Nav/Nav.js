import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./Nav.scss";

const Nav = ({url}) => {
    return (
        <section className="header">
            <h1 className="title">Anywhere Fitness</h1>
            <Link to={url}>
                <Button color="secondary">Back</Button>
            </Link>
        </section>
    );
};
export default Nav;