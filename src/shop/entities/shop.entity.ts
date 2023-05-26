import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Shop {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({ type: 'text' })
  name: string;
  @Column({ type: 'text' })
  displayName: string;

  @OneToMany(() => Product, (product) => product.shop)
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
  products: Product[];
}
