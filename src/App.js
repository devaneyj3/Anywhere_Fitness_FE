
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import Signin from './Signin';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <Route path='/signin' component={Signin} />
      <Route path='/showProfile/:id' component={Profile} />
      <Redirect from='/' to='/signin'/>
    </div>
  );
}

export default App;
