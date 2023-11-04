import { Module } from '@nestjs/common';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';
import { CategoriesModule } from './categories/categories.module';
import { AuthorsModule } from './authors/authors.module';
import { GenresModule } from './genres/genres.module';
import { LettersModule } from './letters/letters.module';
import { PublishersModule } from './publishers/publishers.module';
import { LanguagesModule } from './languages/languages.module';
import { FormatsModule } from './formats/formats.module';
import { UserInterceptor } from './users/interceptors/user.interceptor';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    AuthModule,
    BooksModule,
    CategoriesModule,
    AuthorsModule,
    GenresModule,
    LettersModule,
    PublishersModule,
    LanguagesModule,
    FormatsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: UserInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
