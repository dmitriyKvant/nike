export const ROUTE = {
	HOME: "/",
	ABOUT: "/about",
	CONTACT: "/contact",
	SIGN_IN: "/sign-in",
	SIGN_UP: "/sign-up",
} as const satisfies Record<string, string>
