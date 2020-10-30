import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = ({match}) => {
  const { id } = match.params;
  const [ data, setData ] = useState([])

  useEffect( async() => {
    const response = await axios.get(`https://sample12342.herokuapp.com/users/${id}`)
    console.log(response.data)
    setData(response.data)
  }, [])
  return (
    <h1>{data.name}</h1>
  )
}

export default Profile;