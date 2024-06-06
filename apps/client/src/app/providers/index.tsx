"use client"

import { NextUIProvider } from "@nextui-org/system"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SessionProvider } from "next-auth/react"

import { TanstackProvider } from "./tanstack-provider"

export const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<SessionProvider>
			<TanstackProvider>
				<NextUIProvider>
					<SpeedInsights />
					<Analytics />
					{children}
				</NextUIProvider>
			</TanstackProvider>
		</SessionProvider>
	)
}
