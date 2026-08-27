export interface UserEntity {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface UsersRepository {
  findAll(): Promise<UserEntity[]>;
  findById(id: string): Promise<UserEntity | null>;
}

export const USERS_REPOSITORY = Symbol('USERS_REPOSITORY');
