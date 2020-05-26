'use strict';
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.INTEGER
    }, {});
    user.associate = function(models) {
        user.hasMany(models.todolists)
            // associations can be defined here
    };
    return user;
};