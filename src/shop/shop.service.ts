import { Injectable } from '@nestjs/common';
import { ShopProductDto } from './dto/shop-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shop } from './entities/shop.entity';
import { Product } from './entities/product.entity';

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(Shop) private shopRepository: Repository<Shop>,
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  async addShopWithProducts(shopDto: ShopProductDto) {
    const shop = await this.shopRepository.save({
      name: shopDto.name,
      displayName: shopDto.displayName,
    });

    const products = shopDto.products.map((product) =>
      this.productRepository.create({ ...product, shop }),
    );
    await this.productRepository.save(products);
    return await this.shopRepository.save(shop);
  }

  async getShopsWithProducts() {
    return this.shopRepository.find({ relations: ['products'] });
  }

  async deleteShopById(shopId: number) {
    const shop = await this.getShopById(shopId);
    await this.shopRepository.remove(shop);
    return { removed: shop.name };
  }

  async getShopById(shopId: number) {
    return this.shopRepository.findOne({
      where: { id: shopId },
      relations: ['products'],
    });
  }
}
