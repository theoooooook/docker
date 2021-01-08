const express = require('express')
const bodyParser = require('body-parser');
const parkings = require('./app/routes/parking.routes.js')
const users = require('./app/routes/user.routes.js')
const products = require('./app/routes/product.routes.js')
const baskets = require('./app/routes/basket.routes.js')
const notes = require('./app/routes/note.routes.js')
const comments = require('./app/routes/comment.routes.js')
const authentifications = require('./app/routes/authentification.routes.js')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(parkings)
app.use(users)
app.use(products)
app.use(baskets)
app.use(notes)
app.use(comments)
app.use(authentifications)

app.get("/", (req, res) => {
    res.json({ message: "Welcome to application." });
  });
app.listen(8080, () => {
    console.log("Serveur à l'écoute")
})