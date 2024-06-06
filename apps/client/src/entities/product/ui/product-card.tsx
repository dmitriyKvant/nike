import { Card, CardFooter } from "@nextui-org/card"
import { Image } from "@nextui-org/image"
import NextImage from "next/image"
import Link from "next/link"

import { findDiscountPercentage } from "@/shared/lib"

import type { IProductAttributes } from "../model/product"

export const ProductCard: React.FC<IProductAttributes> = ({
	discountPrice,
	picture,
	price,
	title,
}) => {
	if (discountPrice) {
		return (
			<Card
				as={Link}
				href={"/"}
				radius="none"
				shadow="none"
				className="col-span-4 h-[474.66px] transition-transform hover:scale-105">
				<Image
					as={NextImage}
					radius="none"
					src={picture.data.attributes.formats.small?.url ?? picture.data.attributes.url}
					alt={picture.data.attributes.alternativeText ?? "Sneakers"}
					width={386.66}
					height={386.66}
					priority
				/>
				<CardFooter className="flex h-[88px] justify-between p-[16px]">
					<div className="flex flex-col justify-between text-left">
						<h3 className="text-lg font-medium">{title}</h3>
						<div className="flex items-center gap-x-[10px] text-gray">
							<p className="text-lg font-semibold">₹{discountPrice}</p>
							<p className="font-medium line-through">₹{price}</p>
						</div>
					</div>
					<p className="mt-auto font-medium text-green">
						{findDiscountPercentage(price, discountPrice)}% off
					</p>
				</CardFooter>
			</Card>
		)
	}
	return (
		<Card
			as={Link}
			href={"/"}
			radius="none"
			shadow="none"
			className="col-span-4 h-[474.66px] transition-transform hover:scale-105">
			<Image
				as={NextImage}
				radius="none"
				src={picture.data.attributes.formats.small?.url ?? picture.data.attributes.url}
				alt={picture.data.attributes.alternativeText ?? "Sneakers"}
				width={386.66}
				height={386.66}
				priority
			/>
			<CardFooter className="flex h-[88px] flex-col items-start justify-between p-[16px]">
				<h3 className="text-lg font-medium">{title}</h3>
				<p className="text-lg font-semibold text-gray">₹{price}</p>
			</CardFooter>
		</Card>
	)
}
