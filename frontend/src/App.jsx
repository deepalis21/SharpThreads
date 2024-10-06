import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartProvider from './pages/CartContext';
import { AdminProvider } from './pages/AdminContext';

import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Cart from './pages/Cart';
import Womenp from './pages/Womenp';
import Menp from './pages/Menp';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import SignIn from './pages/SignIn';
import Login from './pages/Login';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <AdminProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Men />} />
            <Route path="/men/:id" element={<Menp />} />
            <Route path="/women" element={<Women />} />
            <Route path="/menp" element={<Menp />} />
            <Route path="/women/:id" element={<Womenp />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/login" element={<Login />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="*" element={<h1>404 - Not Found</h1>} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </AdminProvider>
  );
}

export default App;
