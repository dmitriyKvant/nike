import { HydrationBoundary, dehydrate } from "@tanstack/react-query"

import { Catalog } from "@/widgets/catalog"

import { MainCarousel, getCarouselItems } from "@/entities/carousel-item"
import { getProducts } from "@/entities/product"

import { queryClient } from "@/shared/api"

export default async function HomePage() {
	await queryClient.prefetchQuery({
		queryKey: ["carousel-items"],
		queryFn: () => getCarouselItems(),
	})
	await queryClient.prefetchInfiniteQuery({
		queryKey: ["products"],
		queryFn: ({ pageParam }) => getProducts(pageParam),
		initialPageParam: 1,
	})
	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<MainCarousel />
			<Catalog />
		</HydrationBoundary>
	)
}
