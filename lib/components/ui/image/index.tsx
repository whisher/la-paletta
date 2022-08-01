import React from 'react';
import Img from 'next/image';

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

export interface ImageDto {
	__typename?: 'Asset';
	width: number | null;
	height: number | null;
	url: string;
	altText: string | null;
	thumbnail?: string;
}

export interface ImageProps {
	image: ImageDto;
	width: number;
	isThumbNail?: boolean;
}
const Image: React.FC<ImageProps> = ({ image, width, isThumbNail = false }) => {
	const { width: imageWidth, height: imageHeight } = image;
	const { width: w, height: h } = getSizesFromTransformation(
		{ width: Number(imageWidth), height: Number(imageHeight) },
		width
	);
	return (
		<Img
			src={isThumbNail ? image.thumbnail! : image.url}
			alt={String(image.altText)}
			width={w}
			height={h}
			quality="100"
		/>
	);
};

export { Image };
