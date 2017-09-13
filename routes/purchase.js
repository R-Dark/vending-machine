const express = require("express")
const router = express.Router()
const models = require("../models")

router.post("/api/customer/items/:itemId/purchases", function(req, res) {
      let purchaseMoney = req.body.moneyGiven
      models.vendingItem
        .find({
          where: {
            id: req.params.itemId
          }
        })
        .then(function(item) {
            let change = purchaseMoney - item.cost
            item.quantity -= (1).item.save().then(function(item) {
                models.money.find().then(function(money) {
                  if (change > 0) {
                    money.totalmoney += item.cost
                  }
                })
                money.save()
                  .then(function(money) {
                    res.json({
                      item: item })
                    })
                  })
              })
              .catch(function(error) {
                res.status(404).json({
                  errorMessage: "ERROR" })
                })
              })

            module.exports = router
