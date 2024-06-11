"use client"

import { useInfiniteQuery } from "@tanstack/react-query"

import { getProducts } from "../api/get-products"

export const useInfiniteProducts = () => {
	const { isPending, data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
		queryKey: ["products"],
		queryFn: ({ pageParam }) => getProducts({ page: pageParam }),
		initialPageParam: 1,
		select: (data) => data.pages.flatMap((page) => page.data),
		getNextPageParam: (lastPage, allPages, lastPageParam) => {
			if (lastPageParam < lastPage.meta.pagination.pageCount) return lastPageParam + 1
			return undefined
		},
	})
	return { isPending, data, fetchNextPage, isFetchingNextPage }
}
