const express = require('express'); 
const bodyParser = require('body-parser'); 
const products = require('./src/routes/product.routes.js')
const cors = require('cors'); require('dotenv').config(); 
// Constants
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(products)
app.use(bodyParser.urlencoded({limit: '50mb', extended: true })); 


app.get('/', (req, res) => {
    res.send('Hello World from Products');
});
app.listen(process.env.SERVICE_PORT, () => {
  console.log(`Products running on port : ${process.env.SERVICE_PORT}`);
})

