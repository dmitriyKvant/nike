import { Button } from "@nextui-org/button"

import WhishlistIcon from "public/icons/heart.svg"

export const WhishlistButton: React.FC = () => {
	return (
		<Button
			variant="light"
			isIconOnly
			radius="full">
			<WhishlistIcon className="h-[19.5px] w-[18px] fill-black" />
			<p className="sr-only">Whishlist Button</p>
		</Button>
	)
}
