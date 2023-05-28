import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Shop } from './shop.entity';

@Entity()
export class Product {
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
  @ManyToOne(() => Shop, (shop) => shop.products, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'shop_id', referencedColumnName: 'id' })
  shop: Shop;
}
