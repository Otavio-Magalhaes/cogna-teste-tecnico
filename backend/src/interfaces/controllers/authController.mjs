import { refreshAcessToken } from "../../application/services/refreshAcessToken.mjs"
import { loginUser } from "../../domain/useCases/loginUser.mjs"
import { prisma, UserPrismaRepository } from "../../infrastructure/database/prisma/UserPrismaRepository.mjs"


const userRepository = new UserPrismaRepository()

export const login = async (request, response) => {
  try {
    const { email, password } = request.body

    const loginData = { email, password }
  
    const { acessToken, refreshToken, user } = await loginUser(userRepository, loginData)


    response.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      samesite: "Strict",
      maxAge: 7 * (24 * 60 * 60 * 1000)
    })

    await prisma.user.update({
      where: { id: user.id },
      data: { refreshToken: refreshToken }
    })

    console.log("era pra estar logando.")
    response.status(200).json({
      msg: "login realizado com sucesso",
      user: user,
      accessToken: acessToken
    })
  } catch (err) {
    console.log(err)
    response.status(500).json({ msg: "Erro interno do Servidor." })
  }
}



export const handleRefreshToken = async (request, response) => {
  try {
    const refreshToken = request.cookies.refreshToken
    const { newAccessToken, newRefreshToken } = await refreshAcessToken(refreshToken)

    if (!newAccessToken) response.status(400).json({ msg: "Erro no AcessToken" })

    response.cookie
      (
        "refreshToken", newRefreshToken, {
        httpOnly: true,
        secure: true,
        samesite: "Strict",
        maxAge: 7 * (24 * 60 * 60 * 1000)
      })
      .status(200)
      .json({
        token: newAccessToken,
        msg: "Novo Acess Token Gerado com sucesso."
      })



  } catch (err) {
    console.log(err)
    return response.status(401).json({ msg: err.message });
  }
} 


export const PegarUsuarioAtual = (request, response) => {
  const user = request.user
  return response.status(200).json({user})
}