const express = require('express'); 
const bodyParser = require('body-parser'); 
const products = require('./src/routes/product.routes.js')
const cors = require('cors'); require('dotenv').config(); 
// Constants
const port = process.env.SERVICE_PORT || 3001
const app = express()
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(products)


app.get('/', (req, res) => {
    res.send('Hello World from Products');
});
app.listen(port, () => {
  console.log(`Products running on port : ${port}`);
})


