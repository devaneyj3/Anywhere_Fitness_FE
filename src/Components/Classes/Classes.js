import React from "react";
import { connect } from "react-redux";
import {
    client_add_class,
    update_attendees,
} from "../../redux/actions/classes_actions";
import { Button } from "reactstrap";

const Classes = ({
    reserve,
    clientID,
    index,
    session,
    client_add_class,
    update_attendees,
}) => {
    
    const reserveClass = async (classes, e) => {
        e.target.setAttribute("disabled", "disabled");
        client_add_class(clientID, classes.id, classes.name);
        update_attendees(classes.id);
        //     // TODO: class atendee number is not going up in the reserve page for the client but it is when I click on the reserve button for the next class
    };
    return (
        <>
            <tr key={session.id}>
                {reserve ? (
                    <Button
                        name={session.id}
                        onClick={(e) => reserveClass(session, e)}
                        color="success"
                    >
                        Reserve
                    </Button>
                ) : (
                    <th scope="row">{index + 1}</th>
                )}
                <td>{session.name}</td>
                <td>{session.type}</td>
                <td style={{ textTransform: "capitalize" }}>
                    {session.instructor_name}
                </td>
                <td>{session.duration} hr</td>
                <td>{session.startTime} PM</td>
                <td>{session.intensityLevel}</td>
                <td>{session.location}</td>
                <td>{session.attendees}</td>
                <td>{session.maxClassSize}</td>
            </tr>
        </>
    );
};

export default connect(null, { client_add_class, update_attendees })(Classes);
