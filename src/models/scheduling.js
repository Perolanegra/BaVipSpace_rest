const Sequelize = require("sequelize");
const database = require("../../db");

const scheduling = database.define("Scheduling", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
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
  description: Sequelize.STRING,
  instructor_id: { // this will store the id
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

module.exports = scheduling;
