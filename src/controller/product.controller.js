const db = require('../model');
const Product = db.Product;
const multer = require('multer')
const fs = require('fs')
const path = require('path')

// const { promisify } = require('util')




const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir); // Path to the uploads directory
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Preserve the original filename
  }
});

const upload = multer({ storage: storage });

// Middleware function for file upload
exports.uploadProductImage = upload.single('images');

// Route handler for creating a product
exports.createProduct = async (req, res) => {
  try {
    const { productName, farmerName, price, quantity,description} = req.body;
    console.log(req.body);
    console.log(req.file?.filename);

    const product = await Product.create({
      farmerName,
      productName,
      price,
      quantity,
      description,
      images: req.file?.filename // Store the filename of the uploaded image
    });

    res.status(201).json(product);
  } catch (error) {
    console.error(error); // Use console.error for errors
    res.status(500).json({ message: 'Error creating product', error: error.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching product', error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { name, price, quantity } = req.body;
    const [updated] = await Product.update({ name, price, quantity }, { where: { id: req.params.id } });
    if (updated) {
      const updatedProduct = await Product.findByPk(req.params.id);
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating product', error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting product', error: error.message });
  }
};
