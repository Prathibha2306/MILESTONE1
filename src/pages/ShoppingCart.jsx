import React from 'react';
import PropTypes from 'prop-types';
import './ShoppingCart.css'

const ShoppingCart = ({ cartItems }) => {
  // Calculate the total price
  const calculateTotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart">
      <h2>Your Cart</h2>
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ₨.{item.price * item.quantity}</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty!</p>
      )}
      {cartItems && cartItems.length > 0 && (
        <>
          <h3>Total: ₨.{calculateTotal()}</h3>
          <button>Checkout</button>
        </>
      )}
    </div>
  );
};

// Default props to avoid errors
ShoppingCart.defaultProps = {
  cartItems: [],
};

// Prop validation
ShoppingCart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ),
};

export default ShoppingCart;
