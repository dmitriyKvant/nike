import z from "zod"

export const clientEnvSchema = z.object({
	NEXT_PUBLIC_CMS_API_URL: z.string().url(),
	NEXT_PUBLIC_SENTRY_DSN: z.string().url(),
})

clientEnvSchema.safeParse(process.env)
