import React, { useEffect } from "react";
import { connect } from "react-redux";
import { get_classes } from "../../redux/actions/classes_actions";
import ClassInfo from "./ClassInfo";

const Classes = ({ classes, get_classes }) => {
    useEffect(() => {
        get_classes();
    }, [get_classes]);

    return <ClassInfo classes={classes} />;
};

const mapStateToProps = (state) => {
    const { classes } = state.ClassesReducer;
    return {
        classes: classes,
    };
};

export default connect(mapStateToProps, { get_classes })(Classes);
