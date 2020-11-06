import React from "react";
import { Button, Alert, Table } from "reactstrap";
const ClassInfo = ({ reserve,
  reserveClass, client_classes,
  classes}) => {
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
                  <ClassList reserve={reserve},
  reserveClass, client_classes,
  classes />
            </Table>
        </>
    );
};

export default ClassInfo;
