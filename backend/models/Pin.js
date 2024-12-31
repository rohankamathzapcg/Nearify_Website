const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const PinSchema = sequelize.define(
  "Pin",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3],
      },
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3],
      },
    },
    rating: {
      type: DataTypes.NUMBER,
      allowNull: false,
      validate: {
        min: 0,
        max: 5,
      },
    },
    lat: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    long: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  { timestamps: true }
);

module.exports = PinSchema;
