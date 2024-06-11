import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query"

import { Catalog } from "@/widgets/catalog"
import { Hero } from "@/widgets/hero"

import { getProducts, getSliders } from "@/entities/product"

export default async function HomePage() {
	const queryClient = new QueryClient()
	await queryClient.prefetchQuery({
		queryKey: ["sliders"],
		queryFn: () => getSliders(),
	})
	await queryClient.prefetchInfiniteQuery({
		queryKey: ["products"],
		queryFn: ({ pageParam }) => getProducts({ page: pageParam }),
		initialPageParam: 1,
	})
	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<Hero />
			<Catalog />
		</HydrationBoundary>
	)
}
