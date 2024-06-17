import { Link } from "@nextui-org/link"
import NextLink from "next/link"

import { ROUTE } from "@/shared/config"

import FacebookIcon from "public/icons/facebook.svg"
import InstagramIcon from "public/icons/instagram.svg"
import TwitterIcon from "public/icons/twitter.svg"
import YouTubeIcon from "public/icons/youtube.svg"

export const FooterSocials: React.FC = () => {
	return (
		<ul className="col-span-6 flex place-content-end gap-x-[16px]">
			<li>
				<Link
					as={NextLink}
					href={ROUTE.HOME}
					className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gray">
					<FacebookIcon className="h-[20px] w-[10.71px] fill-black" />
					<p className="sr-only">Facebook</p>
				</Link>
			</li>
			<li>
				<Link
					as={NextLink}
					href={ROUTE.HOME}
					className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gray">
					<TwitterIcon className="h-[16.24px] w-[20px] fill-black" />
					<p className="sr-only">Twitter</p>
				</Link>
			</li>
			<li>
				<Link
					as={NextLink}
					href={ROUTE.HOME}
					className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gray">
					<YouTubeIcon className="h-[13.33px] w-[18.96px] fill-black" />
					<p className="sr-only">YouTube</p>
				</Link>
			</li>
			<li>
				<Link
					as={NextLink}
					href={ROUTE.HOME}
					className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gray">
					<InstagramIcon className="h-[17.51px] w-[17.51px] fill-black" />
					<p className="sr-only">Instagram</p>
				</Link>
			</li>
		</ul>
	)
}
