import z from "zod"

const serverEnvSchema = z.object({
	CMS_UPLOADS_URL: z.string().url(),
	SENTRY_AUTH_TOKEN: z.string(),
	UPLOADS_PATH: z.string(),
	NEXTAUTH_URL: z.string().url(),
	NEXTAUTH_SECRET: z.string(),
	GOOGLE_CLIENT_ID: z.string().url(),
	GOOGLE_CLIENT_SECRET: z.string(),
})

serverEnvSchema.safeParse(process.env)
