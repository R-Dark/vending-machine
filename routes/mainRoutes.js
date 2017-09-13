const express = require("express")
const router = express.Router()
const models = require("../models")

router.get("/api/customer/items", function(req, res) {
  models.vendingItem.findAll()
    .then(function(items) {
      res.json(items)
    })
})


router.post("/api/customer/items", function(req, res) {
  const newVending = models.vendingItem.build({
    name: req.body.name,
    cost: req.body.cost,
    quantity: req.body.quantity,
    desc: req.body.desc
  })
  newVending.save()
    .then(function(newItem) {
      res.json({
        success: true
      })
    })
})






module.exports = router
