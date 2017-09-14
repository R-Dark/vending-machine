'use strict';
module.exports = function(sequelize, DataTypes) {
  var log = sequelize.define('log', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return log;
};