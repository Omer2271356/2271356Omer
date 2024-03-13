// Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header>
      <img className="logo" src="CropShop.png" alt="Logo" />
      <h1>CropShop</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">My Wishlist</a></li>
          <li><a href="#">Basket</a></li>
          <li><a href="#">Special Offers</a></li>
          <li><a href="#">Valentine's Day</a></li>
          <li><a href="#">Delivery Saver</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
