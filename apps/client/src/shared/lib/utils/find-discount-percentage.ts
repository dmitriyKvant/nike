export const findDiscountPercentage = (price: number, discountPrice: number) => {
	return (((price - discountPrice) / price) * 100).toFixed(2)
}
