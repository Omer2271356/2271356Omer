const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Serve the React app
app.use(express.static('build'));

// API endpoint for adding a product to the cart
app.post('/api/add-to-cart', (req, res) => {
  const { productName, quantity } = req.body;

  // Implement your addToCart logic here
  console.log(`${quantity} ${productName}(s) added to the cart.`);

  res.status(200).json({ message: 'Product added to cart' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));