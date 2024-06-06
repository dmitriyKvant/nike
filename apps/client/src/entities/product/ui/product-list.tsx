"use client"

import { Skeleton } from "@nextui-org/skeleton"
import { Spinner } from "@nextui-org/spinner"
import type { UseInfiniteQueryResult } from "@tanstack/react-query"
import { forwardRef } from "react"

import type { IProductData } from "../model/product"
import { ProductCard } from "./product-card"

interface IProductList extends Pick<UseInfiniteQueryResult, "isPending" | "isFetchingNextPage"> {
	data: IProductData[] | undefined
}

export const ProductList = forwardRef<HTMLDivElement, IProductList>(
	({ isPending, data, isFetchingNextPage }, ref) => {
		if (isPending) {
			return (
				<div className="grid-container">
					{[...Array(12)].map((_, id) => (
						<div
							key={id}
							className="col-span-4 h-[474.66px] transition-transform hover:scale-105">
							<Skeleton className="h-[386.66px] w-[386.66px]" />
							<div className="flex h-[88px] justify-between p-[16px]">
								<div className="flex flex-col justify-between text-left">
									<Skeleton className="h-[25px] w-[200px]" />
									<Skeleton className="h-[25px] w-[120px]" />
								</div>
								<Skeleton className="mt-auto h-[24px] w-[80px]" />
							</div>
						</div>
					))}
				</div>
			)
		}
		return (
			<>
				<div className="grid-container">
					{data?.map((product) => (
						<ProductCard
							key={product.id}
							{...product.attributes}
						/>
					))}
				</div>
				{isFetchingNextPage ?
					<Spinner
						color="default"
						className="mt-[80px]"
					/>
				:	<div ref={ref} />}
			</>
		)
	},
)
