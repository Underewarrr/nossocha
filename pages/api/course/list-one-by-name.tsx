import type { NextApiRequest, NextApiResponse } from "next";
import courseService from "../../../services/course";

export default async function getCourseByNameHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      return await getCourseByName(req, res);
    default:
      return res.status(400).json({ message: "Invalid request method" });
  }
}

const getCourseByName = async (req: NextApiRequest, res: NextApiResponse) => {
  const courseName = req.query.name as string;

  const { data, type, message, code } = await courseService.getCourseByName(
    courseName
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
