import {
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ProductDto {
  @IsOptional()
  id?: number;
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsString()
  image: string;
  @IsNumber()
  price: number;
}

export class ShopProductDto {
  @IsString()
  name: string;
  @IsString()
  displayName: string;
  @ValidateNested({ each: true })
  @Type(() => ProductDto)
  products: ProductDto[];
}
