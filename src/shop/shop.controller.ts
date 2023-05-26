import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseBoolPipe,
  Post,
  Query,
} from '@nestjs/common';
import { ShopProductDto } from './dto/shop-product.dto';
import { ShopService } from './shop.service';

@Controller('shop')
export class ShopController {
  constructor(private shopService: ShopService) {}
  @Post('/')
  addShopWithProducts(@Body() createDto: ShopProductDto) {
    return this.shopService.addShopWithProducts(createDto);
  }

  @Delete('/:id')
  deleteShopById(@Param('id') id: number) {
    return this.shopService.deleteShopById(id);
  }

  @Get('/')
  getShopsWithProducts(@Query('products', ParseBoolPipe) products: boolean) {
    return this.shopService.getShopsWithProducts(products);
  }

  @Get('/:id')
  getShopById(@Param('id') id: number) {
    return this.shopService.getShopById(id);
  }
}
