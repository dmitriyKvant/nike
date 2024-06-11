"use client"

import { ProductCarousel, useSliders } from "@/entities/product"

export const Hero: React.FC = () => {
	const { isPending, data } = useSliders()
	return (
		<ProductCarousel
			data={data}
			isLoaded={!isPending}
		/>
	)
}
