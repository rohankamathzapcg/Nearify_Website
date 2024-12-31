const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const UserSchema = sequelize.define(
  "Users",
  {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  { timestamps: true }
);

module.exports = UserSchema;
