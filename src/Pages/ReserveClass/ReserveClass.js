import React, { useState, useEffect } from "react";
import Nav from "../../Components/Nav/Nav";
import ClassInfo from "../../Components/Classes/ClassInfo";
import { connect } from "react-redux";
import {
    get_classes,
    client_add_class,
} from "../../redux/actions/classes_actions";

function ReserveClass({ location, match, classes, client_classes, get_classes }) {
    const [reserve] = useState(true);
    const { id } = match.params;

    useEffect(() => {
        get_classes();
    }, [get_classes]);

    const reserveClass = async (classes, e) => {
        e.target.setAttribute("disabled", "disabled");
        client_add_class(id, classes.id, classes.name);
        //     // TODO: class atendee number is not going up in the reserve page for the client but it is when I click on the reserve button for the next class
        //     await axiosWithAuth().put(`classes/${classes.id}/`, {
        //         ...classes,
        //         attendees: (classes.attendees += 1),
        //     });
        //     setSession([...session, {attendees : session.attendees += 1}] )
    };

    return (
        <>
            <Nav url={location.state.url} />
            {/* {message ? <Alert color="success">{message}</Alert> : null} */}
            <ClassInfo
                reserve={reserve}
                reserveClass={reserveClass}
                classes={classes}
                client_classes={client_classes}
            />
        </>
    );
}
const mapStateToProps = (state) => {
    const { classes } = state.ClassesReducer;
    const { client_classes } = state.ClientReducer;
    return {
        classes: classes,
        client_classes: client_classes,
    };
};
export default connect(mapStateToProps, { get_classes, client_add_class })(
    ReserveClass
);
