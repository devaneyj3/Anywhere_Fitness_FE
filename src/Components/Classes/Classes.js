import React, { useContext } from "react";
import { InitialContext } from "../../contexts/InitialContext";
import { Alert, Table, Button } from "reactstrap";
import axiosWithAuth from "../../utils/axiosWithAuth";

const Classes = ({ reserve, clientID, setMessage, data }) => {
    const { session } = useContext(InitialContext);
    console.log('session in class',session)
    const reserveClass = async (session, e) => {
        e.target.setAttribute("disabled", "disabled");
        await axiosWithAuth().post(`clients/${clientID}/classes/${session.id}`);
        setMessage(`You have added this ${session.name}`);
        // TODO: class atendee number is not going up in the reserve page for the client but it is when I click on the reserve button for the next class
        await axiosWithAuth().put(`classes/${session.id}/`, {
            ...session,
            attendees: (session.attendees += 1),
        });
    };
//
    return (
        <>
            {session.length < 1 ? (
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
                    {session.map((session, index) => (
                        <tr key={session.id}>
                            {reserve ? (
                                <Button
                                    name={session.id}
                                    onClick={(e) => reserveClass(session, e)}
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

export default Classes;
