import { withSentryConfig } from "@sentry/nextjs"

/** @type {import('next').NextConfig} */
const config = {
	// React
	reactStrictMode: true,

	// Next
	images: {
		formats: ["image/avif", "image/webp"],
	},
	poweredByHeader: false,

	async rewrites() {
		return [
			{
				source: `${process.env.UPLOADS_PATH}/:path*`,
				destination: `${process.env.CMS_UPLOADS_URL}/:path*`,
			},
		]
	},
	// Turbopack
	experimental: {
		turbo: {
			rules: {
				"*.svg": {
					loaders: ["@svgr/webpack"],
					as: "*.js",
				},
			},
		},
	},

	// Webpack
	webpack(config) {
		const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.(".svg"))
		config.module.rules.push(
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/,
			},
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: {
					not: [...fileLoaderRule.resourceQuery.not, /url/],
				},
				use: ["@svgr/webpack"],
			},
		)
		fileLoaderRule.exclude = /\.svg$/i
		return config
	},
}

export default withSentryConfig(config, {
	org: "dmitriykvant",
	project: "nike",
	authToken: process.env.SENTRY_AUTH_TOKEN,
	silent: !process.env.CI,
	widenClientFileUpload: true,
	transpileClientSDK: true,
	tunnelRoute: "/monitoring",
	hideSourceMaps: true,
	disableLogger: true,
	automaticVercelMonitors: true,
})
