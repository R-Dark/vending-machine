const express = require("express")
const router = express.Router()
const models = require("../models")

router.get("/api/vendor/money/count", function(req, res){
  models.moneycounter.findAll().then(function(moneycounter){
    res.json(moneycounter)
  })
})

router.get("/api/vendor/money", function(req, res) {
  models.money.findAll().then(function(money) {
    res.json(money)
  })
})

router.post("/api/vendor/money", function(req, res) {
  const newMoney = models.money.build({
    totalmoney: req.body.totalmoney
  })
  newMoney.save().then(function(money) {
    res.json({ success: true })
  })
})

router.put('/api/vendor/money/:itemId', function (req, res) {
  models.money.find({
    where: {
      id: req.params.itemId
    }
  })
  .then(function (money) {
    money.totalmoney = req.body.totalmoney
    money.save()
    .then(function (money) {
      res.json({money: money})
    })
  })
  .catch(function (error) {
    res.status(404).json({errorMessage: 'Item not found'})
  })
})

module.exports = router
