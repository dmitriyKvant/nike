/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import NextAuth from "next-auth"

declare module "next-auth" {
	interface Session {
		strapiToken?: string
		provider?: "google"
		user: User
	}
	interface User {
		strapiUserId?: number
		strapiToken?: string
		blocked?: boolean
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		strapiUserId?: number
		strapiToken?: string
		provider?: "google"
		blocked?: boolean
	}
}
