import NextAuth from "next-auth/next"

import { authConfig } from "@/shared/config"

const authHandler = NextAuth(authConfig)

export { authHandler as GET, authHandler as POST }
