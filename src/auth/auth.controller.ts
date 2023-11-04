//src/auth/auth.controller.ts

import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthEntity } from './entity/auth.entity';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UserEntity } from '../users/entities/user.entity';
import { User, UserInfo } from '../users/decorators/user.decorator';
import { SkipAuth } from '../decorators/skipauth.decorator';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @SkipAuth()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ type: AuthEntity })
  login(@Body() { email, password }: LoginDto) {
    return this.authService.login(email, password);
  }

  @Post('signup')
  @SkipAuth()
  @HttpCode(201)
  @ApiOkResponse({ type: AuthEntity })
  async signup(@Body() createUserDto: CreateUserDto) {
    return new UserEntity(await this.authService.signup(createUserDto));
  }

  @Get('/me')
  async me(@User() user: UserInfo) {
    return new UserEntity(await this.authService.me(user.userId));
  }
}
