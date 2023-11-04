import { Module } from '@nestjs/common';
import { PublishersService } from './publishers.service';
import { PublishersController } from './publishers.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from '../users/users.module';

@Module({
  controllers: [PublishersController],
  providers: [PublishersService],
  imports: [PrismaModule, UsersModule],
})
export class PublishersModule {}
