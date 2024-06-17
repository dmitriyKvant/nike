import { Skeleton } from "@nextui-org/skeleton"
import Markdown from "react-markdown"

import type { IProductAttributes } from "@/entities/product"

interface IProductDetailsDescriptionProps
	extends Required<Pick<IProductAttributes, "description">> {
	isLoaded?: boolean
}

interface IProductDetailsDescriptionSkeletonProps
	extends Partial<Pick<IProductAttributes, "description">> {
	isLoaded: boolean
}

export const ProductDetailsDescription: React.FC<
	IProductDetailsDescriptionProps | IProductDetailsDescriptionSkeletonProps
> = ({ description, isLoaded = true }) => {
	return (
		<div>
			<Skeleton
				className="h-[28px] w-[150px]"
				isLoaded={isLoaded}>
				<h3 className="text-lg font-bold">Product Details</h3>
			</Skeleton>
			<Skeleton
				className="mt-[20px] h-[280px] w-[408px]"
				isLoaded={isLoaded}>
				<Markdown className="markdown">{description}</Markdown>
			</Skeleton>
		</div>
	)
}
