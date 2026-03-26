export type ProductMetaData = {
  stock: number;
  size: string;
  color: string;
  imgs: string[];
  price: number;
  discounted: boolean;
  discountedPrice?: number;
  variantId: string;
};
export type Product = {
  id: string;
  name: string;
  tag: string;
  description: string;
  coverImg: string;
  position: number;
  meta: ProductMetaData[];
};

export type CartItem = {
  productId: string;
  name: string;
  variantId: string;
  size: string;
  color: string;
  quantity: number;
  price: number;
  discounted: boolean;
  discountedPrice?: number;
  imgs: string[];
  stock: number;
};
export type Cart = {
  cartId: string;
  cartItems: CartItem[];
};

export enum CartAction {
  ADD = "add",
  REMOVE = "remove",
}
export type RemoveFromCartBody = {
  productId: string;
  variantId: string;
};
export type FetchCartResponse = {
  cart: Cart;
  products: Product[];
  total: number;
};
