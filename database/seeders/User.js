module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          role: "admin",
          email: "admin@admin.com",
          password: "B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu",
          balance: 0,
          hasPremium: true,
        },
        {
          role: "user",
          email: "user@user.com",
          password: "B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu",
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
