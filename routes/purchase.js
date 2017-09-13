const express = require("express")
const router = express.Router()
const models = require("../models")

router.post("/api/customer/items/:itemId/purchases", function(req, res) {
  models.vendingItems
    .find({
      where: {
        id: req.params.itemId
      }
    })
    .then(function(purchase) {
      item.quantity -= (1).item.save().then(function(purchase) {
        res.json({ purchase: purchase })
      })
    })
    .catch(function(error) {
      res.status(404).json({ errorMessage: "ERROR" })
    })
})

module.exports = router
