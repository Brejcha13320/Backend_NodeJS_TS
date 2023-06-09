import { DataTypes } from "sequelize";
import db from "../database/connection";

const User = db.define("User", {
  name: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.BOOLEAN,
  },
});

export default User;
