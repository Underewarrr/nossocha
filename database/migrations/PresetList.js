module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable("presents_lists", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        present: {
          allowNull: false,
          type: Sequelize.STRING(300),
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING(300),
          },        
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable("presents_lists");
    },
  };
  