import { Sequelize, Model, INTEGER, STRING, DataTypes } from "sequelize";
import * as config from "../config/database";

const sequelize = new Sequelize(config);

class Users extends Model {
  id!: number;
  course_name!: string;
  course_description!: string;
  course_chapters!: number;
  course_author!: string;
  course_likes!: number;
  course_hearts!: number;
  course_price!: number;
}

Users.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    course_name: {
      type: STRING(200),
      allowNull: false,
    },
    course_description: {
      type: STRING(3000),
      allowNull: false,
    },
    course_chapters: {
      type: INTEGER,
      allowNull: false,
    },
    course_author: {
      type: STRING(200),
      allowNull: false,
    },
    course_likes: {
      type: INTEGER,
      allowNull: false,
    },
    course_hearts: {
      type: INTEGER,
      allowNull: false,
    },
    course_price: {
      type: INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize: sequelize,
    modelName: "courses",
    timestamps: false,
  }
);

export default Users;
