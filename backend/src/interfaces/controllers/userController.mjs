import { registerUser } from "../../domain/useCases/registerUser.mjs";
import { UserPrismaRepository } from "../../infrastructure/database/prisma/UserPrismaRepository.mjs";

const userRepository = new UserPrismaRepository(); 

export const register = async (request, response) => {
  try {
    const newUser = await registerUser(userRepository, request.body);

    response.status(201).json({ msg: "Usuario criado com sucesso", user: newUser });
  } catch (err) {
    response.status(400).json({ error: err.message });
  }
};
