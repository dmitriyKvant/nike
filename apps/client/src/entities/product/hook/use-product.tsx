"use client"

import { useQuery } from "@tanstack/react-query"

import { getProduct } from "../api/get-product"

export const useProduct = (slug: string) => {
	const { isPending, data } = useQuery({
		queryKey: ["products", slug],
		queryFn: () => getProduct(slug),
		select: (data) => data.data,
	})
	return { isPending, data }
}
