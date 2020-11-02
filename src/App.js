import React from "react";

import "./App.scss";
import { Route } from "react-router-dom";
import { FitnessContext } from "./contexts/InitialContext";
import LandingPage from "./Pages/Landing_Page/Landing_Page";
import ClientSignUp from "./Pages/Client/Client";
import ClassSearch from "./Pages/Search/Search";
import CreateClass from "./Components/CreateClass/CreateClass";
import ClientDashboard from "./Pages/ClientDashboard/ClientDashboard";
import Instructor from "./Pages/Instructor/Instructor";
import InstructorDashboard from "./Pages/Instructor/InstructorDashboard/Dashboard";
import InstructorClasses from "./Pages/Instructor/Class/InstructorClasses";
import ReserveClass from "./Pages/ReserveClass/ReserveClass";

function App() {
    return (
        <>
            <div className="App">
                <FitnessContext>
                    <Route exact path="/" component={LandingPage} />
                    <Route
                        exact
                        path="/Create/:id/:name"
                        component={CreateClass}
                    />
                    <Route
                        exact
                        path="/Manage/:id/:name"
                        component={InstructorClasses}
                    />
                    <Route exact path="/ClientAuth" component={ClientSignUp} />
                    <Route
                        exact
                        path="/Client/:clientID/:name"
                        component={ClientDashboard}
                    />
                    <Route
                        exact
                        path="/Instructor/:id/:name"
                        component={InstructorDashboard}
                    />
                    <Route
                        exact
                        path="/reserveClass/:id"
                        component={ReserveClass}
                    />
                    <Route exact path="/class_search" component={ClassSearch} />
                    <Route
                        exact
                        path="/InstructorAuth"
                        component={Instructor}
                    />
                </FitnessContext>
            </div>
        </>
    );
}

export default App;
