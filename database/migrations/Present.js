module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable("users", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
  
        present: {
          allowNull: false,
          type: Sequelize.STRING(30),
        },
        number: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable("users");
    },
  };
  