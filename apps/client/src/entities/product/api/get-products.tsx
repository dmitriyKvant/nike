import { http } from "@/shared/api"

import type { IProductResponse } from "../model"

const productQueries: Record<string, string> = {
	populate: "preview,images",
	sort: "id:asc",
	"pagination[pageSize]": "12",
}

const productSearchParams = new URLSearchParams(productQueries)

export const getProducts = async (page: number = 1) => {
	productSearchParams.set("pagination[page]", page.toString())
	const { data } = await http.get<IProductResponse>(`/products?${productSearchParams.toString()}`)
	return data
}
