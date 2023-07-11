import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
// import data from '../data';
import minitattoo from '../assets/mini-tattoo.jpg';
import smalltattoo from '../assets/small-tattoo.webp';
import mediumtattoo from '../assets/medium-tattoo.jpg';
import bigtattoo from '../assets/big-tattoo.jpg';
import piercing from '../assets/piercing.jpg';




function Products() {
  // const products = data.products;
  
  const products = [
      {
        id: 1,
        name: 'Mini Tattoo',
        price: 75,
        image: minitattoo // set image property
      },
      {
        id: 2,
        name: 'Small Tattoo',
        price: 125,
        image: smalltattoo // set image property
      },
      {
        id: 3,
        name: 'Medium Tattoo',
        price: 250,
        image: mediumtattoo // set image property
      },
      {
        id: 4,
        name: 'Big Tattoo',
        price: 350,
        image: bigtattoo // set image property
      },
      {
        id: 5,
        name: 'Piercing',
        price: 50,
        image: piercing // set image property
      }
    ];
  
  return (
    <div className="products-container">
      <h1 className='description'>Products and Services</h1>
      <div className = 'listitem'>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image}  width="30" height="30" /> &nbsp; &nbsp;
            <Link to={`/products/${product.id}`}>{product.name}</Link> - ${product.price}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default Products;