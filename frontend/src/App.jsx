import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {Men} from './pages/Men';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import Login from './pages/Login';
import Menp from './pages/Menp';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Men">Men</Link>
            </li>
            <li>
              <Link to="/Cart">Cart</Link>
            </li>
            <li>
              <Link to="/SignIn">Sign In</Link>
            </li>
             <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/Menp">Men Premium</Link>
            </li>
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<h1>Welcome to the Clothing Store</h1>} />
          <Route path="/Men" element={<Men />} /> 
          <Route path="/Cart" element={<Cart />} /> 
          <Route path="/SignIn" element={<SignIn />} />
           <Route path="/Login" element={<Login />} />
           <Route path="/Menp" element={<Menp />} />
           <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
