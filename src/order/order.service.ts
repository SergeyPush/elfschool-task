import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { In, Like, Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { Product } from '../shop/entities/product.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Order) private orderRepository: Repository<Order>,
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  async createOrder(createOrderDto: CreateOrderDto) {
    const user = this.userRepository.create(createOrderDto.user);
    await this.userRepository.save(user);

    const productsFromDto = createOrderDto.products.map(
      (product) => product.id,
    );

    const products = await this.productRepository.find({
      where: { id: In([...productsFromDto]) },
    });
    const order = this.orderRepository.create({
      user: user,
      products: products,
      total: createOrderDto.total,
    });

    await this.orderRepository.save(order);
    return order;
  }

  async getOrderById(orderId: number) {
    return this.orderRepository.findOne({
      where: { id: orderId },
      relations: ['products', 'user'],
    });
  }

  async getAllOrdersOfUser(userEmail: string) {
    return this.userRepository.find({
      where: { email: Like(`%${userEmail}%`) },
      relations: ['orders', 'orders.products'],
    });
  }
}
