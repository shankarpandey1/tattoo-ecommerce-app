import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data';
import './ProductDetails.css';
import { CartContext } from '../App';

function ProductDetailsContent({ product }) {
  const { addToCart } = React.useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-details-container">
      <h1>Product Details</h1>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

function ProductDetails() {
  const { productId } = useParams();
  const product = data.products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetailsContent product={product} />;
}

export default ProductDetails;




// import React, { useContext } from 'react';
// import { useParams } from 'react-router-dom';
// import data from '../data';
// import './ProductDetails.css';

// // Create a CartContext to manage the cart state
// const CartContext = React.createContext();


//   // Access the cart state and actions from the CartContext
//   const { cartItems, addToCart } = useContext(CartContext);

// function ProductDetails() {

  

//   const { productId } = useParams();
//   const product = data.products.find((p) => p.id === parseInt(productId));

//   if (!product) {
//     return <div>Product not found</div>;
//   }


  

//   const handleAddToCart = () => {
    
//     addToCart(product);
//   };

//   return (
//     <div className="product-details-container">
//       <h1>Product Details</h1>
//       <h3>{product.name}</h3>
//       <p>Price: ${product.price}</p>
//       <button onClick={handleAddToCart}>Add to Cart</button>
//     </div>
//   );
// }

// export default ProductDetails;
