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
};

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
