import React, { useState, useEffect } from 'react';
import Header from './Header.jsx'; // Import the Header component if it's in a separate file
import './index.css'; // Make sure to import your CSS file

const Product = ({ id, imageSrc, altText, productName, farmerName, price, description, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change) => {
    if ((change === -1 && quantity > 1) || (change === 1 && quantity < 5)) {
      setQuantity(quantity + change);
    }
  };

  return (
    <div className="product">
      <img src={imageSrc} alt={altText} />
      <h2>{productName}</h2>
      <p className="farmer">Farmer: {farmerName}</p>
      <p>Price: {price}</p>
      <p>Description: {description}</p>
      <div className="quantity">
        <button onClick={() => handleQuantityChange(-1)}>-</button>
        <input type="number" value={quantity} min="1" max="5" onChange={(e) => setQuantity(parseInt(e.target.value) || 1)} />
        <button onClick={() => handleQuantityChange(1)}>+</button>
      </div>
      <button onClick={() => addToCart(productName, quantity, price)}>Add to Cart</button>
    </div>
  );
};

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartMessage, setCartMessage] = useState('');

  useEffect(() => {
    // Fetch data from your backend to populate the products array
    fetch('http://localhost:8081/Product') // Replace with your actual API endpoint for getting products
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const addToCart = (productName, quantity, price) => {
    // Here you can implement the logic to add the product to the cart
    setCartMessage(`Product "${productName}" added to cart`);
  };

  return (
    <div>
      <Header />

      <section>
        {products.map(product => (
          <Product
          key={product.id}
          id={product.id}
          farmerName={product.farmerName} // Corrected prop name
          productName={product.productName}
          imageSrc={product.imageSrc} // Corrected prop name
          price={product.price}
          description={product.description}
          addToCart={addToCart}
          
        />
        ))}
         {cartMessage && <p style={{ color: 'white' }}>{cartMessage}</p>}
      </section>

    </div>
  );
};

export default App;
