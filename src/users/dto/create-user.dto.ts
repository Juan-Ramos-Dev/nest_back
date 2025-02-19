import { Transform } from 'class-transformer';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @Transform(({ value }: { value: string }): string => value.trim())
  @IsString()
  @IsEmail()
  @MinLength(10)
  email: string;

  @Transform(({ value }: { value: string }): string => value.trim())
  @IsString()
  @MinLength(5)
  @IsOptional()
  username?: string;

  @Transform(({ value }: { value: string }): string => value.trim())
  @IsString()
  @MinLength(8)
  password: string;
}
