import type { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

import { http } from "@/shared/api"

export const authConfig: AuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	session: {
		strategy: "jwt",
	},
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		jwt: async ({ token, account }) => {
			if (account) {
				if (account.provider === "google") {
					const { data } = await http.get(
						`/auth/${account.provider}/callback?access_token=${account.access_token}`,
					)
					return {
						token: {
							...token,
							strapiToken: data.jwt,
							strapiUserId: data.user.id,
							provider: account.provider,
							blocked: data.user.blocked,
						},
					}
				}
			}
			return token
		},
		session: async ({ token, session, user }) => {
			return {
				...session,
				strapiToken: token.strapiToken,
				provider: token.provider,
				user: {
					...user,
					strapiUserId: token.strapiUserId,
					blocked: token.blocked,
				},
			}
		},
	},
}
