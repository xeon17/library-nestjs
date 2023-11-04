//src/auth/entity/auth.entity.ts
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class AuthEntity {
  @ApiProperty()
  id: number;

  @ApiProperty()
  token: string;

  @ApiProperty()
  role: Role;
}
