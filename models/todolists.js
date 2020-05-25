'use strict';
module.exports = (sequelize, DataTypes) => {
  const todolists = sequelize.define('todolists', {
    name: DataTypes.STRING
  }, {});
  todolists.associate = function(models) {
    // associations can be defined here
  };
  return todolists;
};