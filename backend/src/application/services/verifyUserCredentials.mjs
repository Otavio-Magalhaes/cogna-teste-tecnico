import bcrypt from 'bcrypt'
import { config} from '../../config/env.mjs'

export const  verifyUserCredentials = async (userRepository, loginData)=>{
  const email = loginData.email

  const user = await userRepository.findByEmail(email)
  
  if(!user){
    throw new Error("Usuario não encontrado")
  }
  const passwordMatch = await bcrypt.compare(loginData.password, user.password)

  if(!passwordMatch){
    throw new Error("Senha incorreta!")
  }
  const userWithoutPassword = {
    id: user.id,
    email: user.email,
  }

  return userWithoutPassword
}

