module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable("presents", {
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
          phone_number: {
            allowNull: false,
            type: Sequelize.STRING(100),
        },
        
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable("presents");
    },
  };
  