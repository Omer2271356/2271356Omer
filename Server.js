const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const productRoutes = require('./src/routes/product.routes');
const db = require('./src/model/index');
const path = require('path')


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads',express.static(path.join(__dirname,'src/uploads')))

db.sequelize.sync({ force: true }).then(() => {
  console.log("Database & tables created!");
  app.listen(8081, () => {
    console.log('Server is listening on port 8081');
  });
}).catch(error => {
  console.error('Error syncing database:', error);
});

app.use('/products', productRoutes);
