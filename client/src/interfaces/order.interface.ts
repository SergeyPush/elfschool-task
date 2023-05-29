import { CreateProduct } from './shop.interface';
import { User } from './user.interface';

export interface Order {
  user: User;
  products: CreateProduct[];
}

export interface OrderResponse extends Order {
  id: number;
}
