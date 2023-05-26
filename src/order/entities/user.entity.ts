import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({ type: 'text' })
  name: string;
  @Column({ type: 'text' })
  email: string;
  @Column({ type: 'text' })
  phone: string;
  @Column({ type: 'text' })
  address: string;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
