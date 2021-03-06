'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "users", [{
                    name: "Leo Messi",
                    email: "leo@messi.com",
                    phone: 1234567,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Dan Abramov",
                    email: "dan@redux.com",
                    phone: 1234567,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ], {}
        );
    },


    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */


    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("users", null, {});
        /*
        
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('People', null, {});
        */
    }
};