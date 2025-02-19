import { IsEmail, IsString, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';

export class RegisterDto {
  @Transform(({ value }: { value: string }): string => value.trim())
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(4)
  username: string;

  @Transform(({ value }: { value: string }): string => value.trim())
  @IsString()
  @MinLength(8)
  password: string;
}
