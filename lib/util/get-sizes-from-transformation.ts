type SizesDto = { width: number; height: number };
export const getSizesFromTransformation = (
	sizes: SizesDto,
	width: number,
	trasform = true
): SizesDto => {
	if (!trasform) {
		return sizes;
	}
	const { width: w, height: h } = sizes;
	const r = Math.round(w / width);
	return { width, height: Math.round(h / r) };
};
