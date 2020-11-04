import React, { useState } from "react";
import { connect} from "react-redux";
import { create_class } from '../../redux/actions/classes_actions';
import Nav from "../Nav/Nav";
import { Alert } from "reactstrap";

const CreateClass = ({ match, create_class, message }) => {
  const { id, name } = match.params;
  
  const [data, setData] = useState({
    name: "",
    type: "",
    startTime:"",
    duration: "",
    intensityLevel: "",
    location: "",
    maxClassSize: "",
  });
  
  
  const handleSubmit = async (e) => {
    console.log('create class')
    e.preventDefault();
    data.instructor_id = parseInt(id)
    data.instructor_name = name
    data.attendees = 0
    create_class(data, id)
    data.maxClassSize = parseInt(data.maxClassSize)
    data.startTime = parseInt(data.startTime);
    data.duration = parseInt(data.duration)
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
    {/* TODO: FIX BUG THAT DISPLAYS SUCCESS MESSAGE WHEN NEW INSTRUCTER SIGNS IN WHEN A PREVIOUS INSTRUCTOR CREATED A CLASS */}
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
          type="datetime-local"
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

const mapStateToProps = state => {
  const { classes_createdMessage } = state.ClassesReducer;
  return {
    message: classes_createdMessage
  }
}

export default connect(mapStateToProps, { create_class })(CreateClass);
