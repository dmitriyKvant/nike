import { Card, CardFooter } from "@nextui-org/card"
import { Skeleton } from "@nextui-org/skeleton"
import { cn } from "@nextui-org/theme"
import Image from "next/image"
import Link from "next/link"

import { ROUTE } from "@/shared/config"
import { findDiscountPercentage } from "@/shared/lib"

import type { IProductAttributes } from "../model"

interface IProductCardProps
	extends Pick<IProductAttributes, "discountPrice" | "preview" | "price" | "title" | "slug"> {
	isLoaded?: boolean
}

interface IProductCardSkeletonProps
	extends Partial<
		Pick<IProductAttributes, "discountPrice" | "preview" | "price" | "title" | "slug">
	> {
	isLoaded: boolean
}

export const ProductCard: React.FC<IProductCardProps | IProductCardSkeletonProps> = ({
	discountPrice,
	preview,
	price,
	title,
	slug,
	isLoaded = true,
}) => {
	return (
		<Card
			as={Link}
			href={`${ROUTE.PRODUCT}/${slug}`}
			radius="none"
			shadow="none"
			className="col-span-4 h-[474.66px] transition-transform hover:scale-105">
			<Skeleton isLoaded={isLoaded}>
				<Image
					src={preview?.data.attributes.formats.small?.url ?? preview?.data.attributes.url ?? ""}
					alt={preview?.data.attributes.alternativeText ?? "Sneakers"}
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
						<p className="font-medium text-green">
							{findDiscountPercentage(price, discountPrice)}% off
						</p>
					)}
				</Skeleton>
			</CardFooter>
		</Card>
	)
}
