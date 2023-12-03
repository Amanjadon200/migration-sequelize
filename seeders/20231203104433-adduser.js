"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    console.log("hi aman.....................")
    queryInterface.bulkInsert("Users", [
      {
        firstName: "abcd",
        lastName: "Doe",
        email: "johnDoe123@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
