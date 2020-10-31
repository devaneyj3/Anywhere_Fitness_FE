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
                </section>
                <Link to="/">
                    <Button color="secondary">Home</Button>
                </Link>
            </section>
            <hr />
            <div className="picker">
                <select name="name" value={props.name} placeholder="Class Name">
                    <option value="">Class List</option>
                    <option value="">{props.name}</option>
                    <option value="">1 to 3</option>
                    <option value="">3 or more</option>
                </select>
                <select name="name" value={props.type} placeholder="Class type">
                    <option value="">Class Type</option>
                    <option value="">{props.type}</option>
                    <option value="">1 to 3</option>
                    <option value="">3 or more</option>
                </select>
                <select
                    name="name"
                    value={props.startTime}
                    placeholder="Class Time"
                >
                    <option value="">Class Time</option>
                    <option value="">{props.startTime}</option>
                    <option value="">1 to 3</option>
                    <option value="">3 or more</option>
                </select>
                <select
                    name="name"
                    value={props.duration}
                    placeholder="Class Duration"
                >
                    <option value="">Class Duration</option>
                    <option value="">{props.duration}</option>
                    <option value="">1 to 3</option>
                    <option value="">3 or more</option>
                </select>
            </div>
        </>
    );
};

export default SearchHeader;
