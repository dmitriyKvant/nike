import { http } from "@/shared/api"

import type { IProductResponse } from "../model"

const productQueries: Record<string, string> = {
	populate: "picture",
	sort: "id:asc",
	"pagination[pageSize]": "12",
}

const productSearchParams = new URLSearchParams(productQueries)

export const getProduct = async (slug: string) => {
	productSearchParams.set("filters[slug]", slug)
	const { data } = await http.get<IProductResponse>(`/products?${productSearchParams.toString()}`)
	return data
}
