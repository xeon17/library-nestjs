import { Module } from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { LanguagesController } from './languages.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { UsersModule } from '../users/users.module';

@Module({
  controllers: [LanguagesController],
  providers: [LanguagesService],
  imports: [PrismaModule, UsersModule],
})
export class LanguagesModule {}
