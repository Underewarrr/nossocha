module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "presents",
      [
        {
          present: "Cama de casal",
          name: "Capira",
          phone_number: "35991968159",
          acepted: true,
        },
        {
          present: "Jogo de facas",
          name: "Rubini",
          phone_number: "35991968159",
          acepted: false,

        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("presents", null, {});
  },
};
