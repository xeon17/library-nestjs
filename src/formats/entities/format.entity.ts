import { ApiProperty } from '@nestjs/swagger';
import { Format } from '@prisma/client';

export class FormatEntity implements Format {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}
