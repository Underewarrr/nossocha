import type { NextApiRequest, NextApiResponse } from "next";
import userService from "../../../services/user";

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method) {
    case "POST":
      return await login(req, res);
    default:
      return res.status(400).json({ message: "Invalid request | Should be POST" });
  }
}

const login = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const { email, password } = req.body;

  const { type, message, code, token } = await userService.userLogin(
    email,
    password
  );

  try {
    if (type === "NOT_AUTH") {
      res.status(code).json({ message });
    } else {
      res.status(code).json({ message: token });
    }
  } catch (error) {
    res.status(code).json({ message: error });
  }
};
