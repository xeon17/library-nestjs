import {
  IsArray,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsString,
  Length,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  title: string;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty()
  pageCount: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  summary: string;

  @IsString()
  @IsNotEmpty()
  @Length(13, 13)
  @ApiProperty()
  isbn: string;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty()
  releaseDate: Date;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty()
  letterId: number;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty()
  publisherId: number;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty()
  languageId: number;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty()
  formatId: number;

  @IsNotEmpty()
  @IsArray()
  @ApiProperty()
  authorIds: object[];

  @IsNotEmpty()
  @IsArray()
  @ApiProperty()
  genreIds: object[];

  @IsNotEmpty()
  @IsArray()
  @ApiProperty()
  categoryIds: object[];
}
