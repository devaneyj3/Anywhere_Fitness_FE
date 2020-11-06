import React, { useEffect } from "react";
import { Alert, Table } from "reactstrap";
import { client_class } from "../../redux/actions/client_actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";

const ClientDashboard = ({ match, client_class, client_sessions }) => {
    const { name, clientID } = match.params;
    useEffect(() => {
        const clientCall = async () => {
            client_class(clientID);
        };
        clientCall();
    }, [clientID, client_class]);

    return (
        <>
            <Nav url="/" loggedIn="true" />
            <h1>Hello {name}</h1>
            <Link
                to={{
                    pathname: `/reserveClass/${clientID}`,
                    state: {
                        url: match.url,
                    },
                }}
            >
                Reserve a Class
            </Link>
            <p>Here are your classes:</p>
            {client_sessions.length < 1 ? (
                <Alert color="danger">You have no classes</Alert>
            ) : (
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
                        </tr>
                    </thead>
                    <tbody>
                        {client_sessions.map((session, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{session.name}</td>
                                    <td>{session.type}</td>
                                    <td style={{ textTransform: "capitalize" }}>
                                        {session.instructor_name}
                                    </td>
                                    <td>{session.duration} hr</td>
                                    <td>{session.startTime} PM</td>
                                    <td>{session.intensityLevel}</td>
                                    <td>{session.location}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            )}
        </>
    );
};

const mapStateToProps = (state) => {
    const { client_classes } = state.ClientReducer;
    return {
        client_sessions: client_classes,
    };
};

export default connect(mapStateToProps, { client_class })(ClientDashboard);
