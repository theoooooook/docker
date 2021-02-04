const express = require('express'); 
const bodyParser = require('body-parser'); 
const notes = require('./src/routes/note.routes.js')
const cors = require('cors'); require('dotenv').config(); 
// Constants
const app = express()
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(notes)


app.get('/', (req, res) => {
    res.send('Hello World from Notes');
});
app.listen(process.env.SERVICE_PORT, () => {
  console.log(`Notes running on port : ${process.env.SERVICE_PORT}`);
})

