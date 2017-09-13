const express = require("express")
const router = express.Router()
const models = require("../models")

router.put('/api/vendor/items/:itemId', function (req, res) {
  models.vendingItem.find({
    where: {
      id: req.params.itemId
    }
  })
  .then(function (item) {
    item.name = req.body.name
    item.cost = req.body.cost
    item.quantity = req.body.quantity
    item.desc = req.body.desc
    item.save()
    .then(function (item) {
      res.json({item: item})
    })
  })
  .catch(function (error) {
    res.status(404).json({errorMessage: 'Item not found'})
  })
})

module.exports = router
