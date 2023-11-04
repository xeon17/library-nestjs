import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersModule } from '../users/users.module';

@Module({
  controllers: [BooksController],
  providers: [BooksService],
  imports: [PrismaModule, UsersModule],
})
export class BooksModule {}
