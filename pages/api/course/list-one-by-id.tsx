import type { NextApiRequest, NextApiResponse } from "next";
import courseService from "../../../services/course";

export default async function getCourseByIdHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      return await getCourseById(req, res);
    default:
      return res.status(400).json({ message: "Invalid request method" });
  }
}

const getCourseById = async (req: NextApiRequest, res: NextApiResponse) => {
  const courseId = Number(req.query.id);

  const { data, type, message, code } = await courseService.getCourseById(
    courseId
  );

  try {
    if (type === "NOT_FOUND") {
      return res.status(code).json({ message });
    }
    return res.status(code).json(data);
  } catch (error) {
    return res.status(code).json({ message: error });
  }
};
