import type { NextApiRequest, NextApiResponse } from "next";
import courseService from "../../../services/course";

export default async function removeCourseByIdHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "DELETE":
      return await removeCourseById(req, res);
    default:
      return res.status(400).json({ message: "Invalid request method" });
  }
}

const removeCourseById = async (req: NextApiRequest, res: NextApiResponse) => {
  const courseId = Number(req.query.id);

  const { type, message, code } = await courseService.removeCourseById(courseId);

  try {
    if (type === "NOT_FOUND") {
      return res.status(code).json({ message });
    }
    return res.status(code).json({ message });
  } catch (error) {
    return res.status(code).json({ message: error });
  }
};
