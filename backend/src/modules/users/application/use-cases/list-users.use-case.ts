import { Inject, Injectable } from '@nestjs/common';
import { USERS_REPOSITORY } from '../../domain/interfaces/users.repository';
import type { UsersRepository } from '../../domain/interfaces/users.repository';

@Injectable()
export class ListUsersUseCase {
  constructor(
    @Inject(USERS_REPOSITORY)
    private readonly users: UsersRepository,
  ) {}

  execute() {
    return this.users.findAll();
  }
}
