import type { ICmsAttributes, ICmsImage, ICmsMeta } from "@/shared/api"

export interface IProductAttributes extends ICmsAttributes {
	discountPrice?: number
	picture: ICmsImage
	price: number
	title: string
}

export interface IProductData {
	attributes: IProductAttributes
	id: number
}

export interface IProductResponse {
	data: IProductData[]
	meta: ICmsMeta
}
