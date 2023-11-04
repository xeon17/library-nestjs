import { Module } from '@nestjs/common';
import { FormatsService } from './formats.service';
import { FormatsController } from './formats.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from '../users/users.module';

@Module({
  controllers: [FormatsController],
  providers: [FormatsService],
  imports: [PrismaModule, UsersModule],
})
export class FormatsModule {}
