"use client"

import { useInfiniteQuery } from "@tanstack/react-query"
import { useInView } from "framer-motion"
import { useEffect, useRef } from "react"

import { ProductList, getProducts } from "@/entities/product"

export const Catalog: React.FC = () => {
	const ref = useRef(null)
	const isInView = useInView(ref)
	const { isPending, data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
		queryKey: ["products"],
		queryFn: ({ pageParam }) => getProducts({ page: pageParam }),
		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages, lastPageParam) => {
			if (lastPageParam < lastPage.meta.pagination.pageCount) return lastPageParam + 1
			return undefined
		},
	})
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
			{
				<ProductList
					isPending={isPending}
					data={data?.pages.flatMap((page) => page.data)}
					isFetchingNextPage={isFetchingNextPage}
					ref={ref}
				/>
			}
		</div>
	)
}
