import { IsEmail, IsNumber, IsString, ValidateNested } from 'class-validator';
import { ProductDto } from '../../shop/dto/shop-product.dto';
import { Type } from 'class-transformer';

export class UserDto {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsString()
  address: string;
  @IsString()
  phone: string;
}

export class CreateOrderDto {
  @ValidateNested()
  @Type(() => UserDto)
  user: UserDto;
  @IsNumber()
  total: number;
  @ValidateNested({ each: true })
  @Type(() => ProductDto)
  products: ProductDto[];
}
