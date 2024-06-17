type TypeCmsImageFormat = {
	ext: string
	hash: string
	height: number
	mime: string
	name: string
	path?: string
	size: number
	sizeInBytes: number
	url: string
	width: number
}

export interface ICmsImageData {
	attributes: {
		alternativeText?: string
		caption?: string
		createdAt: string
		ext: string
		formats: {
			large?: TypeCmsImageFormat
			medium?: TypeCmsImageFormat
			small?: TypeCmsImageFormat
			thumbnail?: TypeCmsImageFormat
		}
		hash: string
		height: number
		mime: string
		name: string
		previewUrl?: string
		provider: string
		provider_metadata?: string
		size: number
		updatedAt: string
		url: string
		width: number
	}
	id: number
}

export interface ICmsAttributes {
	createdAt: string
	publishedAt: string
	updatedAt: string
}

export interface ICmsMeta {
	pagination: {
		page: number
		pageCount: number
		pageSize: number
		total: number
	}
}
