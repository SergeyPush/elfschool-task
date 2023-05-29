import { IsEmail, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class UserDto {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsString()
  address: string;
  @IsString()
  phone: string;
}

class CreateProductDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsString()
  image: string;
  @IsNumber()
  price: number;
  @IsNumber()
  quantity: number;
}

export class CreateOrderDto {
  @ValidateNested()
  @Type(() => UserDto)
  user: UserDto;
  @ValidateNested({ each: true })
  @Type(() => CreateProductDto)
  products: CreateProductDto[];
}
