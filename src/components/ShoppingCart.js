import React, { useContext, useState } from 'react';
import { CartContext } from '../App';
import './ShoppingCart.css';


function ShoppingCart() {

  const { cartItems, removeFromCart, updateQuantity, calculateTotalPrice } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your shopping cart is currently empty.</p>
      ) : (
        <div>
          <div className="cart-items-container">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>
                  Quantity:{' '}
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  />
                </p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>
          <p><b>Total Price: ${calculateTotalPrice()}</b></p>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;

  
//   const { cartItems, removeFromCart, updateQuantity, calculateTotalPrice } = useContext(CartContext);

//   return (
//     <div className="cart-container">
//       <h1>Shopping Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your shopping cart is currently empty.</p>
//       ) : (
//         <div>
//           {cartItems.map((item) => (
//             <div key={item.id} className="cart-item">
//               <h3>{item.name}</h3>
//               <p>Price: ${item.price}</p>
//               <p>
//                 Quantity:{' '}
//                 <input
//                   type="number"
//                   min="1"
//                   value={item.quantity}
//                   onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
//                 />
//               </p>
//               <button onClick={() => removeFromCart(item.id)}>Remove</button>
//             </div>
//           ))}
//           <p>Total Price: ${calculateTotalPrice()}</p>
//         </div>
//       )}
//     </div>
//   );
// }


// export default ShoppingCart;
