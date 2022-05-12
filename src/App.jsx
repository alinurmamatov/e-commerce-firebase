import { useState, useContext } from 'react';
import './App.css';
import { AuthContext } from './context/AuthContext';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import CartList from './pages/CartList';
import MakeOrder from './pages/MakeOrder';
import Login from './pages/Login';
import AllOrders from './pages/AllOrders';
import SeeProducts from './pages/SeeProducts';
import AddProduct from './pages/AddProduct';
import About from './pages/About';

function App() {
  // const {signInWithEmailandPassword, userMain, logOut, loginWithEmail} = useContext(AuthContext);

  // const [newUser, setNewUser] = useState({email: "", password: ""});
  // const [logIn, setLogIn] = useState({email: "", password: ""});

  return (
    <>
    <div className="App">
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<CartList/>}/>
        <Route path='/make-order' element={<MakeOrder/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='all-orders' element={<AllOrders/>}/>
          <Route path='add-product' element={<AddProduct/>}/>
          <Route path='see-products' element={<SeeProducts/>}/>
        </Route>
        <Route path='/about' element={<About/>}/>
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
