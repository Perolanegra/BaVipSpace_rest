const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DB_URL, { dialect: "postgres" });

try {
  await sequelize.authenticate();
  console.log("Conectado ao PostgreSQL.");
} catch (error) {
  console.error("Erro de Conexão:", error);
}

module.exports = sequelize;
