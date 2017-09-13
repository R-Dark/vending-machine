const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mustache = require("mustache-express")
const models = require('./models')
app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.use( express.static('public'))
app.use(bodyParser.json())

const mainRoutes = require("./routes/mainRoutes")
app.use(mainRoutes)

const update = require("./routes/update")
app.use(update)

const purchase = require("./routes/purchase")
app.use(purchase)

const money = require("./routes/money")
app.use(money)

app.listen(3000, function(req, res){
  console.log("Robots are listening!");
})
