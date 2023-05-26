import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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

  @Get('/:id')
  getShopById(@Param('id') id: number) {
    return this.shopService.getShopById(id);
  }

  @Get('/')
  getShopsWithProducts() {
    return this.shopService.getShopsWithProducts();
  }
}
