const express = require('express'); 
const bodyParser = require('body-parser'); 
const baskets = require('./src/routes/product.routes.js')
const cors = require('cors'); require('dotenv').config(); 
// Constants
const port = process.env.SERVICE_PORT || 3005
const app = express()
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(baskets)


app.get('/', (req, res) => {
    res.send('Hello World from Baskets');
});
app.listen(port, () => {
  console.log(`Baskets running on port : ${port}`);
})


