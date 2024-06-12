import { http } from "@/shared/api"

import type { ICarouselResponse } from "../model"

const carouselItemsQueries: Record<string, string> = {
	populate: "preview",
	sort: "id:asc",
	"filters[product][$notNull]": "true",
}

const carouselItemsSearchParams = new URLSearchParams(carouselItemsQueries)

export const getCarouselItems = async () => {
	const { data } = await http.get<ICarouselResponse>(
		`/carousel-items?${carouselItemsSearchParams.toString()}`,
	)
	return data
}
