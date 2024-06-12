import { Button } from "@nextui-org/button"

import FavoriteIcon from "public/icons/favorite.svg"

export const Favorite: React.FC = () => {
	return (
		<Button
			variant="light"
			isIconOnly
			radius="full">
			<FavoriteIcon className="h-[19.5px] w-[18px] fill-black" />
			<p className="sr-only">Favorite</p>
		</Button>
	)
}
