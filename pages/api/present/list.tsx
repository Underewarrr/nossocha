import type { NextApiRequest, NextApiResponse } from "next";
import presentService from "../../../services/present";

export default async function listCoursesHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      return await listCourses(req, res);
    default:
      return res.status(400).json({ message: "Invalid request method" });
  }
}

const listCourses = async (_req: NextApiRequest, res: NextApiResponse) => {
  const { data, type, message, code } = await presentService.listAllPresent();

  try {
    if (type === "LIST_ERROR") {
      return res.status(code).json({ message });
    }
    return res.status(code).json(data);
  } catch (error) {
    return res.status(code).json({ message: error });
  }
};
