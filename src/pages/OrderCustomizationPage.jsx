import React from 'react';
import './OrderCustomizationPage.css'

const OrderCustomizationPage = () => {
  return (
    <div className="order-customization-page">
      <h2>Customize Your Order</h2>
      <div className="order-item">
        <img src="path-to-image.jpg" alt="Dish" />
        <h3>Dish Name</h3>
        <p>Description of the dish goes here.</p>
      </div>
      <div className="customization-options">
        <div className="customization-option">
          <label htmlFor="size">Choose Size:</label>
          <select id="size">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <div className="customization-option">
          <label htmlFor="quantity">Quantity:</label>
          <input id="quantity" type="number" min="1" defaultValue="1" />
        </div>
        <div className="customization-option">
          <label>Add-ons:</label>
          <div>
            <input type="checkbox" id="cheese" />
            <label htmlFor="cheese">Extra Cheese</label>
            <br />
            <input type="checkbox" id="spicy" />
            <label htmlFor="spicy">Make it Spicy</label>
          </div>
        </div>
      </div>
      <div className="add-to-cart">
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default OrderCustomizationPage;
