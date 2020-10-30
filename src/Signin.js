import React, {useState} from 'react';
import axios from 'axios';

const Signin = ({history}) => {

  const [ data, setData ] = useState({
    name: '',
    username: '',
    password: ''
  });

  const submit = async (e) => {
    e.preventDefault();
    const response = await axios.post('https://sample12342.herokuapp.com/users/login', data)
    console.log(response.data)
    history.push(`/showProfile/${response.data.id}`)
  }

  const change = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }
  return (
    <>
    <div>
      <form onSubmit={submit}>
        <input type="text" name="name" value={data.name} onChange={change} placeholder="Name" />
        <input type="text" name="username" value={data.username} onChange={change} placeholder="Username" />
        <input type="password" name="password" value={data.password} onChange={change} placeholder="Password" />
        <input type="submit"/>
      </form>
    </div>
    </>
  )
}

export default Signin;