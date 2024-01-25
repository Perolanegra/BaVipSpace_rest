"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Schedulings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.ENUM([
          "DEPILACAO",
          "CORTE_CABELO",
          "CORTE_BARBA",
          "CORTE_COMPLETO",
        ]),
        allowNull: false,
      },
      appointment_time: {
        type: Sequelize.DATE,
      },
      description: {
        type: Sequelize.STRING,
      },
      instructor_id: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Schedulings");
  },
};
