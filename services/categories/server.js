const express = require('express'); 
const bodyParser = require('body-parser'); 
const categories = require('./src/routes/category.routes.js')
const cors = require('cors'); require('dotenv').config(); 
// Constants
const port = process.env.SERVICE_PORT || 3004
const app = express()
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(categories)


app.get('/', (req, res) => {
    res.send('Hello World from Categories');
});
app.listen(port, () => {
  console.log(`Categories running on port : ${port}`);
})


