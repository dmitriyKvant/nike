import { FooterNav } from "./footer-nav"
import { FooterRights } from "./footer-rights"
import { FooterSocials } from "./footer-socials"

export const Footer: React.FC = () => {
	return (
		<footer className="mt-[56px] bg-black pb-[12px] pt-[56px]">
			<div className="container !gap-y-[40px] grid-container content-offset">
				<FooterNav />
				<FooterSocials />
				<FooterRights />
			</div>
		</footer>
	)
}
