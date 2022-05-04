import { useState, useContext } from 'react';
import './App.css';
import { AuthContext } from './context/AuthContext';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {
  // const {signInWithEmailandPassword, userMain, logOut, loginWithEmail} = useContext(AuthContext);

  // const [newUser, setNewUser] = useState({email: "", password: ""});
  // const [logIn, setLogIn] = useState({email: "", password: ""});

  return (
    <>
    <div className="App">
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </div>
    </>
  );
}

export default App;


 {/*   <div>
        <h3>Register</h3>
        <input onChange={(e) => setNewUser({...newUser, email: e.target.value})} placeholder="email" type="email"/>
        <input onChange={(e) => setNewUser({...newUser, password: e.target.value})} placeholder="password" />
        <button onClick={() => signInWithEmailandPassword(newUser.email, newUser.password)}>Register</button>
      </div>
      <div>
        <button onClick={() => logOut()}>Log out {userMain?.email}</button>
      </div>
      <div>
        <h3>Log In</h3>
        <input onChange={(e) => setLogIn({...logIn, email: e.target.value})} placeholder="email" type="email"/>
        <input onChange={(e) => setLogIn({...logIn, password: e.target.value})} placeholder="password" />
        <button onClick={() => loginWithEmail(logIn.email, logIn.password)}>Log In</button>
      </div> */}
