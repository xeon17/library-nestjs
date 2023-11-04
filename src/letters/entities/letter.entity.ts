import { ApiProperty } from '@nestjs/swagger';
import { Letter } from '@prisma/client';

export class LetterEntity implements Letter {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}
