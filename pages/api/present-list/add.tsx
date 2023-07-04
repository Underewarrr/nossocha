import type { NextApiRequest, NextApiResponse } from "next";
import type { Present } from "../../../interfaces";
import presentService from "../../../services/present";

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse<Present>
) {
  switch (req.method) {
    case "POST":
      return await register(req, res);
    default:
      return res.status(400);
  }
}

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  const { present, name, phone_number ,acepted } = req.body;

  const { data, type, message, code } = await presentService.presentRegister(
    present,
    name,
    phone_number,
    acepted,
  );

  try {
    if (type === "REGISTER_ERROR") {
      return res.status(code).json({ message });
    }
    return res.status(code).json({ message: data });
  } catch (error) {
    return res.status(code).json({ message: error });
  }
};
