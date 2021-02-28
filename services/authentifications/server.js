const express = require('express'); 
const bodyParser = require('body-parser'); 
const authentifications = require('./src/routes/authentification.routes.js')
const cors = require('cors'); require('dotenv').config(); 
// Constants
const port = process.env.SERVICE_PORT || 3006
const app = express()
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(authentifications)


app.get('/', (req, res) => {
    res.send('Hello World from Authentifications');
});
app.listen(port, () => {
  console.log(`Authentifications running on port : ${port}`);
})


