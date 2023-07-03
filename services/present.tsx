import presentModel from "../database/models/Present";

const listAllPresent = async () => {
  try {
    const courses = await presentModel.findAll();
    return { code: 200, type: "AUTH", data: courses };
  } catch (error) {
    return { code: 500, type: "LIST_ERROR", message: "Erro ao listar os cursos" };
  }
};

const getPresentById = async (id: number) => {
  try {
    const course = await presentModel.findByPk(id);
    if (!course) {
      return { code: 404, type: "NOT_FOUND", message: "Curso não encontrado" };
    }
    return { code: 200, type: "AUTH", data: course };
  } catch (error) {
    return { code: 500, type: "GET_ERROR", message: "Erro ao obter o curso" };
  }
};

const getCourseByName = async (course_name: string) => {
  try {
    const course = await presentModel.findOne({
      where: {
        course_name,
      },
    });
    if (!course) {
      return { code: 404, type: "NOT_FOUND", message: "Curso não encontrado" };
    }
    return { code: 200, type: "AUTH", data: course };
  } catch (error) {
    return { code: 500, type: "GET_ERROR", message: "Erro ao obter o curso" };
  }
};

const removeCourseById = async (id: number) => {
  try {
    const deletedCourse = await presentModel.destroy({
      where: {
        id,
      },
    });
    if (!deletedCourse) {
      return { code: 404, type: "NOT_FOUND", message: "Curso não encontrado" };
    }
    return { code: 200, type: "AUTH", message: "Curso removido com sucesso!" };
  } catch (error) {
    return { code: 500, type: "REMOVE_ERROR", message: "Erro ao remover o curso" };
  }
};

const presentRegister = async (
  present: string,
  name: string,
  phone_number: string,
  acepted: boolean
) => {
  let data = await presentModel.findOne({ where: { name } });


  if (data) {
    return { code: 409, type: "REGISTER_ERROR", message: "Nome existente!" };
  }


  const dataValues = await presentModel.create({
    phone_number,
    present,
    name,
    acepted: false,
  });
  data = dataValues;

  return { type: "REGISTRED", data, code: 201, dataValues };
};

export default { listAllPresent, getPresentById, getCourseByName, removeCourseById, presentRegister };
