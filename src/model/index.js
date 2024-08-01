const Sequelize = require('sequelize');

// Directly configure Sequelize
const sequelize = new Sequelize('product', 'root', 'root', {
  host: '127.0.0.1',
  dialect: 'mysql', // or 'postgres', 'sqlite', etc.
});

// Initialize the `Product` model
const Product = sequelize.define('Product', {
  farmerName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  productName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  images: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: true 
});

const db = {
  Sequelize,
  sequelize,
  Product
};

module.exports = db;
