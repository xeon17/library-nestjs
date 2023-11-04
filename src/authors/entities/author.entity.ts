import { ApiProperty } from '@nestjs/swagger';
import { Author } from '@prisma/client';

export class AuthorEntity implements Author {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  biography: string;

  @ApiProperty()
  photo: string;

  @ApiProperty()
  wikipedia: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
