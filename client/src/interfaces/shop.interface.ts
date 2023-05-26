export interface Shop {
  id: number;
  name: string;
  displayName: string;
  products?: Product[];
}

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}
