import jwt from 'jsonwebtoken'
import {config} from "../../config/env.mjs"
import {verifyUserCredentials} from "../../application/services/verifyUserCredentials.mjs"
import bycrpt from "bcrypt"

const JWT_ACCESS_TOKEN_SCRET = config.jwtAcessToken
const JWT_REFRESH_TOKEN_SCRET = config.jwtRefreshToken


export const loginUser = async (userRepository, loginData) =>{
  const user = await verifyUserCredentials(userRepository, loginData)

  const payload = {
    id: user.id,
    email: user.email
  }

  const acessToken = jwt.sign(
    payload, 
    JWT_ACCESS_TOKEN_SCRET, 
    { expiresIn: "1h" }
  )

  const refreshToken = jwt.sign(
    payload,
    JWT_REFRESH_TOKEN_SCRET,
    { expiresIn: "7d" }
  )
 

  return{
    acessToken,
    refreshToken,
    user
  }
}