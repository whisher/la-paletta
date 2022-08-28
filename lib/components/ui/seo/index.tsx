import React from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import { defaultUrl } from 'next-seo.config';
export interface ImageSeoDto {
	__typename?: 'Asset';
	width: number | null;
	height: number | null;
	url: string;
	altText: string | null;
	thumbnail?: string;
}
export interface SeoProps {
	title: string;

	image: ImageSeoDto;
}
const SEO: React.FC<SeoProps> = ({ title, image }) => {
	const router = useRouter();
	const data = {
		title,
		openGraph: {
			url: defaultUrl + router.asPath,
			title,

			images: [
				{
					url: image.url,
					width: Number(image.width),
					height: Number(image.height),
					alt: String(image.altText)
				}
			]
		}
	};
	return <NextSeo {...data} />;
};

export { SEO };
