import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from '../users/users.module';

@Module({
  controllers: [AuthorsController],
  providers: [AuthorsService],
  imports: [PrismaModule, UsersModule],
})
export class AuthorsModule {}
