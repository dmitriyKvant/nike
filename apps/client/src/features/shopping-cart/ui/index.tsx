import { Button } from "@nextui-org/button"

import ShoppingCartIcon from "public/icons/shopping-cart.svg"

export const ShoppingCart: React.FC = () => {
	return (
		<Button
			variant="light"
			radius="full"
			isIconOnly>
			<ShoppingCartIcon className="h-[19.5px] w-[18px] fill-black" />
			<p className="sr-only">Shopping Cart</p>
		</Button>
	)
}
