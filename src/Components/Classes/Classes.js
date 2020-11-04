import React, { useEffect } from "react";
import { connect } from "react-redux";
import { get_classes } from '../../redux/actions/classes_actions';
import { Alert, Table, Button } from "reactstrap";

const Classes = ({ reserve, clientID, setMessage, data, classes, get_classes }) => {

    useEffect(() => {
        get_classes()
    },[get_classes])
    // const reserveClass = async (classes, e) => {
    //     e.target.setAttribute("disabled", "disabled");
    //     await axiosWithAuth().post(`clients/${clientID}/classes/${classes.id}`);
    //     setMessage(`You have added this ${classes.name}`);
    //     // TODO: class atendee number is not going up in the reserve page for the client but it is when I click on the reserve button for the next class
    //     await axiosWithAuth().put(`classes/${classes.id}/`, {
    //         ...classes,
    //         attendees: (classes.attendees += 1),
    //     });
    //     setSession([...session, {attendees : session.attendees += 1}] )
    // };
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
                    {classes.map((classes, index) => (
                        <tr key={classes.id}>
                            {reserve ? (
                                <Button
                                    name={classes.id}
                                    // onClick={(e) => reserveClass(classes, e)}
                                    color="success"
                                    disabled={
                                        data.length > 1 &&
                                        data.filter(
                                            (item) => item.id === data.id
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
                            <td>{classes.name}</td>
                            <td>{classes.type}</td>
                            <td style={{ textTransform: "capitalize" }}>
                                {classes.instructor_name}
                            </td>
                            <td>{classes.duration} hr</td>
                            <td>{classes.startTime} PM</td>
                            <td>{classes.intensityLevel}</td>
                            <td>{classes.location}</td>
                            <td>{classes.attendees}</td>
                            <td>{classes.maxClassSize}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

const mapStateToProps = state => {
    const { classes } = state.ClassesReducer;
    return {
        classes: classes
    }
}

export default connect(mapStateToProps, { get_classes })(Classes);
