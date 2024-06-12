import type { IProductData } from "@/entities/product"

import type { ICmsAttributes, ICmsImage, ICmsMeta } from "@/shared/api"

export interface ICarouselAttributes extends ICmsAttributes {
	preview: ICmsImage
	product: IProductData
}

export interface ICarouselData {
	attributes: ICarouselAttributes
	id: number
}

export interface ICarouselResponse {
	data: ICarouselData[]
	meta: ICmsMeta
}
