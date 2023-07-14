import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import Contact from './components/Contact';
import ShoppingCart from './components/ShoppingCart';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


export const CartContext = React.createContext();

function App() {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };
  
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <> 
    <Router>
      <div>
          <Header />
          <Navbar />
              <main>
                  <CartContext.Provider
                    value={{
                    cartItems,
                        addToCart,
                        removeFromCart,
                        updateQuantity,
                        calculateTotalPrice,
                        }}
                        >
                          <Routes>
                          <Route path="/" exact element={<Home />} />
                          <Route path="/products" exact element={<Products />} />
                          <Route path="/products/:productId" element={<ProductDetails />} />
                          <Route path="/contact" element={<Contact />} />
                          <Route path="/cart" element={<ShoppingCart />} />
                          </Routes>
                  </CartContext.Provider>
              </main>
            <Footer />
        </div>
    </Router>
    </>
  );
}

export default App;
