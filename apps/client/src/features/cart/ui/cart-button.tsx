import { Button } from "@nextui-org/button"

import CartIcon from "public/icons/cart.svg"

export const CartButton: React.FC = () => {
	return (
		<Button
			variant="light"
			radius="full"
			isIconOnly>
			<CartIcon className="h-[19.5px] w-[18px] fill-black" />
			<p className="sr-only">Cart Button</p>
		</Button>
	)
}
