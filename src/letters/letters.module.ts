import { Module } from '@nestjs/common';
import { LettersService } from './letters.service';
import { LettersController } from './letters.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from '../users/users.module';

@Module({
  controllers: [LettersController],
  providers: [LettersService],
  imports: [PrismaModule, UsersModule],
})
export class LettersModule {}
