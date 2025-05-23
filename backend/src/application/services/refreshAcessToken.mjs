import jwt from "jsonwebtoken"
import { config } from "../../config/env.mjs"
import { prisma } from "../../infrastructure/database/prisma/UserPrismaRepository.mjs"

const JWT_ACCESS_TOKEN_SCRET  = config.jwtAcessToken
const JWT_REFRESH_TOKEN_SCRET =  config.jwtRefreshToken

export const refreshAcessToken = async(refreshTokenFromCookie) =>{

  if(!refreshTokenFromCookie){
    throw new Error("Refresh Token não fornecido")
  }

  try {
    const decoded = jwt.verify(refreshTokenFromCookie, JWT_REFRESH_TOKEN_SCRET)

    const user = await prisma.user.findUnique({where:{id: decoded.id}})

    if(!user || user.refreshToken !== refreshTokenFromCookie){
      throw new Error("Token não corresponde ao registrado.")
    }

    const newAccessToken = jwt.sign(
      {
        id: decoded.id,
        email: decoded.email,
      },
      JWT_ACCESS_TOKEN_SCRET,
      {expiresIn: "1h"}
    )

    const newRefreshToken = jwt.sign(
      {
        id: decoded.id,
        email: decoded.email,
      },
      JWT_REFRESH_TOKEN_SCRET,
      {expiresIn: "7d"}
    )
 
    
    await prisma.user.update({
      where:{id: decoded.id},
      data: { refreshToken: newRefreshToken }
    })

    return {newAccessToken, newRefreshToken}
  } catch (err) {
    console.error(err)
    throw new Error("Refresh Token Invalido ou expirado.")
  }
}