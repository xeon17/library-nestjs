import { Injectable } from '@nestjs/common';
import { CreateFormatDto } from './dto/create-format.dto';
import { UpdateFormatDto } from './dto/update-format.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FormatsService {
  constructor(private prisma: PrismaService) {}
  create(createFormatDto: CreateFormatDto) {
    return this.prisma.format.create({ data: createFormatDto });
  }

  findAll() {
    return this.prisma.format.findMany();
  }

  findOne(id: number) {
    return this.prisma.format.findUnique({ where: { id } });
  }

  update(id: number, updateFormatDto: UpdateFormatDto) {
    return this.prisma.format.update({ where: { id }, data: updateFormatDto });
  }

  remove(id: number) {
    return this.prisma.format.delete({ where: { id } });
  }
}
