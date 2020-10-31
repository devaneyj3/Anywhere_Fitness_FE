import React, { useState, useContext } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { InitialContext } from "../../contexts/InitialContext";
import Nav from "../Nav/Nav";
import { Alert } from "reactstrap";

const CreateClass = ({ match }) => {
  const { session, setSession } = useContext(InitialContext);
  const [message, setMessage] = useState("");
  const { id, name } = match.params;
  
  const [data, setData] = useState({
    name: "",
    type: "",
    startTime: "",
    duration: "",
    intensityLevel: "",
    location: "",
    maxClassSize: "",
  });
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    data.id = Date.now()
    data.instructor_id = id
    data.instructor_name = name
    data.attendees = 0
    await axiosWithAuth().post(`/instructors/${id}/classes`, data);
    setMessage("You have successfully made the class");
    setSession([...session, data]);
    setData({
      name: "",
      type: "",
      startTime: "",
      duration: "",
      intensityLevel: "",
      location: "",
      maxClassSize: "",
    });
  };
  
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Nav url={`/Instructor/${id}/${name}`} />
      <h1>Create Class for {name}</h1>
      {message ? <Alert color="success">{message}</Alert> : null}
      <form name="create_class" data-netlify="true" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="Name"
        ></input>
        <input
          type="text"
          name="type"
          value={data.type}
          onChange={handleChange}
          placeholder="Type"
        ></input>
        <input
          type="number"
          name="startTime"
          value={data.startTime}
          onChange={handleChange}
          placeholder="Start Time"
        ></input>
        <input
          type="number"
          name="duration"
          value={data.duration}
          onChange={handleChange}
          placeholder="Duration"
        ></input>
        <input
          type="text"
          name="intensityLevel"
          value={data.intensityLevel}
          onChange={handleChange}
          placeholder="Intensity"
        ></input>
        <input
          type="text"
          name="location"
          value={data.location}
          onChange={handleChange}
          placeholder="Location"
        ></input>
        <input
          type="number"
          name="maxClassSize"
          value={data.maxClassSize}
          onChange={handleChange}
          placeholder="Capacity"
        ></input>
        <input name="submit" type="submit" />
      </form>
    </>
  );
};

export default CreateClass;
