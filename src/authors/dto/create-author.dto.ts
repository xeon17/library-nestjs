import { IsNotEmpty, IsString, MinLength, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthorDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  biography: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  photo?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  wikipedia?: string;
}
