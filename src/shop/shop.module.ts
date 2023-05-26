import { Module } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Shop } from './entities/shop.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shop, Product])],
  providers: [ShopService],
  controllers: [ShopController],
})
export class ShopModule {}
