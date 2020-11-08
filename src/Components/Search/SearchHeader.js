import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const SearchHeader = (props) => {
    return (
        <>
            <section className="header">
                <h1>Anywhere Fitness</h1>
                <section>
                    <input type="text" placeholder="Find a class or activity" />
                    <input type="text" placeholder="Location" />
                    <Link to="/">
                        <Button color="secondary">Home</Button>
                    </Link>
                </section>
            </section>
        </>
    );
};

export default SearchHeader;
