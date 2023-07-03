import accountModel from "../database/models/User";
import * as JWT from "jsonwebtoken";

const userLogin = async (email: string, password: string) => {
  const data = await accountModel.findOne({ where: { email } });
  if (!data) {
    return { code: 404, type: "NOT_AUTH", message: "Email não encontrado" };
  }

  function verifyPassword(reqPassword: string, dbPassword: string) {
    if (reqPassword === dbPassword) {
      return true;
    }
    return false;
  }

  const verify = verifyPassword(password, data.password);

  if (!verify) {
    return {
      code: 401,
      type: "NOT_AUTH",
      message: "Email ou senha incorretas",
    };
  }

  const createToken = (token: number) => {
    const tokenData = {
      id: data.id,
      username: data.username,
      email: data.email,
    };
    return JWT.sign(tokenData, process.env.JWT_SECRET as string, {
      expiresIn: "1d",
      algorithm: "HS256",
    });
  };

  const token = createToken(data.id);

  return { code: 200, type: "AUTH", message: "Login success!", token };
};

const userRegister = async (
  email: string,
  password: string
) => {
  let data = await accountModel.findOne({ where: { email } });


  if (data) {
    return { code: 409, type: "REGISTER_ERROR", message: "Email existe!" };
  }


  const dataValues = await accountModel.create({
    role: "1",
    email,
    password,
    balance: 0,
    hasPremium: false,
  });
  data = dataValues;

  return { type: "REGISTRED", data, code: 201, dataValues };
};

const userGetInfo = async (email: string) => {
  const data = await accountModel.findOne({
    where: { email },
    attributes: {
      exclude: ['password']
    }
  });

  if (!data) {
    return { code: 409, type: "FIND_ERROR", message: "Usuário não existe!" };
  }

  return { code: 200, type: "FIND_SUCCESS", data };
};

const userAddBalance = async (email: string, balance: number) => {
  const data = await accountModel.findOne({
    where: { email },
    attributes: {
      exclude: ['password']
    }
  });

  if (!data) {
    return { code: 409, type: "FIND_ERROR", message: "Usuário não existe!" };
  }

  data.balance = data.balance + balance;
  await data.save();

  return { code: 200, type: "ADD_BALANCE_SUCCESS", data };
};

export default { userLogin, userRegister, userGetInfo, userAddBalance };
