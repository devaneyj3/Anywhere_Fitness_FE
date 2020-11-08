import React from "react";
import { Table } from "reactstrap";
import "./table_info.scss";
const TableInfo = (props) => {
    return (
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
            <tbody>{props.children}</tbody>
        </Table>
    );
};
export default TableInfo;
