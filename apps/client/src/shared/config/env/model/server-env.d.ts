import z from "zod"

const serverEnvSchema = z.object({
	CMS_UPLOADS_URL: z.string().url(),
	UPLOADS_PATH: z.string(),
	NEXTAUTH_SECRET: z.string(),
	GOOGLE_CLIENT_ID: z.string().url(),
	GOOGLE_CLIENT_SECRET: z.string(),
	SENTRY_ORG: z.string(),
	SENTRY_PROJECT: z.string(),
	SENTRY_AUTH_TOKEN: z.string(),
})

serverEnvSchema.safeParse(process.env)
