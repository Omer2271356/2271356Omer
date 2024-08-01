import React, { useState } from 'react';
import './index.css'; // Import your CSS file

const Product = ({ id, imageSrc, altText, productName, farmerName, price, description, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change) => {
    if ((change === -1 && quantity > 1) || (change === 1 && quantity < 5)) {
      setQuantity(quantity + change);
    }
  };

  return (
    <div className="" >
    <div className="product">
      <img src={`http://localhost:8081/uploads/${imageSrc}`} alt={altText}  style={
        {
        width:"300px",
        height:"100px"
      }
      }/>
      <h2>{productName}</h2>
      <p className="farmer">Farmer: {farmerName}</p>
      <p>Price: ${price.toFixed(2)}</p>
      <p>Description: {description}</p>
      <div className="quantity">
        <button onClick={() => handleQuantityChange(-1)}>-</button>
        <input type="number" value={quantity} min="1" max="5" onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 1)} />
        <button onClick={() => handleQuantityChange(1)}>+</button>
      </div>
      <button onClick={() => addToCart(productName, quantity, price)}>Add to Cart</button>
    </div></div>
  );
};

export default Product;
