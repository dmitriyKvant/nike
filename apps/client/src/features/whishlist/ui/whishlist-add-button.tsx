import { Button } from "@nextui-org/button"
import { Skeleton } from "@nextui-org/skeleton"

import WhishlistIcon from "public/icons/heart.svg"

interface IWhishlistAddButtonProps {
	isLoaded?: boolean
}

interface IWhishlistAddButtonSkeletonProps {
	isLoaded: boolean
}

export const WhishlistAddButton: React.FC<
	IWhishlistAddButtonProps | IWhishlistAddButtonSkeletonProps
> = ({ isLoaded = true }) => {
	return (
		<Skeleton
			isLoaded={isLoaded}
			className="rounded-full">
			<Button
				className="h-[62px] w-[408px] gap-x-[10px]"
				radius="full"
				variant="bordered"
				color="primary">
				<p className="text-lg font-medium">Whishlist</p>
				<WhishlistIcon className="h-[15px] w-[16.25px] fill-black" />
			</Button>
		</Skeleton>
	)
}
