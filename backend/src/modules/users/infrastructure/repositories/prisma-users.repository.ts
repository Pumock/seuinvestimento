import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../infrastructure/prisma/prisma.service';
import {
  UserEntity,
  UsersRepository,
} from '../../domain/interfaces/users.repository';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<UserEntity[]> {
    return this.prisma.user.findMany({
      select: { id: true, name: true, email: true, role: true },
    });
  }

  findById(id: string): Promise<UserEntity | null> {
    return this.prisma.user.findUnique({
      where: { id },
      select: { id: true, name: true, email: true, role: true },
    });
  }
}
