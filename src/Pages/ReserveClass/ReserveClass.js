import React, { useState } from "react";
import Nav from "../../Components/Nav/Nav";
import Classes from "../../Components/Classes/Classes";
import { Alert } from "reactstrap";
function ReserveClass({ location, match }) {
    const [reserve] = useState(true);
    const [message, setMessage] = useState("");
    const { id } = match.params;
    return (
        <>
            <Nav url={location.state.url} />
            {message ? <Alert color="success">{message}</Alert> : null}
            <Classes
                reserve={reserve}
                clientID={id}
                setMessage={setMessage}
                data={location.state.data}
            />
        </>
    );
}

export default ReserveClass;
