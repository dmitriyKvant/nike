import { Link } from "@nextui-org/link"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar"
import NextLink from "next/link"

import { CartButton } from "@/features/cart"
import { WhishlistButton } from "@/features/whishlist"

import { ROUTE } from "@/shared/config"
import { Logo } from "@/shared/ui"

export const Header: React.FC = () => {
	return (
		<Navbar
			isBlurred={false}
			className="py-[10px]"
			maxWidth="2xl"
			classNames={{
				wrapper: ["px-0"],
				base: ["container content-offset"],
			}}>
			<NavbarBrand>
				<Logo variant="dark" />
			</NavbarBrand>
			<NavbarContent
				justify={"center"}
				className="gap-x-[50px] font-medium">
				<NavbarItem>
					<Link
						as={NextLink}
						href={ROUTE.HOME}>
						Home
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						as={NextLink}
						href={ROUTE.ABOUT}>
						About
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						as={NextLink}
						href={ROUTE.CONTACT}>
						Contact
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<WhishlistButton />
				<CartButton />
			</NavbarContent>
		</Navbar>
	)
}
