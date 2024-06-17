import type { ICmsAttributes, ICmsImageData, ICmsMeta } from "@/shared/api"

export interface IProductAttributes extends ICmsAttributes {
	allSizes: string[]
	availableSizes: string[]
	description?: string
	discountPrice?: number
	preview: {
		data: ICmsImageData
	}
	images: {
		data: ICmsImageData[]
	}
	price: number
	title: string
	slug: string
	sex: "man" | "woman"
}

export interface IProductData {
	attributes: IProductAttributes
	id: number
}

export interface IProductResponse {
	data: IProductData[]
	meta: ICmsMeta
}
