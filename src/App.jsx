import React, { useState, useEffect } from 'react';
import Product from './Product'; 
import './index.css'; 

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartMessage, setCartMessage] = useState('');

  useEffect(() => {
    // Fetch data from your backend to populate the products array
    fetch('http://localhost:8081/products') // Replace with your actual API endpoint for getting products
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const addToCart = (productName, quantity, price) => {
    // Here you can implement the logic to add the product to the cart
    setCartMessage(`Product "${productName}" added to cart with quantity ${quantity}.`);
  };

  return (
    <div>
      <header>
        <h1>Product List</h1>
      </header>
      <main>
        {products.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          <div className="product-list" style={{display:"grid", gap:"10px", gridTemplateColumns:"repeat(4, minmax(0, 1fr))"}}>
            {products.map(product => (
              <Product
                key={product.id}
                id={product.id}
                imageSrc={product.images}
                altText={product.altText}
                productName={product.productName}
                farmerName={product.farmerName}
                price={product.price}
                description={product.description}
                addToCart={addToCart}
              />
            ))}
          </div>
        )}
      </main>
      {cartMessage && <p className="cart-message">{cartMessage}</p>}
    </div>
  );
};

export default App;
