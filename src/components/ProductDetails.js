import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import { CartContext } from '../App';
import minitattoo from '../assets/mini-tattoo.jpg';
import smalltattoo from '../assets/small-tattoo.webp';
import mediumtattoo from '../assets/medium-tattoo.jpg';
import bigtattoo from '../assets/big-tattoo.jpg';
import piercing from '../assets/piercing.jpg';


function ProductDetailsContent({ product }) {
  
  const { addToCart } = React.useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-details-container">
      <h1 className="description">Product Description</h1>
      <img src={product.image}  width="250" height="170" /> &nbsp; &nbsp;
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

function ProductDetails() {
    const products = [
    {
      id: 1,
      name: 'Mini Tattoo',
      price: 75,
      image: minitattoo
    },
    {
      id: 2,
      name: 'Small Tattoo',
      price: 125,
      image: smalltattoo 
    },
    {
      id: 3,
      name: 'Medium Tattoo',
      price: 250,
      image: mediumtattoo 
    },
    {
      id: 4,
      name: 'Big Tattoo',
      price: 350,
      image: bigtattoo
    },
    {
      id: 5,
      name: 'Piercing',
      price: 50,
      image: piercing
    }
  ];

  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductDetailsContent product={product} />;
}

export default ProductDetails;


