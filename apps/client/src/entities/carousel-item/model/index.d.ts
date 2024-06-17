import type { IProductData } from "@/entities/product"

import type { ICmsAttributes, ICmsImageData, ICmsMeta } from "@/shared/api"

export interface ICarouselAttributes extends ICmsAttributes {
	preview: {
		data: ICmsImageData
	}
	product: {
		data: IProductData
	}
}

export interface ICarouselData {
	attributes: ICarouselAttributes
	id: number
}

export interface ICarouselResponse {
	data: ICarouselData[]
	meta: ICmsMeta
}
