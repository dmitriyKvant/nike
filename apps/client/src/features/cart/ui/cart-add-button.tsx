import { Button } from "@nextui-org/button"
import { Skeleton } from "@nextui-org/skeleton"

interface ICartAddButtonProps {
	isLoaded?: boolean
}

interface ICartAddButtonSkeletonProps {
	isLoaded: boolean
}

export const CartAddButton: React.FC<ICartAddButtonProps | ICartAddButtonSkeletonProps> = ({
	isLoaded = true,
}) => {
	return (
		<Skeleton
			isLoaded={isLoaded}
			className="rounded-full">
			<Button
				className="h-[62px] w-[408px] text-lg font-medium"
				radius="full"
				color="primary">
				Add to Cart
			</Button>
		</Skeleton>
	)
}
