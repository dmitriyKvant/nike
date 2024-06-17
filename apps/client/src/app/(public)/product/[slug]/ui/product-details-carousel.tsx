import { Skeleton } from "@nextui-org/skeleton"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import type { IProductAttributes } from "@/entities/product"

import { Carousel, CarouselContent, CarouselItem } from "@/shared/ui"

interface IProductDetailsCarouselProps extends Required<Pick<IProductAttributes, "images">> {
	isLoaded?: boolean
}

interface IProductDetailsCarouselSkeletonProps extends Partial<Pick<IProductAttributes, "images">> {
	isLoaded: boolean
}

export const ProductDetailsCarousel: React.FC<
	IProductDetailsCarouselProps | IProductDetailsCarouselSkeletonProps
> = ({ images, isLoaded = true }) => {
	return (
		<Carousel
			className="w-[537px]"
			plugins={[
				Autoplay({
					delay: 3000,
					stopOnMouseEnter: true,
					stopOnInteraction: false,
				}),
			]}
			opts={{
				loop: true,
			}}>
			<Skeleton
				isLoaded={isLoaded}
				className="h-[671.25px]">
				<CarouselContent className="ml-0">
					{images?.data.map((image) => (
						<CarouselItem key={image.id}>
							<Image
								src={image.attributes.url ?? ""}
								alt={image.attributes.alternativeText ?? "Sneakers"}
								width={537}
								height={671.25}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
			</Skeleton>
		</Carousel>
	)
}
