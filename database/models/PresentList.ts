import { BOOLEAN } from "sequelize";
import { Sequelize, Model, INTEGER, STRING } from "sequelize";
import * as config from "../config/database";

const sequelize = new Sequelize(config);

class PresentsList extends Model {
  id!: number;
  present!: string;
  name!: string;
  phone_number!: number;
  acepted!: boolean;

}

PresentsList.init(
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
  },
  {
    sequelize: sequelize,
    modelName: "presents_lists",
    timestamps: false,
  }
);

export default PresentsList;
