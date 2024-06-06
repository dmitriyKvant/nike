import { http } from "@/shared/api"

import type { ISliderResponse } from "../model/slider"

const sliderQueries: Record<string, string> = {
	populate: "picture,product",
	sort: "id:asc",
}

const sliderSearchParams = new URLSearchParams(sliderQueries)

export const getSliders = async () => {
	console.log(sliderSearchParams.toString())
	const { data } = await http.get<ISliderResponse>(`/sliders?${sliderSearchParams.toString()}`)
	return data
}
