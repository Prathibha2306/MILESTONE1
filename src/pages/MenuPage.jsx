import React from 'react';
import './MenuPage.css'

const menuItems = [
  { id: 1, name: 'Pizza', description: 'Delicious cheesy pizza', price: '$10', image: 'pizza.jpg' },
  { id: 2, name: 'Burger', description: 'Juicy grilled burger', price: '$8', image: 'burger.jpg' },
  { id: 3, name: 'Pasta', description: 'Creamy pasta with herbs', price: '$12', image: 'pasta.jpg' },
];

function MenuPage() {
  return (
    <div className="menu-page">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map(item => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
