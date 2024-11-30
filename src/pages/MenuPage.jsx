import React, { useState } from 'react';
import './MenuPage.css';

const menuData = [
  {
    category: "Italian",
    items: [
      { id: 1, name: "Margherita Pizza", price: "₹250", quality: "Freshly baked", specialty: "Classic Italian flavor with fresh basil.", image: "/image/Pizza_Margherita.jpg" },
      { id: 2, name: "Pasta Alfredo", price: "₹450", quality: "Creamy and rich", specialty: "Perfect blend of Parmesan and cream.", image: "/image/Alfredo-Pasta.jpg" },
      { id: 3, name: "Lasagna", price: "₹400", quality: "Layered delight", specialty: "Made with fresh ricotta and mozzarella.", image: "/image/Lasagna.jpg" },
      { id: 4, name: "Bruschetta", price: "₹370", quality: "Crispy bread", specialty: "Topped with tomatoes and olive oil.", image: "/image/bruschetta.jpg" },
      { id: 5, name: "Tiramisu", price: "₹120", quality: "Authentic", specialty: "Classic coffee-flavored dessert.", image: "/image/Tiramisu.jpg" }
    ]
  },
  {
    category: "Indian",
    items: [
      { id: 6, name: "Butter Chicken", price: "₹300", quality: "Rich and creamy", specialty: "Made with fresh cream and spices.", image: "/image/butter-chicken.jpg" },
      { id: 7, name: "Paneer Tikka", price: "₹220", quality: "Grilled perfection", specialty: "Marinated paneer cubes.", image: "/image/paneer-tikka.jpg" },
      { id: 8, name: "Biryani", price: "₹180", quality: "Flavorsome", specialty: "Fragrant basmati rice with spices.", image: "/image/biriyani.jpg" },
      { id: 9, name: "Naan", price: "₹100", quality: "Soft and fluffy", specialty: "Cooked in a clay oven.", image: "/image/garlic-naan.jpg" },
      { id: 10, name: "Gulab Jamun", price: "₹25", quality: "Sweet and juicy", specialty: "Made with khoya and syrup.", image: "/image/Gulab-Jamun.jpg" }
    ]
  },
  {
    category: "Chinese",
    items: [
      { id: 11, name: "Spring Rolls", price: "₹80", quality: "Crispy", specialty: "Stuffed with fresh vegetables.", image: "/image/spring-rolls.jpg" },
      { id: 12, name: "Fried Rice", price: "₹110", quality: "Wok-fried", specialty: "Tossed with soy sauce and veggies.", image: "/image/fried-rice.jpg" },
      { id: 13, name: "Manchurian", price: "₹100", quality: "Spicy and tangy", specialty: "Mixed vegetable dumplings in sauce.", image: "/image/machurian.jpg" },
      { id: 14, name: "Kung Pao Chicken", price: "₹150", quality: "Spicy", specialty: "Stir-fried with peanuts and veggies.", image: "/image/kung-pao-chicken.jpg" },
      { id: 15, name: "Sweet and Sour Chicken", price: "₹170", quality: "Tangy delight", specialty: "Made with pineapple and bell peppers.", image: "/image/sweet and sour.jpg" }
    ]
  },
  {
    category: "Continental",
    items: [
      { id: 16, name: "Grilled Chicken", price: "₹160", quality: "Juicy and tender", specialty: "Seasoned with herbs and spices.", image: "/image/grilledchicken.jpg" },
      { id: 17, name: "Caesar Salad", price: "₹120", quality: "Fresh and crunchy", specialty: "Classic dressing and croutons.", image: "/image/caesar_salad.jpg" },
      { id: 18, name: "Panner Steak", price: "₹130", quality: "Premium cut", specialty: "Cooked to perfection.", image: "/image/panner-sreak.jpg" },
      { id: 19, name: "Mashed Potatoes", price: "₹40", quality: "Creamy", specialty: "Served with herb butter.", image: "/image/mashed potatoes.jpg" },
      { id: 20, name: "Brownie Sundae", price: "₹90", quality: "Decadent dessert", specialty: "Warm brownie with ice cream.", image: "/image/brownie-sundae.jpg" }
    ]
  }
];

const MenuPage = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [cart, setCart] = useState([]);

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} has been added to the cart!`);
  };

  const removeItemFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    const total = cart
      .reduce((total, item) => total + parseFloat(item.price.replace('₹', '').trim()), 0)
      .toFixed(2);
    return `₹${total}`;
  };
  

  return (
    <div className="menu-page">
      <header className="menu-header">
        <h1>Explore Our Menu</h1>
        <h3 className="intro-paragraph">
          Enjoy a variety of delicious dishes made just for you! From tasty Indian curries to cheesy Italian pastas, we have something for everyone. Each dish is made with fresh, quality ingredients to give you the best flavors.
        </h3>
        <h4 className="sub-paragraph">Select a category to see the delicious items we offer!</h4>
      </header>

      <div className="menu-categories">
        {menuData.map((category) => (
          <div key={category.category} className="menu-category">
            <h2
              onClick={() => toggleCategory(category.category)}
              className="category-title"
            >
              {category.category}
            </h2>

            {expandedCategory === category.category && (
              <div className="menu-items">
                {category.items.map((item) => (
                  <div key={item.id} className="menu-item">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="menu-image"
                    />
                    <h3>{item.name}</h3>
                    <p><strong>Price:</strong> {item.price}</p>
                    <p><strong>Quality:</strong> {item.quality}</p>
                    <p><strong>Specialty:</strong> {item.specialty}</p>
                    <button
                      className="add-to-cart-btn"
                      onClick={() => addToCart(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="shopping-cart">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.price}</p>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeItemFromCart(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="cart-total">
              <h3>Total Amount: {calculateTotal()}</h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MenuPage;


