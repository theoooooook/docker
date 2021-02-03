const express = require('express'); 
const bodyParser = require('body-parser'); 
const users = require('./src/routes/user.routes.js')
const cors = require('cors'); require('dotenv').config(); 
// Constants
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(users)
app.use(bodyParser.urlencoded({limit: '50mb', extended: true })); 


app.get('/', (req, res) => {
    res.send('Hello World from Users');
});
app.listen(process.env.SERVICE_PORT, () => {
  console.log(`Users running on port : ${process.env.SERVICE_PORT}`);
})

