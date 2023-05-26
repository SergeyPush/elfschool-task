import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Product } from '../../shop/entities/product.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id?: number;
  @CreateDateColumn()
  createdAt: Date;
  @Column({ type: 'numeric' })
  total: number;

  @ManyToOne(() => User, (user) => user.orders, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;

  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];
}
