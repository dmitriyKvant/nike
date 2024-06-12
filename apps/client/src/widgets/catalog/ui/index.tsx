"use client"

import { Spinner } from "@nextui-org/spinner"
import { useInView } from "framer-motion"
import { useEffect, useRef } from "react"

import { ProductList, useProducts } from "@/entities/product"

export const Catalog: React.FC = () => {
	const ref = useRef(null)
	const isInView = useInView(ref)
	const { isPending, data, fetchNextPage, isFetchingNextPage } = useProducts()
	useEffect(() => {
		if (isInView) {
			fetchNextPage()
		}
	})
	return (
		<div className="container pt-[80px] content-offset">
			<div className="mb-[80px] text-center">
				<h1 className="text-4xl font-semibold">Cushioning for Your Miles</h1>
				<p className="mx-auto mt-[20px] max-w-[759.97px] text-xl">
					A lightweight Nike ZoomX midsole is combined with increased stack heights to help provide
					cushioning during extended stretches of running.
				</p>
			</div>
			<ProductList
				isPending={isPending}
				data={data}
			/>
			{isFetchingNextPage ?
				<Spinner
					color="default"
					className="mt-[80px] flex justify-center"
				/>
			:	<div ref={ref} />}
		</div>
	)
}
