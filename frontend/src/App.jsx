import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {Men} from './pages/Men';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import Login from './pages/Login';
import Menp from './pages/Menp';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Women from './pages/Women';
import Womenp from './pages/Womenp';
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Home from './pages/Home';

import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <div className="app">
        
        <Navbar/>
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
            <li>
              <Link to="/Women">Women</Link>
            </li>
            <li>
              <Link to="/Womenp">Women Premium</Link>
            </li>
            <li>
              <Link to="/Contactus">Contactus</Link>
            </li>
            <li>
              <Link to="/Aboutus">Aboutus</Link>
            </li>
          </ul>
        

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Women" element={<Women />} />  
          <Route path="/Cart" element={<Cart />} /> 
          <Route path="/SignIn" element={<SignIn />} />
           <Route path="/Login" element={<Login />} />
           <Route path="/Menp" element={<Menp />} />
           <Route path="/Womenp" element={<Womenp />} />
           <Route path="/Aboutus" element={<Aboutus />} />
           <Route path="/Contactus" element={<Contactus />} />
           <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;