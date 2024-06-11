import { Card, CardFooter } from "@nextui-org/card"
import { Skeleton } from "@nextui-org/skeleton"
import { cn } from "@nextui-org/theme"
import Image from "next/image"
import Link from "next/link"

import { findDiscountPercentage } from "@/shared/lib"

import type { IProductAttributes } from "../model/product"

interface IProductCardSkeletonProps extends Partial<IProductAttributes> {
	isLoaded: boolean
}

interface IProductCardProps extends IProductAttributes {
	isLoaded?: boolean
}

export const ProductCard: React.FC<IProductCardProps | IProductCardSkeletonProps> = ({
	discountPrice,
	picture,
	price,
	title,
	isLoaded = true,
}) => {
	return (
		<Card
			as={Link}
			href={"/"}
			radius="none"
			shadow="none"
			className="col-span-4 h-[474.66px] transition-transform hover:scale-105">
			<Skeleton isLoaded={isLoaded}>
				<Image
					src={picture?.data.attributes.formats.small?.url ?? picture?.data.attributes.url ?? ""}
					alt={picture?.data.attributes.alternativeText ?? "Sneakers"}
					width={386.66}
					height={386.66}
					priority
				/>
			</Skeleton>
			<CardFooter className="flex h-[88px] items-stretch justify-between p-[16px]">
				<div className="flex flex-col justify-between text-left">
					<Skeleton
						isLoaded={isLoaded}
						className="h-[24px] w-[200px]">
						<h3 className="text-lg font-medium">{title}</h3>
					</Skeleton>
					<Skeleton
						isLoaded={isLoaded}
						className="h-[24px] w-[120px]">
						<div className="flex items-center gap-x-[10px] text-gray">
							{discountPrice && <p className="text-lg font-semibold">₹{discountPrice}</p>}
							<p
								className={cn(
									"text-lg font-semibold",
									discountPrice && "font-medium line-through",
								)}>
								₹{price}
							</p>
						</div>
					</Skeleton>
				</div>
				<Skeleton
					isLoaded={isLoaded}
					className="mt-auto h-[24px] w-[80px]">
					{discountPrice && price && (
						<p className="mt-auto font-medium text-green">
							{findDiscountPercentage(price, discountPrice)}% off
						</p>
					)}
				</Skeleton>
			</CardFooter>
		</Card>
	)
}
