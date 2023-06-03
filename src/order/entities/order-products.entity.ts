import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class OrderProducts {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({ type: 'text' })
  name: string;
  @Column({ type: 'text' })
  description: string;
  @Column({ type: 'text' })
  image: string;
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;
  @Column()
  quantity: number;

  @ManyToOne(() => Order, (order) => order.products, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'order_id', referencedColumnName: 'id' })
  order: Order;
}
