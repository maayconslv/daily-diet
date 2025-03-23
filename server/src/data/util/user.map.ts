import { UserModel } from "@/domain/model/user.model";
import { UserEntity } from "../db/entity";

export function mapUserDataDto({ email, id, name, username }: UserEntity): UserModel {
  return {
    email,
    id,
    name,
    username
  }
}