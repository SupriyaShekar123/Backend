'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return await queryInterface.bulkInsert(
            "todolists", [{
                    name: "George's Work list",
                    userId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "George's Personal list",
                    userId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Leo's futbol list",
                    userId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ], {}
        );


    },

    down: async(queryInterface, Sequelize) => {
        return await queryInterface.bulkDelete("todolists", null, {});
    }
};