module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          role: "admin",
          email: "admin@admin.com",
          password: "teste",
          balance: 0,
          hasPremium: true,
        },
        {
          role: "user",
          email: "user@user.com",
          password: "teste",
          balance: 0,
          hasPremium: false,
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
