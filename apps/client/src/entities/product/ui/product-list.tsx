"use client"

import type { UseInfiniteQueryResult } from "@tanstack/react-query"

import type { IProductData } from "../model"
import { ProductCard } from "./product-card"

interface IProductListProps extends Pick<UseInfiniteQueryResult, "isPending"> {
	data?: IProductData[]
}

export const ProductList: React.FC<IProductListProps> = ({ isPending, data }) => {
	if (isPending) {
		return (
			<div className="grid-container">
				{[...Array(12)].map((_, id) => (
					<ProductCard
						key={id}
						isLoaded={!isPending}
					/>
				))}
			</div>
		)
	}
	return (
		<div className="grid-container">
			{data?.map((product) => (
				<ProductCard
					key={product.id}
					{...product.attributes}
				/>
			))}
		</div>
	)
}
