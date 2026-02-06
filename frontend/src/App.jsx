import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer } from 'react-toastify';
import { ShopContext } from './context/ShopContext';
import PrivateRoute from './components/PrivateRoute'; // import the wrapper

const App = () => {
  const { token } = useContext(ShopContext);

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        

        {/* Protected routes */}
        <Route path="/product/:productId" element={<PrivateRoute token={token}><Product /></PrivateRoute>} />
        <Route path="/" element={<PrivateRoute token={token}><Home /></PrivateRoute>} />
        <Route path="/collection" element={<PrivateRoute token={token}><Collection /></PrivateRoute>} />
        <Route path="/cart" element={<PrivateRoute token={token}><Cart /></PrivateRoute>} />
        <Route path="/place-order" element={<PrivateRoute token={token}><PlaceOrder /></PrivateRoute>} />
        <Route path="/orders" element={<PrivateRoute token={token}><Orders /></PrivateRoute>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
