import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { Role } from '@prisma/client';

export class UserEntity implements User {
  constructor({ ...data }: Partial<UserEntity>) {
    Object.assign(this, data);
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @Exclude()
  password: string;

  @Exclude()
  passwordConfirm: string;

  @Exclude()
  passwordChangedAt: Date;

  @Exclude()
  passwordResetToken: string;

  @Exclude()
  passwordResetExpires: Date;

  @ApiProperty()
  username: string;

  @ApiProperty()
  role: Role;

  @ApiProperty()
  photo: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  birthDate: Date;

  @ApiProperty()
  address: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  country: string;

  @ApiProperty()
  loginCount: number;

  @Exclude()
  active: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  lastLogin: Date;
}
