import dotenv from "dotenv"

dotenv.config()

export const config = {
  PORT: process.env.PORT || 3000,
  jwtAcessToken: process.env.JWT_ACCESS_TOKEN_SCRET,
  jwtRefreshToken: process.env.REFRESH_TOKEN_SCRET
}