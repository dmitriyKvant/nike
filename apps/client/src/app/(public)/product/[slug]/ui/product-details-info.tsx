import { Skeleton } from "@nextui-org/skeleton"

import type { IProductAttributes } from "@/entities/product"

import { findDiscountPercentage } from "@/shared/lib"

interface ProductDetailsInfoProps
	extends Pick<IProductAttributes, "discountPrice" | "price" | "title" | "sex"> {
	isLoaded?: boolean
}

interface ProductDetailsInfoSkeletonProps
	extends Pick<Partial<IProductAttributes>, "discountPrice" | "price" | "title" | "sex"> {
	isLoaded: boolean
}

export const ProductDetailsInfo: React.FC<
	ProductDetailsInfoProps | ProductDetailsInfoSkeletonProps
> = ({ discountPrice, sex, price, title, isLoaded = true }) => {
	return (
		<div className="flex w-[408px] flex-col gap-y-[20px]">
			<div className="font-semibold">
				<Skeleton
					isLoaded={isLoaded}
					className="h-[45px] w-[330px]">
					<h1 className="text-4xl">{title}</h1>
				</Skeleton>
				<Skeleton
					isLoaded={isLoaded}
					className="mt-[7.5px] h-[28px] w-[150px]">
					<p className="text-lg">{sex === "man" ? "Men's Shoes" : "Women's Shoes"}</p>
				</Skeleton>
			</div>
			<div>
				<div className="flex justify-between">
					<Skeleton
						isLoaded={isLoaded}
						className="h-[28px] w-[240px]">
						<div className="flex items-center gap-x-[8px]">
							<p className="text-lg font-semibold">MRP : ₹{discountPrice}</p>
							<p className="line-through">₹{price}</p>
						</div>
					</Skeleton>
					<Skeleton
						className="h-[28px] w-[100px]"
						isLoaded={isLoaded}>
						{discountPrice && price && (
							<p className="text-right font-medium text-green">
								{findDiscountPercentage(price, discountPrice)}% off
							</p>
						)}
					</Skeleton>
				</div>
				<Skeleton
					isLoaded={isLoaded}
					className="mt-[5px] w-full">
					<div className="font-medium text-gray">
						<p>incl. of taxes</p>
						<p>(Also includes all applicable duties)</p>
					</div>
				</Skeleton>
			</div>
		</div>
	)
}
