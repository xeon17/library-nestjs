import { ApiProperty } from '@nestjs/swagger';
import { Publisher } from '@prisma/client';

export class PublisherEntity implements Publisher {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}
