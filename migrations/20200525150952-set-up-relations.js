module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.addColumn("todolists", "userId", {
            type: Sequelize.INTEGER,
            references: {
                model: "users",
                key: "id",
            },
            onUpdate: "CASCADE",
            onDelete: "SET NULL",
        });
        await queryInterface.addColumn("todoItems", "todolistId", {
            type: Sequelize.INTEGER,
            references: {
                model: "todolists",
                key: "id"
            },
            onUpdate: "CASCADE",
            onDelete: "SET NULL"
        });

        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.createTable('users', { id: Sequelize.INTEGER });
        */
    },

    down: async(queryInterface, Sequelize) => {

        await queryInterface.removeColumn("todolists", "userId");
        await queryInterface.removeColumn("todoItems", "todolistId");

    },


};