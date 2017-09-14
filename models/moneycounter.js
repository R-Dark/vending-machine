'use strict';
module.exports = function(sequelize, DataTypes) {
  var moneycounter = sequelize.define('moneycounter', {
    moneycount: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return moneycounter;
};