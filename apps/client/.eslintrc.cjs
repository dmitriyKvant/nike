/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	extends: [
		"@turbo/eslint-config",
		require.resolve("@vercel/style-guide/eslint/next"),
		"plugin:@tanstack/eslint-plugin-query/recommended",
	],
	plugins: ["@tanstack/query"],
	parserOptions: {
		project: true,
	},
}
