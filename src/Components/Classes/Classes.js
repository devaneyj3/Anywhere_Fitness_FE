import React, { useEffect } from "react";
import { connect } from "react-redux";
import { get_classes, client_add_class } from '../../redux/actions/classes_actions';
import { Alert, Table, Button } from "reactstrap";

const Classes = ({ reserve, clientID, classes, get_classes, client_add_class, client_classes }) => {

    useEffect(() => {
        get_classes()
    },[get_classes])
    const reserveClass = async (classes, e) => {
        e.target.setAttribute("disabled", "disabled");
        client_add_class(clientID, classes.id, classes.name)
    //     // TODO: class atendee number is not going up in the reserve page for the client but it is when I click on the reserve button for the next class
    //     await axiosWithAuth().put(`classes/${classes.id}/`, {
    //         ...classes,
    //         attendees: (classes.attendees += 1),
    //     });
    //     setSession([...session, {attendees : session.attendees += 1}] )
    };
    return (
        <>
            {classes.length < 1 ? (
                <Alert color="danger">
                    There are no classes to chose from.
                </Alert>
            ) : null}
            <Table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Instructor Name</th>
                        <th>Duration</th>
                        <th>Start</th>
                        <th>Intensity</th>
                        <th>Location</th>
                        <th>Enrolled</th>
                        <th>Capacity</th>
                    </tr>
                </thead>
                <tbody>
                    {classes.map((session, index) => (
                        <tr key={session.id}>
                            {reserve ? (
                                <Button
                                    name={session.id}
                                    onClick={(e) => reserveClass(session, e)}
                                    color="success"
                                    disabled={
                                        // BUG-TODO: filter and show reserve button option if the user does not have that class reserved
                                        client_classes.filter(
                                            (item) => item.id === session.id
                                        )
                                            ? true
                                            : false
                                    }
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
                    ))}
                </tbody>
            </Table>
        </>
    );
};

const mapStateToProps = state => {
    const { classes } = state.ClassesReducer;
    const { client_classes } = state.ClientReducer;
    return {
        classes: classes,
        client_classes: client_classes
    }
}

export default connect(mapStateToProps, { get_classes, client_add_class })(Classes)
