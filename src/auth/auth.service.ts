//src/auth/auth.service.ts
import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from './entity/auth.entity';
import * as bcrypt from 'bcrypt';
import { UserEntity } from '../users/entities/user.entity';
import { roundsOfHashing } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { Role } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string): Promise<AuthEntity> {
    // Step 1: Fetch a user with the given email
    const user = await this.prisma.user.findUnique({
      where: { email },
      select: { id: true, password: true, role: true },
    });

    // If no user is found, throw an error
    if (!user) {
      throw new NotFoundException(`No user found for email: ${email}`);
    }

    // Step 2: Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If password does not match, throw an error
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    // Update the user's login count and last login date
    await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        loginCount: {
          increment: 1,
        },
        lastLogin: {
          set: new Date(),
        },
      },
    });

    // Step 3: Generate a JWT containing the user's ID and return it
    return {
      id: user.id,
      token: this.jwtService.sign({ userId: user.id }),
      role: user.role,
    };
  }

  async signup(registerDto: RegisterDto): Promise<UserEntity> {
    const { email } = registerDto;
    // Step 1: Fetch a user with the given email
    const user = await this.prisma.user.findUnique({ where: { email } });

    // If no user is found, throw an error
    if (user) {
      throw new ConflictException(`User already exists for email: ${email}`);
    }

    // Hash the password
    registerDto.password = await bcrypt.hash(
      registerDto.password,
      roundsOfHashing,
    );

    // Remove the passwordConfirm field
    registerDto.passwordConfirm = null;

    // Step 2: Create a new user with the given data
    return this.prisma.user.create({
      data: {
        role: Role.STUDENT,
        ...registerDto,
      },
    });
  }

  async me(id: number): Promise<UserEntity> {
    return this.prisma.user.findUnique({ where: { id } });
  }
}
