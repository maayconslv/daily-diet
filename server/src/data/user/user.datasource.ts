import { Service } from "typedi";
import { Repository } from "typeorm";
import { UserEntity } from "../db/entity";
import { DBConnection } from "../db/database.config";

interface CreateUserDataInput {
  name: string;
  email: string;
  passwordHash: string;
  username: string;
}

@Service()
export class UserDataSource {
  private readonly repository: Repository<UserEntity>  = DBConnection.getRepository(UserEntity);

  findByEmail(email: string): Promise<UserEntity | null> {
    return this.repository.findOne({ where: { email } });
  }

  findByUsername(username: string): Promise<UserEntity | null> {
    return this.repository.findOne({ where: { username } });
  }

  save(input: CreateUserDataInput): Promise<UserEntity> {
    return this.repository.save(input);
  }

  findById(id: string): Promise<UserEntity | null> {
    return this.repository.findOne({ where: { id } });
  }
}