import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
  ParseIntPipe,
} from '@nestjs/common';
import { LettersService } from './letters.service';
import { CreateLetterDto } from './dto/create-letter.dto';
import { UpdateLetterDto } from './dto/update-letter.dto';
import { Role } from '@prisma/client';
import { Roles } from '../decorators/roles.decorator';
import { RoleGuard } from '../auth/role.guard';

@Controller('letters')
export class LettersController {
  constructor(private readonly lettersService: LettersService) {}

  @Post()
  @HttpCode(201)
  @Roles(Role.LIBRARIAN, Role.ADMIN)
  @UseGuards(RoleGuard)
  create(@Body() createLetterDto: CreateLetterDto) {
    return this.lettersService.create(createLetterDto);
  }

  @Get()
  findAll() {
    return this.lettersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.lettersService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.LIBRARIAN, Role.ADMIN)
  @UseGuards(RoleGuard)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateLetterDto: UpdateLetterDto,
  ) {
    return this.lettersService.update(id, updateLetterDto);
  }

  @Delete(':id')
  @Roles(Role.LIBRARIAN, Role.ADMIN)
  @UseGuards(RoleGuard)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.lettersService.remove(id);
  }
}
