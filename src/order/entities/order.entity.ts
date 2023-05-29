import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { OrderProducts } from './order-products.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id?: number;
  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.orders, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;

  @OneToMany(() => OrderProducts, (orderProducts) => orderProducts.order)
  products: OrderProducts[];
}
