import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './presentation/controllers/auth.controller';
import { JwtStrategy } from './presentation/strategies/jwt.strategy';
import { LoginUseCase } from './application/use-cases/login.use-case';
import { PrismaAuthUserRepository } from './infrastructure/repositories/prisma-auth-user.repository';
import { BcryptPasswordHasher } from './infrastructure/services/bcrypt-password-hasher.service';
import { AUTH_USER_REPOSITORY } from './domain/interfaces/auth-user.repository';
import { PASSWORD_HASHER } from './domain/interfaces/password-hasher.interface';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthController],
  providers: [
    LoginUseCase,
    JwtStrategy,
    { provide: AUTH_USER_REPOSITORY, useClass: PrismaAuthUserRepository },
    { provide: PASSWORD_HASHER, useClass: BcryptPasswordHasher },
  ],
})
export class AuthModule {}
