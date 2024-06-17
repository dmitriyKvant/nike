import { nextui } from "@nextui-org/theme"
import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"
import plugin from "tailwindcss/plugin"

let nextUIUnpluggedPath =
	"../../.yarn/unplugged/@nextui-org-theme-virtual-64a0fdf025/node_modules/@nextui-org/theme/dist/components/(button|navbar|skeleton|spinner|card|link|spacer).js"

if (process.env.VERCEL) {
	nextUIUnpluggedPath =
		"../../node_modules/@nextui-org/theme/dist/components/(button|navbar|skeleton|spinner|card|link|spacer).js"
}

export default {
	darkMode: "class",
	content: ["./src/**/*.(ts|tsx)", nextUIUnpluggedPath],
	theme: {
		container: {
			center: true,
			padding: "1.5rem",
		},
		screens: {
			xl: "1408px",
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-sans)", ...fontFamily.sans],
				oswald: ["var(--font-oswald)", ...fontFamily.sans],
			},
			fontSize: {
				base: ["1rem", "1.5"],

				xs: ["0.75rem", "1.2"],
				sm: ["0.875rem", "1.43"],
				lg: ["1.125rem", "1.55"],
				xl: ["1.25rem", "1.4"],
				"3xl": ["1.875rem", "1"],
				"4xl": ["2.25rem", "1.25"],
			},
			colors: {
				black: {
					DEFAULT: "var(--black)",
				},
				white: {
					DEFAULT: "var(--white)",
				},
				gray: {
					DEFAULT: "var(--gray)",
				},
				blue: {
					DEFAULT: "var(--blue)",
				},
				red: {
					DEFAULT: "var(--red)",
				},
				green: {
					DEFAULT: "var(--green)",
				},
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				".grid-container": {
					display: "grid",
					"row-gap": "20px",
					"column-gap": "20px",
					"grid-template-columns": "repeat(12,1fr)",
				},
				".content-offset": {
					"padding-left": "6.5rem",
					"padding-right": "6.5rem",
				},
			})
		}),
		nextui({
			layout: {},
			themes: {
				light: {
					colors: {
						primary: {
							DEFAULT: "#000000",
							foreground: "#FFFFFF",
						},
						background: "#FFFFFF",
						foreground: "#000000",
					},
				},
			},
		}),
	],
} satisfies Config
