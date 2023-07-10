import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
import './Products.css';

function Products() {
  return (
    <div className="products-container">
      <h1>Products</h1>
      <ul>
        {data.products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link> - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
