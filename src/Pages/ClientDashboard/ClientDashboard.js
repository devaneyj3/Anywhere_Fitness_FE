import React, { useState, useEffect } from "react";
import { Alert, Table } from "reactstrap";
import { Link } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import axiosWithAuth from "../../utils/axiosWithAuth";

const ClientDashboard = ({ match }) => {
    const { name, clientID } = match.params;
    const [data, setData] = useState([]);
    useEffect(() => {
        const clientCall = async () => {
            let res = await axiosWithAuth().get(`clients/${clientID}/classes`);
            setData(res.data);
        
        };
        clientCall();
    }, [clientID]);

    return (
        <>
            <Nav url="/" />
            <h1>Hello {name}</h1>
            <Link
                to={{
                    pathname: `/reserveClass/${clientID}`,
                    state:  { 
                        url: match.url,
                        data:data
                    }
                    
                }}
            >
                Reserve a Class
            </Link>
            <p>Here are your classes:</p>
            {data < 1 ? (
                <Alert color="danger">You have no classes</Alert>
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
                    </tr>
                </thead>
                <tbody>
                    {data.map((session, index) => {
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
        </>
    );
};

export default ClientDashboard;
