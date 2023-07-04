module.exports = {
    up: async (queryInterface) => {
      await queryInterface.bulkInsert(
        "presents_lists",
        [
          {
            present: "Cama de casal",
            name: "Eri",
          },
          {
            present: "Jogo de facas",
            name: "Eri",
           
          },
        ],
        {}
      );
    },
  
    down: async (queryInterface) => {
      await queryInterface.bulkDelete("presents_lists", null, {});
    },
  };
  