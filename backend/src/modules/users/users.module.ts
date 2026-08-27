import { Module } from '@nestjs/common';
import { UsersController } from './presentation/controllers/users.controller';
import { ListUsersUseCase } from './application/use-cases/list-users.use-case';
import { PrismaUsersRepository } from './infrastructure/repositories/prisma-users.repository';
import { USERS_REPOSITORY } from './domain/interfaces/users.repository';

@Module({
  controllers: [UsersController],
  providers: [
    ListUsersUseCase,
    { provide: USERS_REPOSITORY, useClass: PrismaUsersRepository },
  ],
})
export class UsersModule {}
