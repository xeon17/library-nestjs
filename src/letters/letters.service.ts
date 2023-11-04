import { Injectable } from '@nestjs/common';
import { CreateLetterDto } from './dto/create-letter.dto';
import { UpdateLetterDto } from './dto/update-letter.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LettersService {
  constructor(private prisma: PrismaService) {}
  create(createLetterDto: CreateLetterDto) {
    return this.prisma.letter.create({ data: createLetterDto });
  }

  findAll() {
    return this.prisma.letter.findMany();
  }

  findOne(id: number) {
    return this.prisma.letter.findUnique({ where: { id } });
  }

  update(id: number, updateLetterDto: UpdateLetterDto) {
    return this.prisma.letter.update({ where: { id }, data: updateLetterDto });
  }

  remove(id: number) {
    return this.prisma.letter.delete({ where: { id } });
  }
}
