import create, { StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';
import { CartState, ItemDto, ProductDto } from './type';
type MyPersist = (
	config: StateCreator<CartState>,
	options: PersistOptions<CartState>
) => StateCreator<CartState>;
const useCartStore = create<CartState>(
	(persist as unknown as MyPersist)(
		(set, get) => ({
			items: [],
			open: false,
			account: null,
			toggle: () => {
				const { open } = get();
				set((state) => ({
					...state,
					open: !open
				}));
			},
			addItem: (item: ItemDto, quantity: number) => {
				const { items } = get();
				const current: ItemDto | undefined = items.find((prod: ItemDto) => {
					const { id, color } = prod;
					return id === item.id && color.id === item.color.id;
				});
				if (!current) {
					item.quantity = quantity;
					set((state) => ({
						...state,
						items: [...items, item]
					}));
				} else {
					set((state) => ({
						...state,
						items: items.map((item: ItemDto) => {
							const { id, color } = current;
							if (id === item.id && color.id === item.color.id) {
								item.quantity! += quantity;
								return item;
							}
							return item;
						})
					}));
				}
			},
			updateQuantityItem: (
				pid: ItemDto['id'],
				cid: ProductDto['productVariantColors'][0]['id'],
				quantity: number
			) => {
				const { items } = get();
				const current: ItemDto | undefined = items.find((prod: ItemDto) => {
					const { id, color } = prod;
					return id === pid && color.id === cid;
				});
				if (current) {
					set((state) => ({
						...state,
						items: items.map((item) => {
							const { id, color } = current;
							if (id === item.id && color.id === item.color.id) {
								item.quantity! -= quantity;
								return item;
							}
							return item;
						})
					}));
				}
			},
			getQuantityItem: (pid: ItemDto['id'], cid: ProductDto['productVariantColors'][0]['id']) => {
				const { items } = get();
				const current: ItemDto | undefined = items.find((prod: ItemDto) => {
					const { id, color } = prod;
					return id === pid && color.id === cid;
				});
				if (current) {
					return current.quantity!;
				}
				return 0;
			},
			getTotalItems: () => {
				const { items } = get();
				return items.reduce((acc, curr) => acc + curr.quantity!, 0);
			},
			getTotal: () => {
				const items = get().items as ItemDto[];
				return items.reduce((acc, curr) => acc + curr.quantity! * curr.price, 0);
			},
			getTotalItem: (pid: ItemDto['id'], cid: ProductDto['productVariantColors'][0]['id']) => {
				const { items } = get();
				const current = items.find((prod: ItemDto) => {
					const { id, color } = prod;
					return id === pid && color.id === cid;
				});
				if (current) {
					return current.quantity! * current.price;
				}
				return 0;
			},
			removeItem: (item: ItemDto) => {
				const { items } = get();

				set((state) => ({
					...state,
					items: items.filter((prod) => {
						const { id, color } = prod;
						if (item.id === id) {
							return item.color.id !== color.id;
						}
						return prod;
					})
				}));
			}
		}),
		{ name: 'cart-store' }
	)
);

export { useCartStore };
