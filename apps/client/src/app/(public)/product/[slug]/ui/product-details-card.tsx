"use client"

import { Spacer } from "@nextui-org/spacer"

import { CartAddButton } from "@/features/cart"
import { SelectSize } from "@/features/select-size"
import { WhishlistAddButton } from "@/features/whishlist"

import { useProduct } from "@/entities/product"

import { ProductDetailsCarousel } from "./product-details-carousel"
import { ProductDetailsDescription } from "./product-details-description"
import { ProductDetailsInfo } from "./product-details-info"

type TypeProductDetailsCardProps = {
	slug: string
}

export const ProductDetailsCard: React.FC<TypeProductDetailsCardProps> = ({ slug }) => {
	const { isPending, data } = useProduct(slug)
	if (isPending) {
		return (
			<div className="container flex justify-between pt-[160px] content-offset">
				<ProductDetailsCarousel isLoaded={!isPending} />
				<div>
					<ProductDetailsInfo isLoaded={!isPending} />
					<Spacer y={20} />
					<SelectSize isLoaded={!isPending} />
					<Spacer y={10} />
					<CartAddButton isLoaded={!isPending} />
					<Spacer y={3} />
					<WhishlistAddButton isLoaded={!isPending} />
					<Spacer y={10} />
					<ProductDetailsDescription isLoaded={!isPending} />
				</div>
			</div>
		)
	}
	return (
		<div className="container flex justify-between pt-[160px] content-offset">
			<div>
				{data?.map((product) => (
					<ProductDetailsCarousel
						key={product.id}
						{...product.attributes}
					/>
				))}
			</div>
			{data?.map((product) => (
				<div key={product.id}>
					<ProductDetailsInfo {...product.attributes} />
					<Spacer y={20} />
					<SelectSize {...product.attributes} />
					<Spacer y={10} />
					<CartAddButton />
					<Spacer y={3} />
					<WhishlistAddButton />
					<Spacer y={10} />
					{product.attributes.description && (
						<ProductDetailsDescription description={product.attributes.description} />
					)}
				</div>
			))}
		</div>
	)
}
