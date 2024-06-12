import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query"

import { Catalog } from "@/widgets/catalog"

import { MainCarousel, getCarouselItems } from "@/entities/carousel-item"
import { getProducts } from "@/entities/product"

export default async function HomePage() {
	const queryClient = new QueryClient()
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
