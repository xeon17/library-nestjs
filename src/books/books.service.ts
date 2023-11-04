import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}
  create(createBookDto: CreateBookDto) {
    const { title, summary, isbn, pageCount, releaseDate } = createBookDto;
    return this.prisma.book.create({
      data: {
        title,
        isbn,
        summary,
        pageCount,
        releaseDate,
        language: {
          connect: {
            id: createBookDto.languageId,
          },
        },
        format: {
          connect: {
            id: createBookDto.formatId,
          },
        },
        letter: {
          connect: {
            id: createBookDto.letterId,
          },
        },
        publisher: {
          connect: {
            id: createBookDto.publisherId,
          },
        },
        genres: {
          connect: createBookDto.genreIds.map(
            (genre: { id: number; name: string }) => ({ id: genre.id }),
          ),
        },
        authors: {
          connect: createBookDto.authorIds.map(
            (author: { id: number; name: string }) => ({ id: author.id }),
          ),
        },
        categories: {
          connect: createBookDto.categoryIds.map(
            (category: { id: number; name: string }) => ({
              id: category.id,
            }),
          ),
        },
      },
    });
  }

  async findAll() {
    return this.prisma.book.findMany({
      include: {
        language: true,
        format: true,
        letter: true,
        publisher: true,
        categories: true,
        genres: true,
        authors: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.book.findUnique({
      where: { id },
      include: {
        language: true,
        format: true,
        letter: true,
        publisher: true,
        categories: true,
        genres: true,
        authors: true,
      },
    });
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.prisma.book.update({
      where: { id },
      data: updateBookDto,
    });
  }

  remove(id: number) {
    return this.prisma.book.delete({ where: { id } });
  }
}
