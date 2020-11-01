import React, { useEffect, useState, useContext } from "react";
import axiosWithAuth from "../../../utils/axiosWithAuth";
import { Button, Table } from "reactstrap";
import Nav from "../../../Components/Nav/Nav"
import {InitialContext} from "../../../contexts/InitialContext"
import { Alert } from "reactstrap";
import "./InstructorClasses.scss";
const InstructorClasses = ({ match, location }) => {

    const [ classes, setClasses ] = useState([])

    const { setSession, session  } = useContext(InitialContext)
    const { name, id } = match.params;

    useEffect(() => {
        const getClasses = async () =>  {
            const sessions = await axiosWithAuth().get(`/instructors/${id}/classes/`)
            setClasses(sessions.data)
        }
        getClasses()
    }, [])

    const deleteClass = async (item) => {
        const classId = await axiosWithAuth().delete(`/classes/${item.id}`);
        console.log('classId is', classId.data, 'and type, ', typeof(classId.data))
        console.log('session.data before filter in delete class function is, ', session)

        //TODO: filter for state is not working 
        setSession( session.filter(({ id }) => id !== classId.data));
        console.log('session.data before filter in delete class function is, ', session)
        setClasses( classes.filter(({ id }) => id !== classId.data));

    };
    return (
        <>
            <Nav url={location.state}/>
            <h1>Instructor classes for {name}:</h1>
            <div className="classes">
                {classes.length < 1 ? (
                    <Alert color="danger">You do not have any classes</Alert>
                ) : (
                    <Table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Duration</th>
                                <th>Start</th>
                                <th>Intensity</th>
                                <th>Location</th>
                                <th>Enrolled</th>
                                <th>Capacity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {classes
                                .map((item, index) => (
                                    <tr key={index}>
                                        <th scope="row"></th>
                                        <td>{item.name}</td>
                                        <td>{item.type}</td>
                                        <td>{item.duration}</td>
                                        <td>{item.startTime}</td>
                                        <td>{item.intensityLevel}</td>
                                        <td>{item.location}</td>
                                        <td>{item.attendees}</td>
                                        <td>{item.maxClassSize}</td>
                                        <Button
                                            color="danger"
                                            onClick={() => deleteClass(item)}
                                        >
                                            Delete Class
                                        </Button>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                )}
                <div /> 
            </div>
        </>
    );
};
export default InstructorClasses;
