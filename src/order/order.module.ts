import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Order } from './entities/order.entity';
import { Product } from '../shop/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Order, Product])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
