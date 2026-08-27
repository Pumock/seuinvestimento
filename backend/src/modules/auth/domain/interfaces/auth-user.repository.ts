export interface AuthUser {
  id: string;
  email: string;
  passwordHash: string;
  role: string;
}

export interface AuthUserRepository {
  findByEmail(email: string): Promise<AuthUser | null>;
}

export const AUTH_USER_REPOSITORY = Symbol('AUTH_USER_REPOSITORY');
