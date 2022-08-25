import React from 'react';

import { GetDoneOrderProductQuery } from '@/graphcms/generated/graphql';

import { PRODUCT_THUMBNAIL } from '../../../../costants';
import { formatPrice } from '../../../../util/format-price';
import { Image } from '@/components/ui/image';

export interface StripeSuccessCardProps {
	data: GetDoneOrderProductQuery['orders']['0']['orderItems'][0];
}

const StripeSuccessCard: React.FC<StripeSuccessCardProps> = ({ data }) => {
	const { quantity, total, product, productVariantColor } = data;

	return product && productVariantColor ? (
		<div className="flex justify-between items-center">
			{/* eslint-disable */}
			<div className="relative">
				<Image image={product.image} width={PRODUCT_THUMBNAIL} />
				<span
					className="absolute top-0 left-0 h-4 w-4 shadow-sm rounded-sm"
					style={{ backgroundColor: String(`#${productVariantColor.hex}`) }}
				></span>
			</div>
			{/* eslint-enable */}
			<p className="text-base text-ellipsis">{product.name}</p>
			<p>x{quantity}</p>
			<p>{formatPrice(total)}</p>
		</div>
	) : null;
};

export { StripeSuccessCard };
