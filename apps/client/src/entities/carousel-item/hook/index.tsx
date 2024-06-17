"use client"

import { useQuery } from "@tanstack/react-query"

import { getCarouselItems } from "../api"

export const useCarouselItems = () => {
	const { isPending, data } = useQuery({
		queryKey: ["carousel-items"],
		queryFn: () => getCarouselItems(),
		select: (data) => data.data,
	})
	return { isPending, data }
}
