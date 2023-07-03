module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("courses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      course_name: {
        allowNull: false,
        type: Sequelize.STRING(200),
      },
      course_description: {
        allowNull: false,
        type: Sequelize.STRING(3000),
      },
      course_chapters: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      course_author: {
        allowNull: false,
        type: Sequelize.STRING(200),
      },
      course_likes: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      course_hearts: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      course_price: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("courses");
  },
};
