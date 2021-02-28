const express = require('express'); 
const bodyParser = require('body-parser'); 
const notes = require('./src/routes/note.routes.js')
const cors = require('cors'); require('dotenv').config(); 
// Constants
const port = process.env.SERVICE_PORT || 3002
const app = express()
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(notes)


app.get('/', (req, res) => {
    res.send('Hello World from Notes');
});
app.listen(port, () => {
  console.log(`Notes running on port : ${port}`);
})


