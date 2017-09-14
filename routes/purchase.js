const express = require("express")
const router = express.Router()
const models = require("../models")

router.get("/api/vendor/purchases", function(req, res){
  models.log.findAll().then(function(purchases){
    res.json(purchases)
  })
})


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
      item.quantity -= (1)
      item.save().then(function() {
        models.money.findAll().then(function(money) {
          const moneyRecord = money[0]
          if (change >= 0) {
            moneyRecord.totalmoney += item.cost
          }
          moneyRecord.save()
          .then(function(){
            let moneyCounter = models.moneycounter.build({
              moneycount : moneyRecord.totalmoney
            })
            moneyCounter.save()
          })
          .then(function(){
            let newLog = models.log.build({
              name: item.name
            })
            newLog.save()
          })
            .then(function(money) {
              res.json({
                money: money
              })
            })
        })
      })
    })
    .catch(function(error) {
      console.log(error);
      res.status(404).json({
        errorMessage: "ERROR"
      })
    })
})


module.exports = router
