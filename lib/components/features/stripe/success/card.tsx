import React from 'react';

import { GetDoneOrderProductQuery } from '@/graphcms/generated/graphql';

import { PRODUCT_THUMBNAIL } from '../../../../costants';
import { formatPrice } from '../../../../util/format-price';
import { Image } from '@/components/ui/image';

export interface StripeSuccessCardProps {
	data: GetDoneOrderProductQuery['orders']['0']['orderItems'][0];
}

const StripeSuccessCard: React.FC<StripeSuccessCardProps> = ({ data }) => {
	const { id, quantity, total, product, productVariantColor } = data;

	return product && productVariantColor ? (
		<>
			<div className="flex items-center">
				{/* eslint-disable */}
				<div className="relative">
					<Image image={product.image} width={PRODUCT_THUMBNAIL} />
					<span
						className="absolute top-0 left-0 h-4 w-4 shadow-sm rounded-sm"
						style={{ backgroundColor: String(`#${productVariantColor.hex}`) }}
					></span>
				</div>
				{/* eslint-enable */}
				<p className="flex-1 text-base text-ellipsis">{product.name}</p>
			</div>
			<div className="flex">
				<div className="w-2/6 text-center">{formatPrice(total)}</div>
			</div>
		</>
	) : null;
};

export { StripeSuccessCard };
