import type { Config } from "@jest/types"
import nextJest from "next/jest.js"

const createJestConfig = nextJest({
	dir: "./",
})

const config: Config.InitialOptions = {
	coverageProvider: "v8",
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
	},
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
}

export default createJestConfig(config)
