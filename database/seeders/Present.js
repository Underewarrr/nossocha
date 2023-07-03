module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "presents",
      [
        {
          present: "Dildo",
          name: "Capira pederasta",
          phone_number: "35991968159",
        },
        {
          present: "Golden Helmet",
          name: "Rubini",
          phone_number: "35991968159",
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("presents", null, {});
  },
};
