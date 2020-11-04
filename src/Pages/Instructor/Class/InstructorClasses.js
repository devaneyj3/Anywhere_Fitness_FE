import React, { useEffect } from "react";
import { instructor_class, delete_class } from "../../../redux/actions/classes_actions";
import { connect } from "react-redux";
import { Button, Table } from "reactstrap";
import Nav from "../../../Components/Nav/Nav"
import { Alert } from "reactstrap";
import "./InstructorClasses.scss";
const InstructorClasses = ({ match, location, instructor_class, classes, delete_class }) => {

    const { name, id } = match.params;
    
    useEffect(() => {
        instructor_class(id)
    },[instructor_class, id])


    const deleteClass = async (item) => {
        delete_class(item.id);

    };
    return (
        <>
            <Nav url={location.state} />
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
const mapStateToProps = state => {
    const { instructor_classes } = state.ClassesReducer
    return {
        classes: instructor_classes
    }
}
export default connect(mapStateToProps, { instructor_class, delete_class })(InstructorClasses);
