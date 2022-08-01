export const formatPrice = (price: number): string => {
	const currency = '€';
	if (price === 0) {
		return currency + '0.00';
	}
	const formatPrice = price / 100;
	return currency + formatPrice.toFixed(2);
};
