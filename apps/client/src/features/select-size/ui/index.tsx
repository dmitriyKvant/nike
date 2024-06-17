import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link"
import { Skeleton } from "@nextui-org/skeleton"
import NextLink from "next/link"

import type { IProductAttributes } from "@/entities/product"

import { ROUTE } from "@/shared/config"

interface ISelectSizeProps
	extends Required<Pick<IProductAttributes, "allSizes" | "availableSizes">> {
	isLoaded?: boolean
}

interface ISelectSizeSkeletonProps
	extends Partial<Pick<IProductAttributes, "allSizes" | "availableSizes">> {
	isLoaded: boolean
}

export const SelectSize: React.FC<ISelectSizeProps | ISelectSizeSkeletonProps> = ({
	allSizes,
	availableSizes,
	isLoaded = true,
}) => {
	return (
		<div className="w-[408px]">
			<div className="flex w-[408px] justify-between">
				<Skeleton
					isLoaded={isLoaded}
					className="h-[24px] w-[100px]">
					<p className="font-semibold">Select Size</p>
				</Skeleton>
				<Skeleton
					isLoaded={isLoaded}
					className="h-[24px] w-[100px]">
					<Link
						as={NextLink}
						href={ROUTE.PRODUCT}
						className="font-medium text-gray">
						Select Guide
					</Link>
				</Skeleton>
			</div>
			<Skeleton
				isLoaded={isLoaded}
				className="mt-[8px] h-[224px] ">
				<div className="flex flex-wrap justify-between gap-y-[8px]">
					{allSizes
						?.sort((a, b) => Number(a) - Number(b))
						.map((size) => (
							<Button
								key={size}
								variant="bordered"
								className="h-[50px] w-[130.66px]"
								isDisabled={!availableSizes?.includes(size)}>
								UK {size}
							</Button>
						))}
				</div>
			</Skeleton>
		</div>
	)
}
