import bcrypt from "bcrypt";
import { User } from "../entities/user.entity.mjs";

export const registerUser = async (userRepository, userData) => {
  const usuarioExistente = await userRepository.findByEmail(userData.email);

  if (usuarioExistente) {
    throw new Error("Usuário já existe");
  }

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

  const user = new User({
    email: userData.email,
    password: hashedPassword,
    name: userData.name,

  })

  return await userRepository.create(user.toObject())
};
