import React, { useState, useEffect } from "react";
import Nav from "../../Components/Nav/Nav";
import Classes from "../../Components/Classes/Classes";
import TableInfo from "../../Components/Classes/TableInfo";
import { connect } from "react-redux";
import { get_classes } from "../../redux/actions/classes_actions";
import { Alert } from "reactstrap";

const ReserveClass = ({ classes, get_classes, location, match, client_classes }) => {
    const [reserve] = useState(true);
    const { id } = match.params;
    useEffect(() => {
        get_classes();
    }, [get_classes]);

    const clientEnrolledClassIds = client_classes.map(cls => cls.id)

    const availableClasses = classes.filter(cls => !clientEnrolledClassIds.includes(cls.id))

    return (
        <>
            <Nav url={location.state.url} />
            {/* {message ? <Alert color="success">{message}</Alert> : null} */}
            {availableClasses.length < 1 ? (
                <Alert color="danger">
                    There are no classes to chose from.
                </Alert>
            ) : null}
            <TableInfo>
                {availableClasses.map((session, index) => (
                    <Classes
                        session={session}
                        index={index}
                        reserve={reserve}
                        clientID={id}
                    />
                ))}
            </TableInfo>
        </>
    );
};

const mapStateToProps = (state) => {
    const { classes } = state.ClassesReducer;
    const { client_classes } = state.ClientReducer;
    return {
        classes: classes,
        client_classes: client_classes
    };
};

export default connect(mapStateToProps, { get_classes })(ReserveClass);
