const express = require('express');
const mysql = require('mysql')
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'crud'
})

app.get('/', (re, res)=> {
  return res.json("From BAckend Side");
})

app.get('/Product', (req, res) => {
  const sql = "SELECT * FROM product";
  db.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
  });
});

app.listen(8081, () => {
  console.log("Server is listening on port 8081");
});