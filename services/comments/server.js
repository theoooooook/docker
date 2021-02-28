const express = require('express'); 
const bodyParser = require('body-parser'); 
const comments = require('./src/routes/comment.routes.js')
const cors = require('cors'); require('dotenv').config(); 
// Constants
const port = process.env.SERVICE_PORT || 3003
const app = express()
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(comments)


app.get('/', (req, res) => {
    res.send('Hello World from Comments');
});
app.listen(port, () => {
  console.log(`Comments running on port : ${port}`);
})


