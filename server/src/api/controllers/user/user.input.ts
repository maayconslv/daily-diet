import { IsEmail, IsString } from 'class-validator'

export class CreateUserInput {
  @IsString()
  name: string

  @IsString()
  username: string

  @IsEmail()
  email: string

  @IsString()
  password: string;
}

export class AuthenticateUserInput {
  @IsString()
  username: string

  @IsString()
  password: string;
}