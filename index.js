const express = require('express')
const bodyParser = require('body-parser');
const users = require('./services/users/src/routes/user.routes.js')
const products = require('./services/products/src/routes/product.routes.js')
const baskets = require('./services/baskets/src/routes/basket.routes.js')
const notes = require('./services/notes/src/routes/note.routes.js')
const comments = require('./services/comments/src/routes/comment.routes.js')
const authentifications = require('./services/authentifications/src/routes/authentification.routes.js')

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