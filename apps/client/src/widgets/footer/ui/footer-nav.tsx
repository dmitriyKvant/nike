import { Link } from "@nextui-org/link"
import NextLink from "next/link"

import { ROUTE } from "@/shared/config"

export const FooterNav: React.FC = () => {
	return (
		<>
			<ul className="col-span-2 flex flex-col gap-y-[12px]">
				<li>
					<Link
						as={NextLink}
						href={ROUTE.HOME}
						className="font-oswald text-sm font-medium uppercase text-white">
						Find A Store
					</Link>
				</li>
				<li>
					<Link
						as={NextLink}
						href={ROUTE.HOME}
						className="font-oswald text-sm font-medium uppercase text-white">
						Become A Partner
					</Link>
				</li>
				<li>
					<Link
						as={NextLink}
						href={ROUTE.HOME}
						className="font-oswald text-sm font-medium uppercase text-white">
						Sign Up For Email
					</Link>
				</li>
				<li>
					<Link
						as={NextLink}
						href={ROUTE.HOME}
						className="font-oswald text-sm font-medium uppercase text-white">
						Send Us Feedback
					</Link>
				</li>
				<li>
					<Link
						as={NextLink}
						href={ROUTE.HOME}
						className="font-oswald text-sm font-medium uppercase text-white">
						Student Discount
					</Link>
				</li>
			</ul>
			<ul className="col-span-2 flex flex-col gap-y-[12px]">
				<li className="font-oswald text-sm font-medium uppercase text-white">Get Help</li>
				<li>
					<Link
						as={NextLink}
						href={ROUTE.HOME}
						className="text-sm text-gray">
						Order Status
					</Link>
				</li>
				<li>
					<Link
						as={NextLink}
						href={ROUTE.HOME}
						className="text-sm text-gray">
						Delivery
					</Link>
				</li>
				<li>
					<Link
						as={NextLink}
						href={ROUTE.HOME}
						className="text-sm text-gray">
						Returns
					</Link>
				</li>
				<li>
					<Link
						as={NextLink}
						href={ROUTE.HOME}
						className="text-sm text-gray">
						Payment Options
					</Link>
				</li>
				<li>
					<Link
						as={NextLink}
						href={ROUTE.HOME}
						className="text-sm text-gray">
						Contact Us
					</Link>
				</li>
			</ul>
			<ul className="col-span-2 flex flex-col gap-y-[12px]">
				<li className="font-oswald text-sm font-medium uppercase text-white">About Nike</li>
				<li>
					<Link
						as={NextLink}
						href={ROUTE.HOME}
						className="text-sm text-gray">
						News
					</Link>
				</li>
				<li>
					<Link
						as={NextLink}
						href={ROUTE.HOME}
						className="text-sm text-gray">
						Careers
					</Link>
				</li>
				<li>
					<Link
						as={NextLink}
						href={ROUTE.HOME}
						className="text-sm text-gray">
						Investors
					</Link>
				</li>
				<li>
					<Link
						as={NextLink}
						href={ROUTE.HOME}
						className="text-sm text-gray">
						Sustainability
					</Link>
				</li>
			</ul>
		</>
	)
}
