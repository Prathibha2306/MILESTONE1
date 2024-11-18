import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import OrderCustomizationPage from './pages/OrderCustomizationPage';
import ShoppingCart from './pages/ShoppingCart';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import SignUpLoginPage from './pages/SignUpLoginPage';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/customize-order" element={<OrderCustomizationPage />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signup-login" element={<SignUpLoginPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
