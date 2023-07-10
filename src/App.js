import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const CartContext = React.createContext();

function App() {

  const [cartItems, setCartItems] = useState([]);

  // Add a product to the cart
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      // If the item is already in the cart, update its quantity
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // If the item is not in the cart, add it with a quantity of 1
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  // Remove a product from the cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // Update the quantity of a product in the cart
  const updateQuantity = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Calculate the total price of the items in the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };



  return (
    <> 

    <Router>
      <div>
        <Header />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </nav>
      
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
