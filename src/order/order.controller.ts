import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post('/')
  createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.createOrder(createOrderDto);
  }

  @Get('/:id')
  getOrderById(@Param('id') id: number) {
    return this.orderService.getOrderById(id);
  }

  @Get('/')
  getAllOrdersOfUser(@Query('email') email: string) {
    return this.orderService.getAllOrdersOfUser(email);
  }

  @Delete('/user/:id')
  deleteUserById(@Param('id') id: number) {
    return this.orderService.deleteUserById(id);
  }
}
