import React, { useState } from "react";
import Nav from "../../Components/Nav/Nav";
import Classes from "../../Components/Classes/Classes";
import { Alert } from "reactstrap";
function ReserveClass({ location, match }) {
    const [reserve] = useState(true);
    const { id } = match.params;
    return (
        <>
            <Nav url={location.state.url} />
            {/* {message ? <Alert color="success">{message}</Alert> : null} */}
            <Classes
                reserve={reserve}
                clientID={id}
            />
        </>
    );
}

export default ReserveClass;
