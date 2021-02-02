const express = require('express')
const bodyParser = require('body-parser');
const users = require('./app/services/users/user.routes.js')
const products = require('./app/services/products/product.routes.js')
const baskets = require('./app/services/baskets/basket.routes.js')
const notes = require('./app/services/notes/note.routes.js')
const comments = require('./app/services/comments/comment.routes.js')
const authentifications = require('./app/services/authentifications/authentification.routes.js')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
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