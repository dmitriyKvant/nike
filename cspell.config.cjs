/** @type { import ("@cspell/cspell-types").CSpellUserSettings } */
module.exports = {
	version: "0.2",
	language: "en",
	useGitignore: true,
	dictionaryDefinitions: [
		{
			name: "base",
			path: "./packages/cspell-dictionaries/base.txt",
		},
		{
			name: "libs",
			path: "./packages/cspell-dictionaries/libs.txt",
		},
	],
	dictionaries: ["base", "libs"],
	ignorePaths: ["apps/cms"],
}
