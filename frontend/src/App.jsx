import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {Men} from './pages/Men';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import Login from './pages/Login';
import Menp from './pages/Menp';
import About from './pages/Aboutus';
import Contact from './pages/Contactus';
import Women from './pages/Women';
import Womenp from './pages/Womenp';
import Footer from './components/Footer';

import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Navbar component is already handling the navigation */}
        <Navbar/>
        
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
          <Route path="/Aboutus" element={<About />} />
          <Route path="/Contactus" element={<Contact />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
       
        <Footer />
      </div>
    </Router>
  );
}

export default App;
