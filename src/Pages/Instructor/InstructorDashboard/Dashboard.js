import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from 'reactstrap';
import Nav from "../../../Components/Nav/Nav";
import img from "../../../images/Image.jpg";
import "./Dashboard.scss";

function Dashboard({match, location}) {
    const history = useHistory()
    const { id, name } = match.params;
    
    const MakeClass = () => {
        history.push(`/Create/${id}/${name}`, location.pathname)
    }
    const manageClases = () => {
        history.push(`/Manage/${id}/${name}`, location.pathname)
    }

    return (
        <>
        <Nav url="/" />
        <hr />
        <h2>Welcome {name}</h2>
        <div className="options">
            <Button color="primary" onClick={MakeClass}>Create Classes</Button>
            <Button color="primary" onClick={manageClases}>Manage Classes</Button>
        </div>
        <div>
            <img src={img} alt="Lake" />
        </div>
        </>
    );
}

export default Dashboard;
