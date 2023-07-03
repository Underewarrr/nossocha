module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "courses",
      [
        {
          course_name: "Desenvolvimento Open Tibia Basico",
          course_description: "Neste módulo, você será introduzido ao TFS (The Forgotten Server) e aprenderá os fundamentos essenciais para começar a desenvolver no ambiente.",
          course_chapters: 17,
          course_author: "Rafhael Oliveira",
          course_likes: 0,
          course_hearts: 0,
          course_price: 100,

        },
        {
          course_name: "Desenvolvimento Open Tibia Intermediario",
          course_description: "Neste módulo, você terá uma compreensão básica do TFS e aprenderá a configurar o ambiente de desenvolvimento, explorar as principais ferramentas e compilar o servidor em diferentes plataformas. Além disso, você descobrirá o papel do webserver e como desenvolver um website para interagir com o servidor de jogo.",
          course_chapters: 14,
          course_author: "Rafhael Oliveira",
          course_likes: 1,
          course_hearts: 0,
          course_price: 150,

        },
        {
          course_name: "Desenvolvimento Open Tibia Avançado",
          course_description: "Neste módulo avançado, você irá aprofundar seus conhecimentos no desenvolvimento do servidor TFS (The Forgotten Server). Abordaremos tópicos como bancos de dados e sistemas adicionais que podem ser implementados no jogo.",
          course_chapters: 12,
          course_author: "Rafhael Oliveira",
          course_likes: 1,
          course_hearts: 0,
          course_price: 250,

        },
        {
          course_name: "Desenvolvimento Open Tibia Especialista",
          course_description: "Neste módulo, você irá aprofundar seus conhecimentos sobre a estrutura do servidor TFS e aprenderá a criar scripts para todas as áreas disponíveis. Além disso, abordaremos o uso de metatables para emular um sistema de classes em Lua.",
          course_chapters: 26,
          course_author: "Rafhael Oliveira",
          course_likes: 1,
          course_hearts: 0,
          course_price: 300,

        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("courses", null, {});
  },
};
