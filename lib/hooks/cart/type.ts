import { GetProductSlugQuery } from '@/graphcms/generated/graphql';

export type ProductDto = NonNullable<GetProductSlugQuery['product']>;
export type ColorDto = ProductDto['productVariantColors'][0];
export type ImageDto = ProductDto['image'];
export type ItemDto = {
	id: string;
	name: string;
	color: ColorDto;
	image: ImageDto;
	price: number;
	quantity?: number;
};
export type CartState = {
	items: ItemDto[];
	open: boolean;
	toggle: () => void;
	addItem: (item: ItemDto, quantity: number) => void;
	updateQuantityItem: (
		pid: ItemDto['id'],
		cid: ProductDto['productVariantColors'][0]['id'],
		quantity: number
	) => void;
	getQuantityItem: (id: ItemDto['id'], cid: ProductDto['productVariantColors'][0]['id']) => number;
	getTotalItems: () => number;
	getTotal: () => number;
	getTotalItem: (pid: ItemDto['id'], cid: ProductDto['productVariantColors'][0]['id']) => number;
	/*removeItem: (idt: ItemDto['id']) => void;
	
	emptyCart: () => void;
	getItem: (
		id: ItemDto['id'],
		color: ProductDto['productVariantColors'][0]['id']
	) => ItemDto | undefined;
	inCart: (id: ItemDto['id'], color: ProductDto['productVariantColors'][0]['id']) => boolean;*/
};
