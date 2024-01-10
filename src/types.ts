export interface AppType {
  isSideBarOpen: boolean
}

export interface ProductSliceType {
  products: Product[],
  page: number,
  pageSize: number,
  startIndex: number,
  endIndex: number,
  items: Product[],
  categories: string[],
  searchStr: string,
  loading: boolean,
}

export interface CartSliceType {
  items: CartItem[],
  sum: number;
}

export type ProductInCart = {
  item: Product,
  count: number
}

export type CartItem = {
  id: number;
  count: number;
}

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export interface UserSliceType {
  name: string,
  email: string,
  contactNumber: string
}
