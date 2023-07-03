import courseModel from "../database/models/Course";

const listAllCourses = async () => {
  try {
    const courses = await courseModel.findAll();
    return { code: 200, type: "AUTH", data: courses };
  } catch (error) {
    return { code: 500, type: "LIST_ERROR", message: "Erro ao listar os cursos" };
  }
};

const getCourseById = async (id: number) => {
  try {
    const course = await courseModel.findByPk(id);
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
    const course = await courseModel.findOne({
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
    const deletedCourse = await courseModel.destroy({
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


export default { listAllCourses, getCourseById, getCourseByName, removeCourseById,  };
