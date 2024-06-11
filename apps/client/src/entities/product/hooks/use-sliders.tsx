"use client"

import { useQuery } from "@tanstack/react-query"

import { getSliders } from "../api/get-sliders"

export const useSliders = () => {
	const { isPending, data } = useQuery({
		queryKey: ["sliders"],
		queryFn: () => getSliders(),
		select: (data) => data.data,
	})
	return { isPending, data }
}
