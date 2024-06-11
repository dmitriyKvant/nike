export type { IProductAttributes, IProductData, IProductResponse } from "./model/product"
export type { ISliderAttributes, ISliderData, ISliderResponse } from "./model/slider"

export { getSliders } from "./api/get-sliders"
export { getProducts } from "./api/get-products"

export { useInfiniteProducts } from "./hooks/use-infinite-products"
export { useSliders } from "./hooks/use-sliders"

export { ProductCard } from "./ui/product-card"
export { ProductList } from "./ui/product-list"
export { ProductCarousel } from "./ui/product-carousel"
