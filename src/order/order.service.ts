import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Like, Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { Product } from '../shop/entities/product.entity';
import { OrderProducts } from './entities/order-products.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Order) private orderRepository: Repository<Order>,
    @InjectRepository(Product) private productRepository: Repository<Product>,
    @InjectRepository(OrderProducts)
    private orderProductsRepository: Repository<OrderProducts>,
  ) {}

  async createOrder(createOrderDto: CreateOrderDto) {
    const user = this.userRepository.create(createOrderDto.user);
    const order = this.orderRepository.create({
      user: user,
    });

    const newProducts = createOrderDto.products.map((product) =>
      this.orderProductsRepository.create({
        name: product.name,
        description: product.description,
        price: +product.price,
        image: product.image,
        quantity: product.quantity,
      }),
    );

    order.products = newProducts;
    //
    await this.orderProductsRepository.save(newProducts);
    await this.orderRepository.save(order);
    await this.userRepository.save(user);
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
