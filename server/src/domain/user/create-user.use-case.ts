import { UserDataSource } from "../../data/user/user.datasource";
import { Service } from "typedi";
import { CreateUserInputModel, UserModel } from "../model/user.model";
import { hash } from "bcryptjs";
import { mapUserDataDto } from "../../data/util/user.map";


@Service()
export class CreateUserUseCase {
  constructor(
    private readonly userDataSource: UserDataSource
  ) {}

  async exec({ email, name, password, username }: CreateUserInputModel): Promise<UserModel> {
    const userWithSameEmail = await this.userDataSource.findByEmail(email);
    if(userWithSameEmail) {
      throw new Error('User already exist.');
    }

    const findUserByUsername = await this.userDataSource.findByUsername(username);
    if(findUserByUsername) {
      throw new Error('Username already exist.')
    }

    const passwordHash = await hash(password, 6);
    const createdUser = await this.userDataSource.save({ email, name, passwordHash, username })

    return mapUserDataDto(createdUser);
  }
}
