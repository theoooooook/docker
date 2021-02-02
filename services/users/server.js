const express = require('express'); 
const bodyParser = require('body-parser'); 
const cors = require('cors'); require('dotenv').config(); 
const port = process.env.SERVER_PORT || 4000; 
const routes = require('./src/routes/user.routes.js'); 
const app = express(); 
app.use(bodyParser.json({limit: '50mb'})); 
// Constants
const PORT = 3000;
const HOST = '0.0.0.0';
app.use(bodyParser.urlencoded({limit: '50mb', extended: true })); 
app.get('/', (req, res) => {
    res.send('Hello World');
  });
  app.listen(PORT, HOST);
  console.log(`Running on http://${HOST}:${PORT}`);
