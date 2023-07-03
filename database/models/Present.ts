import { BOOLEAN } from "sequelize";
import { Sequelize, Model, INTEGER, STRING } from "sequelize";
import * as config from "../config/database";

const sequelize = new Sequelize(config);

class Presents extends Model {
  id!: number;
  present!: string;
  name!: string;
  phone_number!: number;
  acepted!: boolean;

}

Presents.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    present: {
      type: STRING(30),
      allowNull: false,
    },
    name: {
      type: STRING(100),
      allowNull: false,
    },
    phone_number: {
      type: STRING(100),
      allowNull: false,
    },
    acepted: {
      type: BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    modelName: "presents",
    timestamps: false,
  }
);

export default Presents;
