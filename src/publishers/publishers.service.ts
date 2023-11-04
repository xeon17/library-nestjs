import { Injectable } from '@nestjs/common';
import { CreatePublisherDto } from './dto/create-publisher.dto';
import { UpdatePublisherDto } from './dto/update-publisher.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PublishersService {
  constructor(private prisma: PrismaService) {}
  create(createPublisherDto: CreatePublisherDto) {
    return this.prisma.publisher.create({ data: createPublisherDto });
  }

  findAll() {
    return this.prisma.publisher.findMany();
  }

  findOne(id: number) {
    return this.prisma.publisher.findUnique({ where: { id } });
  }

  update(id: number, updatePublisherDto: UpdatePublisherDto) {
    return this.prisma.publisher.update({
      where: { id },
      data: updatePublisherDto,
    });
  }

  remove(id: number) {
    return this.prisma.publisher.delete({ where: { id } });
  }
}
