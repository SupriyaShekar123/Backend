'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.addColumn(
            "todoItems",
            "important", { type: Sequelize.BOOLEAN }, {}
        );
    },
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */


    down: async(queryInterface, Sequelize) => {
        await queryInterface.removeColumn("todoItems", "important", {});
    },
};