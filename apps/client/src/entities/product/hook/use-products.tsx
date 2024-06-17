"use client"

import { useInfiniteQuery } from "@tanstack/react-query"

import { getProducts } from "../api/get-products"

export const useProducts = () => {
	const { isPending, data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
		queryKey: ["products"],
		queryFn: ({ pageParam }) => getProducts(pageParam),
		select: (data) => data.pages.flatMap((page) => page.data),
		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages, lastPageParam) => {
			if (lastPageParam < lastPage.meta.pagination.pageCount) return lastPageParam + 1
			return undefined
		},
	})
	return { isPending, data, fetchNextPage, isFetchingNextPage }
}
