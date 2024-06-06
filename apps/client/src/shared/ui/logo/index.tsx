import { Link } from "@nextui-org/link"
import { cn } from "@nextui-org/theme"
import NextLink from "next/link"
import { type VariantProps, tv } from "tailwind-variants"

import { ROUTE } from "@/shared/config"

import LogoIcon from "public/icons/logo.svg"

const logoVariants = tv({
	variants: {
		variant: {
			dark: "fill-black",
			light: "fill-white",
		},
		size: {
			md: "w-[60px] h-[21px]",
		},
	},
	defaultVariants: {
		size: "md",
		variant: "dark",
	},
})

export const Logo: React.FC<VariantProps<typeof logoVariants>> = ({ variant, size }) => {
	return (
		<Link
			as={NextLink}
			href={ROUTE.HOME}>
			<LogoIcon className={cn(logoVariants({ variant, size }))} />
		</Link>
	)
}
