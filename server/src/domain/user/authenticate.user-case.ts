import { UserDataSource } from '../../data/user/user.datasource';
import { Service } from 'typedi'
import { AuthenticateUserInputModel, AuthenticateUserModel } from '../model';
import { compare } from 'bcryptjs'
import { mapUserDataDto } from '../../data/util/user.map';
import jwt from 'jsonwebtoken';
import { Env } from '../../env';


@Service()
export class AuthenticateUserUseCase {
  constructor(
    private readonly userDataSource: UserDataSource
  ) {}

  async exec({ password, username }: AuthenticateUserInputModel): Promise<AuthenticateUserModel> {
    const user = await this.userDataSource.findByUsername(username);
    if(!user) {
      throw new Error('User not found');
    }

    const doesPasswordMatch = await compare(password, user.passwordHash);
    if(!doesPasswordMatch) {
      throw new Error('Invalid credentials error')
    }

    const userMap = mapUserDataDto(user);
    const token = jwt.sign({ sub: user.id }, Env.JWT_SECRET);

    return { ...userMap, token };
  }
}
