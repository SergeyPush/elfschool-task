import { OrderResponse } from './order.interface';

export interface User {
  name: string;
  email: string;
  phone: string;
  address: string;
  orders?: OrderResponse[];
}
