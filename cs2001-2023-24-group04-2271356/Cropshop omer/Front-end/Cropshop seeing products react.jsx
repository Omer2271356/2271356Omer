
import React, { useState } from 'react';

const CropShop = () => {
    const [cartMessages, setCartMessages] = useState([]);

    // Function to handle quantity button clicks
    const handleQuantityButtonClick = (event) => {
        const targetInput = event.target.parentNode.querySelector('input');
        const currentValue = parseInt(targetInput.value);

        if (event.target.textContent === '+' && currentValue < 5) {
            targetInput.value = currentValue + 1;
        } else if (event.target.textContent === '-' && currentValue > 1) {
            targetInput.value = currentValue - 1;
        }
    };

    // Function to handle "Add to Cart" button click
    const addToCart = (event) => {
        const product = event.target.parentNode;
        const productName = product.querySelector('h2').textContent;
        const quantity = parseInt(product.querySelector('.quantity input').value);

        // Display a message below the button
        const newCartMessage = `${quantity} ${productName}(s) added to the cart.`;
        setCartMessages([...cartMessages, newCartMessage]);

        // Optional: Remove the message after a few seconds (e.g., 3 seconds)
        setTimeout(() => {
            setCartMessages(cartMessages.filter(message => message !== newCartMessage));
        }, 3000);
    };

    return (
        <div>
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

            <section>
                {/* Farmer 1 Product */}
                <div className="product">
                    <img src='Tomato.jpeg' alt="Tomato Image" />
                    <h2>Organic Tomatoes</h2>
                    <p className="farmer">Farmer: John Doe</p>
                    <p>Price: $2.99 per pound</p>
                    <p>Description: Locally grown, pesticide-free tomatoes.</p>
                    <div className="quantity">
                        <button onClick={handleQuantityButtonClick}>-</button>
                        <input type="number" value="1" min="1" max="5" />
                        <button onClick={handleQuantityButtonClick}>+</button>
                    </div>
                    <button onClick={addToCart}>Add to Cart</button>
                </div>

                {/* Farmer 2 Product */}
                <div className="product">
                    <img src='egg.jpeg' alt="Eggs Image" />
                    <h2>Free-range Eggs</h2>
                    <p className="farmer">Farmer: Jane Smith</p>
                    <p>Price: $4.50 per dozen</p>
                    <p>Description: Fresh eggs from pasture-raised chickens.</p>
                    <div className="quantity">
                        <button onClick={handleQuantityButtonClick}>-</button>
                        <input type="number" value="1" min="1" max="5" />
                        <button onClick={handleQuantityButtonClick}>+</button>
                    </div>
                    <button onClick={addToCart}>Add to Cart</button>
                </div>

                 <!-- Farmer 3 Product -->
        <div class="product">
            <img src='carrot.jpeg' alt="Carrot Image"> <!-- Add the image source and alt text for the carrot -->
            <h2>Organic Carrots</h2>
            <p class="farmer">Farmer: Mike Johnson</p>
            <p>Price: $1.99 per pound</p>
            <p>Description: Locally grown, pesticide-free carrots.</p>
            <div class="quantity">
                <button>-</button>
                <input type="number" value="1" min="1" max="5"> <!-- Number input for quantity -->
                <button>+</button>
            </div>
            <button>Add to Cart</button>
        </div>

        <!-- Farmer 4 Product -->
    <div class="product">
    <img src='apple.jpeg' alt="Apple Image"> <!-- Add the image source and alt text for the apple -->
    <h2>Organic Apples</h2>
    <p class="farmer">Farmer: Sarah Brown</p>
    <p>Price: $3.50 per pound</p>
    <p>Description: Locally grown, pesticide-free apples.</p>
    <div class="quantity">
        <button>-</button>
        <input type="number" value="1" min="1" max="5"> <!-- Number input for quantity -->
        <button>+</button>
    </div>
    <button>Add to Cart</button>
  </div>

<!-- Farmer 5 Product -->
<div class="product">
    <img src='lettuce.jpg' alt="Lettuce Image"> <!-- Add the image source and alt text for the lettuce -->
    <h2>Organic Lettuce</h2>
    <p class="farmer">Farmer: Tom White</p>
    <p>Price: $1.50 per pound</p>
    <p>Description: Locally grown, pesticide-free lettuce.</p>
    <div class="quantity">
        <button>-</button>
        <input type="number" value="1" min="1" max="5"> <!-- Number input for quantity -->
        <button>+</button>
    </div>
    <button>Add to Cart</button>
</div>

<!-- Farmer 6 Product -->
<div class="product">
    <img src='Potato.jpg' alt="Potato Image"> <!-- Add the image source and alt text for the potato -->
    <h2>Organic Potatoes</h2>
    <p class="farmer">Farmer: Lisa Green</p>
    <p>Price: $1.25 per pound</p>
    <p>Description: Locally grown, pesticide-free potatoes.</p>
    <div class="quantity">
        <button>-</button>
        <input type="number" value="1" min="1" max="5"> <!-- Number input for quantity -->
        <button>+</button>
    </div>
    <button>Add to Cart</button>
</div>

<!-- Farmer 7 Product -->
<div class="product">
    <img src='Onion.jpeg' alt="Onion Image"> <!-- Add the image source and alt text for the onion -->
    <h2>Organic Onions</h2>
    <p class="farmer">Farmer: John Doe</p>
    <p>Price: $1.75 per pound</p>
    <p>Description: Locally grown, pesticide-free onions.</p>
    <div class="quantity">
        <button>-</button>
        <input type="number" value="1" min="1" max="5"> <!-- Number input for quantity -->
        <button>+</button>
    </div>
    <button>Add to Cart</button>
</div>

<!-- Farmer 8 Product -->
<div class="product">
    <img src='Cabbage.jpeg' alt="Cabbage Image"> <!-- Add the image source and alt text for the cabbage -->
    <h2>Organic Cabbage</h2>
    <p class="farmer">Farmer: Jane Smith</p>
    <p>Price: $2.50 per pound</p>
    <p>Description: Locally grown, pesticide-free cabbage.</p>
    <div class="quantity">
        <button>-</button>
        <input type="number" value="1" min="1" max="5"> <!-- Number input for quantity -->
        <button>+</button>
    </div>
    <button>Add to Cart</button>
</div>

<!-- Farmer 9 Product -->
<div class="product">
    <img src='Broccoli.jpeg' alt="Broccoli Image"> <!-- Add the image source and alt text for the broccoli -->
    <h2>Organic Broccoli</h2>
    <p class="farmer">Farmer: Mike Johnson</p>
    <p>Price: $2.25 per pound</p>
    <p>Description: Locally grown, pesticide-free broccoli.</p>
    <div class="quantity">
        <button>-</button>
        <input type="number" value="1" min="1" max="5"> <!-- Number input for quantity -->
        <button>+</button>
    </div>
    <button>Add to Cart</button>
</div>

      {/* Add more product components as needed */}
        
                {/* Display cart messages */}
                {cartMessages.map((message, index) => (
                    <p key={index} className="addToCartMessage">{message}</p>
                ))}
            </section>
        </div>
    );
};

export default CropShop;

