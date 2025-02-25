"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          username: "octocat",
          name: "The Octocat",
          repoCount: 8,
          location: "San Francisco",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "torvalds",
          name: "Linus Torvalds",
          repoCount: 25,
          location: "Portland",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "gaearon",
          name: "Dan Abramov",
          repoCount: 50,
          location: "London",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "addyosmani",
          name: "Addy Osmani",
          repoCount: 42,
          location: "Mountain View",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "tj",
          name: "TJ Holowaychuk",
          repoCount: 150,
          location: "Victoria",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("users", null, {});
  },
};
