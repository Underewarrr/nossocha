import presentListModel from "../database/models/PresentList";
import accountModel from "../database/models/User";
const updatePresentStatus = async (id: number, acepted: boolean) => {
  try {
    const present = await presentListModel.findByPk(id);
    if (!present) {
      return {
        code: 404,
        type: 'UPDATE_ERROR',
        message: 'Present not found',
      };
    }

    present.acepted = acepted; // Change the accepted status to the provided value
    await present.save();

    return {
      code: 200,
      type: 'UPDATE_SUCCESS',
      message: 'Present status updated successfully',
    };
  } catch (error) {
    console.error('Error updating present status:', error);
    return {
      code: 500,
      type: 'UPDATE_ERROR',
      message: 'Error updating present status',
    };
  }
};


const listAllPresent = async () => {
  try {
    const courses = await presentListModel.findAll();
    return { code: 200, type: "AUTH", data: courses };
  } catch (error) {
    return { code: 500, type: "LIST_ERROR", message: "Erro ao listar os cursos" };
  }
};

const getPresentById = async (id: number) => {
  try {
    const course = await presentListModel.findByPk(id);
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
    const course = await presentListModel.findOne({
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
    const deletedCourse = await presentListModel.destroy({
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
  let data = await presentListModel.findOne({ where: { name } });


  if (data) {
    return { code: 409, type: "REGISTER_ERROR", message: "Nome existente!" };
  }


  const dataValues = await presentListModel.create({
    phone_number: 0,
    present,
    name,
    acepted: false,
  });
  data = dataValues;

  return { type: "REGISTRED", data, code: 201, dataValues };
};

export default { listAllPresent, getPresentById, getCourseByName, removeCourseById, presentRegister, updatePresentStatus };
