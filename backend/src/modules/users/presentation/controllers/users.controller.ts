import { Controller, Get } from '@nestjs/common';
import { ListUsersUseCase } from '../../application/use-cases/list-users.use-case';

@Controller('users')
export class UsersController {
  constructor(private readonly listUsers: ListUsersUseCase) {}

  @Get()
  findAll() {
    return this.listUsers.execute();
  }
}
