import { Link } from "@nextui-org/link"
import NextLink from "next/link"

import { ROUTE } from "@/shared/config"

export const FooterRights: React.FC = () => {
	return (
		<div className="col-span-full flex justify-between">
			<p className="text-xs text-gray ">&copy; 2023 Nike, Inc. All Rights Reserved</p>
			<ul className="flex gap-x-[20px]">
				<li>
					<Link
						as={NextLink}
						href={ROUTE.HOME}
						className="text-xs text-gray">
						Guides
					</Link>
				</li>
				<li>
					<Link
						as={NextLink}
						href={ROUTE.HOME}
						className="text-xs text-gray">
						Terms of Sale
					</Link>
				</li>
				<li>
					<Link
						as={NextLink}
						href={ROUTE.HOME}
						className="text-xs text-gray">
						Terms of Use
					</Link>
				</li>
				<li>
					<Link
						as={NextLink}
						href={ROUTE.HOME}
						className="text-xs text-gray">
						Privacy Policy
					</Link>
				</li>
			</ul>
		</div>
	)
}
