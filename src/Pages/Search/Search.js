import React, { useEffect } from "react";
import SearchHeader from "../../Components/Search/SearchHeader";
import Classes from "../../Components/Classes/Classes";
import "./Search.scss";
import { connect } from "react-redux";
import { get_classes } from "../../redux/actions/classes_actions";
import { Alert } from "reactstrap";
import TableInfo from "../../Components/Classes/TableInfo";

const ClassSearch = ({ classes, get_classes }) => {
    useEffect(() => {
        get_classes();
    }, [get_classes]);

    return (
        <>
            <SearchHeader />
            {classes.length < 1 ? (
                <Alert color="danger">
                    There are no classes to chose from.
                </Alert>
            ) : null}
            <TableInfo>
                {classes.map((session, index) => (
                    <Classes session={session} index={index} />
                ))}
            </TableInfo>
        </>
    );
};

const mapStateToProps = (state) => {
    const { classes } = state.ClassesReducer;
    return {
        classes: classes,
    };
};

export default connect(mapStateToProps, { get_classes })(ClassSearch);
