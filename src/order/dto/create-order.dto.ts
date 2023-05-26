import {
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
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
  @IsNumber()
  quantity: number;
}

export class CreateOrderDto {
  @ValidateNested()
  @Type(() => UserDto)
  user: UserDto;
  @IsNumber()
  total: number;
  @ValidateNested({ each: true })
  @Type(() => CreateProductDto)
  products: CreateProductDto[];
}
