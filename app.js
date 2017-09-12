const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mustache = require("mustache-express")
const models = require('./models')
app.engine('mustache', mustache())
app.set('view engine', 'mustache')
app.use( express.static('public'))
app.use(bodyParser.json())

app.get("/api/customer/items", function (req, res){
  models.vendingItem.findAll()
  .then(function(items){
    res.json(items)
  })
})


app.post("/api/customer/items", function(req, res) {
  const newVending = models.vendingItem.build({
    name: req.body.name,
    cost: req.body.cost,
    quantity: req.body.quantity,
    desc: req.body.desc
  })
  newVending.save()
  .then(function(newItem){
    res.json({success: true})
  })
})

app.listen(3000, function(req, res){
  console.log("Robots are listening!");
})
