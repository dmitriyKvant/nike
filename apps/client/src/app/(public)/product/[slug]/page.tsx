import { HydrationBoundary, dehydrate } from "@tanstack/react-query"

import { getProduct } from "@/entities/product"

import { queryClient } from "@/shared/api"

import { ProductDetailsCard } from "./ui/product-details-card"

export default async function ProductPage({ params }: { params: { slug: string } }) {
	await queryClient.prefetchQuery({
		queryKey: ["products", params.slug],
		queryFn: () => getProduct(params.slug),
	})
	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<ProductDetailsCard slug={params.slug} />
		</HydrationBoundary>
	)
}
