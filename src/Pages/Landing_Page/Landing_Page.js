import { Link } from "react-router-dom";
import React from "react";
import "./Landing_Page.scss";
import { Button } from "reactstrap";

const LandingPage = () => {
  return (
    <>
      <div className="greet">
        The world is our gym.
        <br />
        Welcome!
      </div>

      <div className="info">
        <h1>Browse classes</h1>
        <p>
          Our expert instructors conduct classes literally
          <br />
          anywhere. Take a yoga class on a mountaintop.
          <br />
          Do boot camp on the beach. Go to an
          <br />
          abandoned mansion for mat pilates. The
          <br />
          options are limitless.
        </p>
      </div>

      <hr className="hr" />
      <footer className="footer">
        <Link to="/ClientAuth">
          <Button color='primary'>For Clients</Button>
        </Link>

        <Link to="/InstructorAuth">
          <Button color='primary'>For Instructors</Button>
        </Link>

        <Link to="/class_search">
          <Button color='primary'>Search Classes</Button>
        </Link>
      </footer>
    </>
  );
};

export default LandingPage;
