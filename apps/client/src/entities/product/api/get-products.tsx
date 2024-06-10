import { http } from "@/shared/api"

import type { IProductResponse } from "../model/product"

const productQueries: Record<string, string> = {
	populate: "picture",
	sort: "id:asc",
	"pagination[pageSize]": "12",
}

const productSearchParams = new URLSearchParams(productQueries)

export const getProducts = async ({ page = 1 }: { page?: number } = {}) => {
	productSearchParams.set("pagination[page]", String(page))
	const { data } = await http.get<IProductResponse>(`/products?${productSearchParams.toString()}`)
	return data
}
