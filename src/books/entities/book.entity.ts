import { Book } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
export class BookEntity implements Book {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  pageCount: number;

  @ApiProperty()
  summary: string;

  @ApiProperty()
  isbn: string;

  @ApiProperty()
  letterId: number;

  @ApiProperty()
  publisherId: number;

  @ApiProperty()
  languageId: number;

  @ApiProperty()
  formatId: number;

  @ApiProperty()
  genres: object[];

  @ApiProperty()
  authors: object[];

  @ApiProperty()
  categories: object[];

  @ApiProperty()
  reservations: object[];

  @ApiProperty()
  rents: object[];

  @ApiProperty()
  reservedCount: number;

  @ApiProperty()
  quantityCount: number;

  @ApiProperty()
  rentedCount: number;

  @ApiProperty()
  releaseDate: Date;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
