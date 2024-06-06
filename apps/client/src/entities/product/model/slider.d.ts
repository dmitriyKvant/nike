import type { ICmsAttributes, ICmsImage, ICmsMeta } from "@/shared/api"

export interface ISliderAttributes extends ICmsAttributes {
	picture: ICmsImage
}

export interface ISliderData {
	attributes: ISliderAttributes
	id: number
}

export interface ISliderResponse {
	data: ISliderData[]
	meta: ICmsMeta
}
