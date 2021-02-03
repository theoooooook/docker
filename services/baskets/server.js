const express = require('express'); 
const bodyParser = require('body-parser'); 
const baskets = require('./src/routes/basket.routes.js')
const cors = require('cors'); require('dotenv').config(); 
// Constants
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(baskets)
app.use(bodyParser.urlencoded({limit: '50mb', extended: true })); 


app.get('/', (req, res) => {
    res.send('Hello World from Baskets');
});
app.listen(process.env.SERVICE_PORT, () => {
  console.log(`Baskets running on port : ${process.env.SERVICE_PORT}`);
})

