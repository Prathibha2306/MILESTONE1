import React, { useState } from "react";
import "./OrderCustomizationPage.css";

const OrderCustomizationPage = ({ basePrice = 0 }) => {  
  const [addOns, setAddOns] = useState({
    spicy: false,
    cheese: false,
    veggies: false,
  });
  const [cart, setCart] = useState([]);

 
  const handleAddOnsChange = (event) => {
    const { name, checked } = event.target;
    setAddOns((prevAddOns) => ({
      ...prevAddOns,
      [name]: checked,
    }));
  };

  const calculateItemPrice = () => {
    const parsedBasePrice = parseFloat(basePrice); 

    if (isNaN(parsedBasePrice)) {
      console.error("Invalid base price: ", basePrice);  
      return 0;  
    }

    let addOnPrice = 0;
    if (addOns.spicy) addOnPrice += 10;
    if (addOns.cheese) addOnPrice += 20;
    if (addOns.veggies) addOnPrice += 15;

    return parsedBasePrice + addOnPrice;  
  };

  
  const calculateCartTotal = () => {
    return cart.reduce((total, item) => total + item.totalPrice, 0);
  };

  
  const handleAddToCart = () => {
    const newItem = {
      id: cart.length + 1,
      addOns,
      totalPrice: calculateItemPrice(),
    };
    setCart([...cart, newItem]);
  };

  return (
    <div className="order-customization-page">
      <h1>Customize Your Order</h1>

      <div className="customization-options">
        <div>
          <label>
            <input
              type="checkbox"
              name="spicy"
              checked={addOns.spicy}
              onChange={handleAddOnsChange}
            />
            Spicy (+₹10)
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="cheese"
              checked={addOns.cheese}
              onChange={handleAddOnsChange}
            />
            Cheese (+₹20)
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="veggies"
              checked={addOns.veggies}
              onChange={handleAddOnsChange}
            />
            Veggies (+₹15)
          </label>
        </div>
      </div>

      <div className="total-price">
        <h2>Item Price: ₹{calculateItemPrice()}</h2>  
      </div>

      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>

      <div className="cart-summary">
        <h2>Cart Items</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.addOns.spicy && "Spicy, "}
              {item.addOns.cheese && "Cheese, "}
              {item.addOns.veggies && "Veggies, "}
              ₹{item.totalPrice}
            </li>
          ))}
        </ul>
        <h2>Customization Total: ₹{calculateCartTotal()}</h2> 
      </div>
    </div>
  );
};

export default OrderCustomizationPage;
