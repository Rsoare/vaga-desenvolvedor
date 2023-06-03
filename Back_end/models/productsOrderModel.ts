const Sequelize = require("sequelize");
import sequelize from "../src/data_source";

const Order = sequelize.define("product_orders", {
   id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
   },
   request_code: {
      type: Sequelize.INTEGER,
   },
   request_date: {
      type: Sequelize.DATE,
   },
   request_status: {
      type: Sequelize.STRING(20),
      defaultValue: "Em Aberto",
   },
   createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
   },
   updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
   },
   client_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
         model: "clients",
         key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
   },
});

export default Order